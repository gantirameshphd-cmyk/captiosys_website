# captiosys.in: website (rebuild with CuroNexus + Vytel)

Plain static HTML/CSS/JS. There's no build step: upload the folder as it is to any static host (S3 + CloudFront, Netlify, GitHub Pages, cPanel).

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home: the connected care loop (CuroNexus → Vytel), both products, how they connect, why Captiosys, roadmap |
| `curonexus.html` | Product 01: portals, referral lifecycle, 8-layer architecture, 8 services, security, link to Vytel |
| `vytel.html` | Product 02: home sample collection, how it works, tube status tracker, four sides (patients, collectors, labs, doctors), chain of custody, Hyderabad pilot, tech |
| `services.html` | Engineering services |
| `about.html` | Company story, beliefs, registered details |
| `contact.html` | Enquiry form. `?topic=` preselects a topic: `curonexus`, `vytel`, `doctor`, `lab`, `collector`, `services`, `careers` |
| `css/style.css`, `js/main.js` | Shared design system and behaviour |
| `assets/` | Captiosys logo icon (cut from the company letterhead) and favicons |

## Logo

The company logo is unchanged: the red/blue ring icon with the "Captiosys" wordmark. The icon is cut from the scanned letterhead (offer letter PDF). If you have the original vector file (SVG/AI/EPS), replace `assets/captiosys-icon.png` with it for sharper edges at large sizes.

## Before going live

1. **Email**: the site uses `admin@captiosys.com` (footer, contact page, form). Make sure that mailbox is active.
2. **Contact form**: it currently opens the visitor's email app with the message filled in. To capture leads directly, point it at an endpoint (API Gateway + Lambda + SES, or Formspree) in `js/main.js`.
3. **Vytel claims**: the pilot details (6:30–11:00 AM slots, 30-minute window, NABL partners, 6 AM–8 PM support) come from the pilot plan. Update them if they change before launch.
4. **Analytics**: add your tag before `</head>` if you want it.

## DLT brand proof

Every page footer says that CuroNexus and Vytel are products of Captiosys Micro Technologies Private Limited, and `vytel.html` repeats it. Once deployed on captiosys.in, this page can be uploaded as brand proof for the `VYTELH` SMS header.
