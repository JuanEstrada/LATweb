const fs = require('node:fs');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const path = require('node:path');
let checks = 0;
function check(value, message) { assert(value, message); checks++; }
const publicHtml = fs.readFileSync(path.join(__dirname, '01-catalog-stories.html'), 'utf8');
check(!/id="(?:workspace|quote|story-form)"/.test(publicHtml), 'Public page must not contain staff screens or editor');
check(!publicHtml.includes('02-staff-preview.html'), 'Public page must not link to staff preview');
const staff = fs.readFileSync(path.join(__dirname, '02-staff-preview.html'), 'utf8');
check(staff.includes('id="login"') && staff.includes('No es un acceso real'), 'Separate login must be clearly illustrative');
check(/<fieldset disabled>/.test(staff), 'Prototype must not accept credentials');
check(staff.includes('Ver maqueta del panel (sin autenticación)'), 'Preview must not impersonate authentication');
for (const [name, html] of [['public', publicHtml], ['staff', staff]]) {
  check(html.includes('id="theme-choice"'), name + ' theme selector');
  check(html.includes('prefers-color-scheme: dark'), name + ' system theme');
  check(html.includes('data-theme="dark"'), name + ' dark palette');
  check(!/fetch\(|localStorage|sessionStorage|XMLHttpRequest/.test(html), name + ' no transmission or storage');
  const attributes = new Map();
  const control = { value: 'system', addEventListener(event, callback) { this.change = callback; } };
  const document = { querySelector: () => control, documentElement: {
    setAttribute: (key, value) => attributes.set(key, value), removeAttribute: key => attributes.delete(key)
  } };
  const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
  vm.runInNewContext(script.slice(script.indexOf('const themeChoice=')), { document });
  for (const value of ['dark', 'light', 'system']) {
    control.value = value; control.change();
    check(attributes.get('data-theme') === (value === 'system' ? undefined : value), name + ' theme behavior ' + value);
  }
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  check(ids.length === new Set(ids).size, name + ' unique IDs');
  for (const match of html.matchAll(/data-screen=["']([^"']+)["']/g)) check(ids.includes(match[1]), name + ' valid navigation ' + match[1]);
  for (const match of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) { new vm.Script(match[1]); checks++; }
}
const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, 'design.json'), 'utf8'));
check(manifest.artboards.some(board => board.file === '02-staff-preview.html'), 'Staff preview in manifest');
console.log(`${checks} structural checks passed. Visual rendering and real authentication are not tested.`);
