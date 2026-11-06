# Catalog and staff design preview

These are standalone visual prototypes, not a production application.

- `01-catalog-stories.html`: public catalog, inquiry mockup and read-only story. No staff navigation, quotation screen or story editor is embedded.
- `02-staff-preview.html`: independent staff design preview. Opens on a disabled login mockup. The explicitly labeled preview button and preview navigation can show fictional workspace, quotation and editor screens without authentication. This is intentional for design review, not an access-control mechanism.
- Both artboards offer System, Light and Dark appearance. System is the default. Manual changes last only for the current page; no preference or personal data is stored. The dark palette is a proposed accessible LAT variant, not an official brand specification.

## Production boundary

Do not deploy the staff preview as an operational panel or enter real customer data. A separate address and absent public links do not provide security. The real application must deliver staff pages, APIs, customer records and documents only after server-side session and permission checks. A successful real login, logout, session expiration and unauthorized-access handling remain unimplemented.

Security and customer privacy are established requirements, not optional follow-up work. No framework, authentication provider, database or deployment choice is finalized by this prototype.

Run `node design/catalog-editorial/check-layout.cjs` from the project root for structural checks and theme-handler behavior. These checks do not establish browser rendering, visual contrast in all states or production security. Browser verification is still required. The original three alternatives under `design/agency-initial/` are unchanged.
