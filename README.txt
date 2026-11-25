CRAFTWELL RENOVATIONS — ONE-PAGE WEBSITE

STRUCTURE
- index.html: the complete website, including the consultation form, renovation
  services, before-and-after comparisons, planning support, process and reviews.
- assets/css/styles.css: responsive desktop and mobile presentation.
- assets/js/site.js: homepage interactions and consultation email preparation.
- 404.html: an accessible fallback for unavailable addresses. Recognized former
  page URLs redirect to the corresponding section of the homepage. Unknown URLs
  display a Home link instead of redirecting automatically.
- _redirects: explicit redirects for the former pages on Cloudflare Pages.
- .nojekyll: serves the static files directly on GitHub Pages.

The separate Services, Projects, Our Process, About, Contact, Why Choose Us,
Reviews and Request Estimate pages have been removed. Their content is available
within the single homepage where shown in the supplied design reference.

CONTACT DETAILS
Phone: 416 839 2265
Email: vern@craftwell.com
Website: www.craftwell.com
Service area: Toronto and the Greater Toronto Area

CONSULTATION FORM
The form prepares a mailto email draft addressed to vern@craftwell.com with the
visitor's project details. The visitor reviews and sends the message using their
email application. This static website does not send or store form submissions
on a server, and opening the email draft is not a confirmation of delivery.

IMAGERY
Original repository photos are reused at their full available resolution.
Generated before-and-after comparison photos are illustrative renovation
concepts; they are not verified documentation of completed Craftwell projects.
The original raster assets remain in the repository.

HOSTING
This is a static HTML, CSS and JavaScript website. No framework, dependency
installation or build step is required. Publish the repository root through the
existing hosting configuration. Relative assets and homepage links support both
the GitHub Pages /orangeboard/ project path and a custom domain at /.

The 404 fallback recognizes former section URLs, their index.html forms and
legacy .html aliases. Cloudflare Pages uses the explicit rules in _redirects.
