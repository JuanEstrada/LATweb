# LATweb: initial scope and prototype review

Review the visual alternatives in `design/agency-initial/` before implementing production software. This delivery is a local, static prototype, not a working agency platform.

## Confirmed context

- One agency based in San Cristóbal de las Casas, Chiapas, Mexico. Location does not restrict its travel destinations.
- Responsive website with public contact, stories and social-network information.
- Staff access and protected client/provider data.
- Clients, suppliers, itineraries and quotations with configurable PDF output.
- A staff-managed blog with images and text, not just static story cards.
- Fictional examples until the agency supplies actual quotations and itinerary documents.
- Client portal and WhatsApp integration deferred. Internal client records remain in scope.
- Previously discussed: bank-transfer instructions and confirmation by email; no automated payment verification is assumed.

## Proposed operational rules — validate before production

| Area | Proposed starting point |
| --- | --- |
| Staff | Administrator and advisor; no public staff registration. Final permission matrix remains to be agreed. |
| Travel file | Link client, dates, travelers, quotations, itinerary and suppliers. |
| Quotations | Draft, sent, accepted, rejected, expired; preserve sent versions and show currency/validity. |
| PDF profiles | Commercial offer, traveler itinerary, internal summary. Costs and margins must never leak into customer output. |
| Reservations/payments | Staff records acceptance, deposits and balance; only verified bank receipt confirms payment. This operational extension is proposed, not separately approved production scope. |
| Dashboard | Pending inquiries, expiring quotations, payment checks and upcoming trips. |
| Content | Staff prepares drafts and explicitly publishes them. No public comments in the proposed first version. |

## Blog: proposed minimum workflow

1. Authorized staff opens Stories and creates a draft.
2. Enter title, short introduction and main text. Add a cover image and images within the story, each with alternative text and an optional caption.
3. Preview on mobile and desktop, then publish explicitly. Drafts stay private.
4. Update or unpublish the article later. Deletion policy remains to be defined before implementation.

A published article should show title, cover, introduction, body, image captions and publication date. The public index lists published stories only. Proposed additional metadata: readable unique URL and optional topic/category.

Production safety requirements to design and test: server-side authorization; safe text formatting and HTML sanitization; image type/content/size validation; safe generated storage names; upload limits and image optimization; rights/consent for photographs; draft isolation; accessible alternative text. These are requirements for implementation, not protections delivered by static HTML.

## Fictional review journey

- Confirmed agency: Linda Armas Tours. The user confirmed the supplied multicolor logo as official. The prototype uses the real agency name as text; the original image is not embedded. Interface colors are inspired approximations, not sampled official brand specifications.
- Inquiry: two adults request a four-day Chiapas trip, starting from San Cristóbal.
- Itinerary: arrival and town walk; a suggested communities/culture day; a nature excursion; departure. Locations and access must be confirmed before real sale.
- Illustrative total: MXN 18,400. Illustrative deposit: MXN 5,520. These are not market rates, a real offer or an availability claim.
- Example story: “Una mañana entre calles y montañas”. All copy is sample copy, not a claim of firsthand agency experience.
- The confirmed agency name is included; no actual customer names, customer records, bank accounts, contacts, testimonials, credentials or bookings are included.

## Prototype review path

Each alternative contains five navigable screens: public home, inquiry form, staff workspace, quotation/PDF layout, and stories/editor. The editor has a local preview and cover-image selection only. It does not upload, save or publish anything. The public form does not send data. The PDF screen is a visual layout, not a document generator. Private screens are design references, not authenticated routes.

| File | Direction | Tradeoff |
| --- | --- | --- |
| `../design/agency-initial/01-editorial.html` | Editorial journal | Strong storytelling and regional warmth; fewer offers visible at once. |
| `../design/agency-initial/02-trip-catalog.html` | Trip catalog | Fast discovery and comparison; less emphasis on long-form storytelling. |
| `../design/agency-initial/03-advisor-first.html` | Advisor-led journey | Clear consultation process and approachable forms; less immediate catalog breadth. |

Open an HTML file directly in a browser. Use its top navigation to switch screens. Local file selection never transmits images. Refreshing clears the prototype state.

## Deferred and unresolved

Deferred: multiagency, client portal, WhatsApp integration, live flight/hotel inventory, online card payments and native mobile apps. No technology stack, hosting, email service or production storage provider has been selected.

Needed later: approved brand/assets, contact/social details, actual quote samples, services and destinations, staff permissions, supported currencies/taxes, deposit and cancellation rules, and image rights. None prevents reviewing the fictional prototype now.

## Verification boundaries

Structural checks can validate self-contained HTML, manifest links and screen presence. No production behavior exists for a meaningful RED/GREEN test. Browser visual review, keyboard interaction and mobile rendering must be distinguished from structural checks; they are not implied by a passing HTML scan.
