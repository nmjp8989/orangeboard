const navItems=[['Home','index.html'],['About Us','about.html'],['Services','services.html'],['Our Process','process.html'],['Projects','projects.html'],['Why Choose Us','why-choose-us.html'],['Reviews','reviews.html'],['Contact','contact.html']];
const page=(location.pathname.split('/').pop()||'index.html');
const isServicesPage = page === 'services.html';
const headerNav = isServicesPage ? navItems.filter(([, url]) => url !== 'reviews.html') : navItems;
const servicesMenu = isServicesPage ? `<details class="services-nav-menu"><summary aria-current="page">Services <span class="services-nav-chevron" aria-hidden="true"></span></summary><div class="services-nav-options">${Array.from(document.querySelectorAll('.service-tile')).map(card => `<a href="#${card.id}">${card.querySelector('h2 span').innerHTML}</a>`).join('')}</div></details>` : '';
const header=`<header><div class="container topbar"><a class="brand" href="index.html" aria-label="Craftwell home"><img class="header-logo" src="${isServicesPage ? 'assets/services/logo.webp' : 'assets/craftwell-logo.jpg'}" alt="Craftwell Renovations"></a><div class="top-meta"><span class="meta-item"><b class="meta-icon">⌖</b> Toronto &amp; GTA</span><a class="meta-item" href="tel:+14165557283"><b class="meta-icon">☎</b> (416) 555-7283</a><a class="btn" href="estimate.html">${isServicesPage ? 'Request an Estimate' : 'Get a Free Consultation'} <span aria-hidden="true">→</span></a></div></div><nav class="nav"><div class="container nav-inner"><button class="menu-toggle" aria-label="Open navigation" aria-expanded="false">☰</button><div class="nav-links">${headerNav.map(([n,u])=>isServicesPage && u===page ? servicesMenu : `<a href="${u}" ${page===u?'class="active" aria-current="page"':''}>${n}</a>`).join('')}</div></div></nav></header>`;
const footer=`<footer class="footer"><div class="container"><div class="footer-grid"><div><a class="brand" href="index.html"><span class="brand-mark"><svg viewBox="0 0 60 52" fill="none"><path d="M5 28 30 5l25 23" stroke="#fff" stroke-width="6" stroke-linecap="round"/><path d="M13 25v21h34V25" stroke="#fff" stroke-width="5"/><path d="M24 45V31h12v14" stroke="#f47716" stroke-width="4"/></svg></span><span><span class="brand-name">CRAFTWELL</span><span class="brand-tag">Your build is our craft.</span></span></a><p>Renovation and construction solutions for homes and businesses across Toronto and the GTA.</p></div><div><h3>Explore</h3><div class="footer-links"><a href="about.html">About us</a><a href="services.html">Services</a><a href="projects.html">Our projects</a><a href="process.html">Our process</a>${isServicesPage ? '<a href="reviews.html">Reviews</a>' : ''}</div></div><div><h3>Get in touch</h3><div class="footer-links"><a href="tel:+14165557283">(416) 555-7283</a><a href="mailto:info@craftwellrenovations.ca">info@craftwellrenovations.ca</a><span>Toronto, Ontario</span></div></div><div><h3>Hours</h3><p>Mon – Fri: 8:00 AM – 6:00 PM<br>Sat: 9:00 AM – 4:00 PM<br>Sunday: By appointment</p><a class="btn" href="estimate.html">Request an Estimate →</a></div></div><div class="footer-bottom"><span>© <span data-year></span> Craftwell Renovations. All rights reserved.</span><span>Serving Toronto &amp; the GTA</span></div></div></footer><a class="btn mobile-cta" href="estimate.html">Get a Free Estimate →</a>`;
document.querySelectorAll('[data-site-header]').forEach(el=>el.innerHTML=header);document.querySelectorAll('[data-site-footer]').forEach(el=>el.innerHTML=footer);document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const toggle=document.querySelector('.menu-toggle');if(toggle)toggle.addEventListener('click',()=>{const menu=document.querySelector('.nav-links'),open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));button.classList.add('active');const category=button.dataset.filter;document.querySelectorAll('.project').forEach(card=>card.hidden=category!=='all'&&card.dataset.category!==category)}));
document.querySelectorAll('[data-demo-form]').forEach(form=>form.addEventListener('submit',event=>{event.preventDefault();const message=form.querySelector('.form-message');if(message){message.style.display='block';message.textContent='Thank you! Your form is working in preview mode. Connect a form service to receive submissions.'}form.reset()}));

const iconPaths = {
  shield: 'M12 22s7-3 7-10V6l-7-3-7 3v6c0 7 7 10 7 10ZM9 12l2 2 4-4',
  helmet: 'M3 16h18v3H3zM5 16a7 7 0 0 1 5-7m4 0a7 7 0 0 1 5 7M10 12V5h4v7',
  quality: 'M12 2l3 3 4 1 1 4 2 2-2 3-1 4-4 1-3 2-3-2-4-1-1-4-2-3 2-2 1-4 4-1zM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  calendar: 'M4 5h16v16H4zM4 10h16M8 3v4m8-4v4m-7 8 2 2 4-4',
  tag: 'M3 12 12 3h7l2 2v7l-9 9zM16 8h.01',
  people: 'M15 19h6v-2a4 4 0 0 0-3-4m-5-7a3 3 0 1 1 4 4M3 20v-2a5 5 0 0 1 10 0v2Zm8-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  phone: 'M5 4h4l2 5-3 2a13 13 0 0 0 5 5l2-3 5 2v4c0 1-1 2-2 2C10 21 3 14 3 6c0-1 1-2 2-2Z',
  pin: 'M12 22s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12Zm2-12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z',
  plan: 'M5 3h10l4 4v14H5zM14 3v5h5M8 11h8m-8 4h8m-8 3h5',
  chat: 'M4 5h16v12h-9l-5 4v-4H4zM8 11h.01m4 0h.01m4 0h.01',
  check: 'M21 12a9 9 0 1 1-5-8m-7 8 3 3 8-8',
};

function replaceIcons(selector, names) {
  document.querySelectorAll(selector).forEach((element, index) => {
    element.innerHTML = `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="${iconPaths[names[index]]}"></path></svg>`;
  });
}

replaceIcons('.topbar .meta-icon', ['pin', 'phone']);
replaceIcons('.home-intro .trust-icon', ['shield', 'helmet', 'quality', 'calendar', 'tag']);
replaceIcons('.page-why-choose-us .hero .feature-icon', ['shield', 'people', 'calendar', 'phone', 'pin']);
replaceIcons('.page-process .step-icon', ['people', 'plan', 'helmet', 'chat', 'check']);

document.querySelectorAll('.services-nav-options a').forEach(link => {
  link.addEventListener('click', () => { link.closest('details').open = false; });
});
