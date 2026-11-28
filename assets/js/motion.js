/* One-time reveals. Content remains visible without JS or IntersectionObserver. */
(() => {
  "use strict";
  const main = document.querySelector("main");
  if (!main || !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const selectors = [
    ".section-head", ".service-card", ".comparison", ".project-card",
    ".service-row", ".timeline article", ".steps > div", ".strip-grid > div",
    ".feature-grid > *", ".city-grid > *", ".review-list article",
    ".extra-services a", ".two-col > *", ".faq-photos > img",
    ".accordion > details", ".policy-list > article", ".privacy-contact",
    ".client-band-intro", ".client-values > div", ".cta-inner",
    ".split-banner > div", ".area-band > .wrap", ".area-brand > .wrap",
    ".contact-info", ".form-panel"
  ].join(",");
  // Avoid animating children of an already-animated card/row.
  const candidates = Array.from(main.querySelectorAll(selectors))
    .filter(el => !el.closest(".hero") && !el.parentElement.closest(selectors));
  const siblingIndex = new WeakMap();
  for (const el of candidates) {
    const parent = el.parentElement;
    const index = siblingIndex.get(parent) || 0;
    siblingIndex.set(parent, index + 1);
    el.style.setProperty("--cw-delay", (index % 4) * 40 + "ms");
  }
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const el = entry.target;
      observer.unobserve(el);
      // Do not animate a keyboard-focused control or one hidden by a filter.
      if (el.hidden || el.contains(document.activeElement) ||
          window.matchMedia("(prefers-reduced-motion: reduce)").matches) continue;
      el.classList.add("cw-reveal-play");
      el.addEventListener("animationend", function done(event) {
        if (event.target !== el || event.animationName !== "cw-rise") return;
        el.classList.remove("cw-reveal-play");
        el.removeEventListener("animationend", done);
      });
    }
  }, { threshold: 0.08, rootMargin: "0px 0px -18px 0px" });
  candidates.forEach(el => observer.observe(el));
})();
