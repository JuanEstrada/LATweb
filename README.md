# LATweb — specification and design prototype

A local prototype for a single travel agency based in San Cristóbal de las Casas. This is not a production application. Linda Armas Tours is the confirmed agency name. The interface palette is inspired by the user-confirmed logo; travel copy, illustrations and prices remain fictional. See [palette and contrast](design/agency-initial/palette.md).

## Open the prototype

Open one of these files in your browser (no installation or server required):

1. [Editorial journal](design/agency-initial/01-editorial.html) — recommended starting point for storytelling and a prominent blog.
2. [Trip catalog](design/agency-initial/02-trip-catalog.html) — prioritizes browsing travel ideas.
3. [Advisor-led journey](design/agency-initial/03-advisor-first.html) — prioritizes requesting a personalized trip.

Each file has five screen buttons: Home, Request, Staff workspace, Quotation/PDF, Stories/Editor. In Stories/Editor, change text, select a local image and update the preview. Refreshing clears all changes. Images are not uploaded. No content is saved or published. The PDF is a visual mockup only.

Read [the scope](docs/initial-scope.md) for confirmed requirements, proposed operational rules and unresolved production decisions. [Task evidence](odd/tasks/initial-design.md) records this delivery.

## Observed checks and limitations

- Initial Node structural validation: 78 assertions passed across three HTML artboards; JavaScript syntax parsed successfully.
- Brand/palette iteration: 85 structural assertions passed, including unchanged interaction scripts, all five screens, valid navigation, no remote assets and removal of provisional branding. Key text/action color pairs exceed 4.5:1; see palette.md. These checks do not establish browser rendering or accessibility compliance.
- Structural checks cover unique IDs, navigation targets, screen presence, no external assets, viewport/focus/reduced-motion hooks and absence of network/persistence APIs in the prototype.
- Browser rendering, mobile layout and keyboard interaction were not exercised: no browser automation tool was available. Accessibility is not certified by these checks.
- The design canvas tool is attached to the session directory `C:/Users/juN92`, not this project. It was not opened with an incorrect target. Open these files directly, or reopen the Pi session in `C:/dev/LATweb` to use the project canvas.
- Engram does not currently recognize the `latweb` project, so the task mirror is unavailable. Local documents are preserved.
- No production build/tests apply yet. There is no authentication, server, database, storage, email, payment processing or PDF generator.

## Next decision

Choose a visual direction or identify which parts to combine. This does not authorize a production implementation by itself. Real content and business policies can replace the fictional examples later.
