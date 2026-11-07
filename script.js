/* =========================================================
   Cleanora — interactions & animations
   ========================================================= */
(() => {
  'use strict';

  /* ---------- Image helper (Unsplash, optimised sizes) ---------- */
  const img = (id, w = 800) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;
  // If an image fails, hide it so the gradient backdrop shows instead
  document.addEventListener('error', e => {
    if (e.target.tagName === 'IMG') e.target.style.visibility = 'hidden';
  }, true);

  /* ---------- Content data ---------- */
  const services = [
    ['fa-house-chimney', 'Residential Cleaning', 'Regular upkeep that keeps your home fresh, tidy and healthy.', '1527515637462-cff94eecc1ac'],
    ['fa-broom', 'Deep Cleaning', 'Top-to-bottom scrubbing of every hidden corner and surface.', '1628177142898-93e36e4e3a50'],
    ['fa-building', 'Office Cleaning', 'Productive workplaces start with spotless desks and floors.', '1497366216548-37526070297c'],
    ['fa-rug', 'Carpet Cleaning', 'Hot-water extraction removes stains, allergens and odours.', '1558317374-067fb5f30001'],
    ['fa-couch', 'Sofa & Upholstery', 'Gentle, fabric-safe cleaning that revives your furniture.', '1555041469-a586c61ea9bc'],
    ['fa-window-maximize', 'Window Cleaning', 'Streak-free glass, frames and sills, inside and out.', '1581578731548-c64695cc6952'],
    ['fa-truck-moving', 'Move-In / Move-Out', 'Leave it spotless or arrive to a fresh start.', '1600585154340-be6161a56a0c'],
    ['fa-shop', 'Commercial Cleaning', 'Scalable programmes for retail, clinics and large venues.', '1584622650111-993a426fbf0a']
  ];
  const why = [
    ['fa-user-check', 'Professional Team', 'Vetted, trained and uniformed cleaners you can trust.'],
    ['fa-leaf', 'Eco-Friendly Products', 'Plant-based, non-toxic solutions safe for kids and pets.'],
    ['fa-tags', 'Affordable Pricing', 'Clear, upfront quotes with no hidden fees.'],
    ['fa-calendar-days', 'Flexible Scheduling', 'Same-week slots, evenings, weekends and recurring plans.'],
    ['fa-shield-halved', 'Trusted & Insured', 'Fully insured and bonded for your complete peace of mind.'],
    ['fa-medal', '100% Satisfaction', "Not delighted? We'll re-clean within 24 hours, free."]
  ];
  const gallery = [
    ['home', 'Modern Living Room', 'Residential', '1560448204-e02f11c3d0e2'],
    ['office', 'Open-Plan Office', 'Commercial', '1497366216548-37526070297c'],
    ['carpet', 'Carpet Restoration', 'Carpet', '1558317374-067fb5f30001'],
    ['deep', 'Kitchen Deep Clean', 'Deep Cleaning', '1556909114-f6e7ad7d3136'],
    ['home', 'Family Apartment', 'Residential', '1522708323590-d24dbb6b0267'],
    ['deep', 'Bathroom Detail', 'Deep Cleaning', '1584622650111-993a426fbf0a'],
    ['office', 'Executive Suite', 'Commercial', '1618221195710-dd6b41faaea6'],
    ['home', 'Luxury Villa', 'Residential', '1600210492486-724fe5c67fb0']
  ];
  const testimonials = [
    ['Sarah Mitchell', 'Homeowner', '1494790108377-be9c29b29330', 'Cleanora transformed our house. The team was punctual, friendly and the kitchen has never looked better. We booked monthly visits on the spot.'],
    ['David Okafor', 'Office Manager', '1507003211169-0a1dd7228f2d', 'Our office is spotless every morning. Staff noticed the difference immediately — reliable, discreet and genuinely professional.'],
    ['Emily Carter', 'Property Host', '1438761681033-6461ffad8d80', 'Perfect for my rental turnovers. Guest reviews now mention the cleanliness every time. Highly recommended!']
  ];
  const faqs = [
    ['What areas do you serve?', 'We cover the entire metro area and surrounding suburbs. Enter your address when booking and we will confirm coverage instantly.'],
    ['Do I need to provide cleaning supplies?', 'No. Our team brings professional equipment and eco-friendly products. Special requests can be noted in your booking.'],
    ['Are your cleaners insured and background-checked?', 'Yes. Every cleaner is vetted, trained and covered by our liability insurance.'],
    ['How long does a typical clean take?', 'A standard 2-bedroom home takes 2–3 hours. Deep cleans take 4–6 hours depending on condition.'],
    ['Can I reschedule or cancel?', 'Absolutely. Free rescheduling or cancellation up to 24 hours before your appointment.'],
    ['What if I am not satisfied?', 'Let us know within 24 hours and we will return to re-clean the areas at no extra charge.'],
    ['Do you offer recurring cleaning plans?', 'Yes — weekly, bi-weekly and monthly plans with discounts of up to 15%.'],
    ['Are your products safe for pets and children?', 'Our products are plant-based and non-toxic. Tell us about allergies and we will adapt.']
  ];

  /* ---------- Render dynamic sections ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  $('#serviceGrid').innerHTML = services.map(([ic, t, d, id]) => `
    <div class="col-sm-6 col-lg-3 reveal"><article class="svc">
      <div class="svc-img"><img data-u="${id}" data-w="600" alt="${t}"></div>
      <div class="svc-ico"><i class="fa-solid ${ic}"></i></div>
      <div class="svc-body"><h3>${t}</h3><p>${d}</p><a href="#contact">Learn More <i class="fa-solid fa-arrow-right ms-1"></i></a></div>
    </article></div>`).join('');

  $('#whyGrid').innerHTML = why.map(([ic, t, d]) => `
    <div class="col-md-6 col-lg-4 reveal"><div class="why-card"><i class="fa-solid ${ic}"></i><h3>${t}</h3><p>${d}</p></div></div>`).join('');

  $('#galleryGrid').innerHTML = gallery.map(([c, t, s, id]) => `
    <div class="col-6 col-lg-3 g-col" data-cat="${c}"><a class="g-item" href="${img(id, 1400)}" data-title="${t}">
      <img data-u="${id}" data-w="600" alt="${t}"><div class="g-cap"><small>${s}</small>${t}</div></a></div>`).join('');

  $('#tInner').innerHTML = testimonials.map(([n, r, id, q], i) => `
    <div class="carousel-item ${i ? '' : 'active'}"><div class="t-card">
      <img data-u="${id}" data-w="200" alt="${n}"><div class="stars">${'<i class="fa-solid fa-star"></i>'.repeat(5)}</div>
      <p>“${q}”</p><h4>${n}</h4><small>${r}</small></div></div>`).join('');
  $('#tDots').innerHTML = testimonials.map((_, i) =>
    `<button type="button" data-bs-target="#tCarousel" data-bs-slide-to="${i}" class="${i ? '' : 'active'}" aria-label="Slide ${i + 1}"></button>`).join('');

  $('#faq').innerHTML = faqs.map(([q, a], i) => `
    <div class="accordion-item"><h3 class="accordion-header"><button class="accordion-button ${i ? 'collapsed' : ''}" data-bs-toggle="collapse" data-bs-target="#f${i}">${q}</button></h3>
    <div id="f${i}" class="accordion-collapse collapse ${i ? '' : 'show'}" data-bs-parent="#faq"><div class="accordion-body">${a}</div></div></div>`).join('');

  $('#sv').innerHTML = '<option value="">Choose…</option>' + services.map(s => `<option>${s[1]}</option>`).join('');

  // Resolve data-u images (lazy except hero)
  $$('img[data-u]').forEach(el => {
    el.src = img(el.dataset.u, el.dataset.w || 800);
    if (!el.classList.contains('hero-bg')) el.loading = 'lazy';
  });
  $('#yr').textContent = new Date().getFullYear();
  $('#dt').min = new Date().toISOString().split('T')[0];

  /* ---------- Navbar ---------- */
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('scrolled', scrollY > 40);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  $$('#menu .nav-link, #menu .btn').forEach(a => a.addEventListener('click', () => {
    const m = bootstrap.Collapse.getInstance($('#menu')); if (m) m.hide();
  }));

  /* ---------- Bubbles ---------- */
  const bw = $('.bubbles');
  for (let i = 0; i < 22; i++) {
    const b = document.createElement('span'), s = 10 + Math.random() * 60;
    b.className = 'bubble';
    b.style.cssText = `width:${s}px;height:${s}px;left:${Math.random() * 100}%;animation-duration:${9 + Math.random() * 14}s;animation-delay:${-Math.random() * 20}s;--dx:${(Math.random() - .5) * 120}px`;
    bw.appendChild(b);
  }

  /* ---------- GSAP animations ---------- */
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    // Hero entrance
    gsap.timeline({ defaults: { ease: 'power4.out' } })
      .from('.hero-title .line > span', { yPercent: 110, duration: 1.1, stagger: .18 })
      .from('.hero-in', { y: 30, opacity: 0, duration: .8, stagger: .15 }, '-=.6')
      .from('.float-badge', { scale: 0, opacity: 0, duration: .8, stagger: .2, ease: 'back.out(2)' }, '-=.5');

    // Hero & image parallax
    gsap.to('.hero-bg', { yPercent: 10, ease: 'none', scrollTrigger: { trigger: '.hero', scrub: true, start: 'top top', end: 'bottom top' } });
    gsap.to('.parallax', { yPercent: -8, ease: 'none', scrollTrigger: { trigger: '.collage', scrub: true } });

    // Scroll reveals (staggered within the same row)
    ScrollTrigger.batch('.reveal', {
      start: 'top 88%', once: true,
      onEnter: els => gsap.fromTo(els, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: .9, stagger: .12, ease: 'power3.out' })
    });
    gsap.set('.reveal', { opacity: 0 });

    // Animated counters
    $$('[data-count]').forEach(el => {
      const o = { v: 0 }, end = +el.dataset.count;
      ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: () =>
        gsap.to(o, { v: end, duration: 2.2, ease: 'power2.out', onUpdate: () => el.textContent = Math.round(o.v).toLocaleString() }) });
    });
  } else { // graceful fallback if CDN fails
    $$('[data-count]').forEach(el => el.textContent = (+el.dataset.count).toLocaleString());
  }

  /* ---------- Gallery filter ---------- */
  $$('.chip').forEach(btn => btn.addEventListener('click', () => {
    $$('.chip').forEach(c => c.classList.remove('active')); btn.classList.add('active');
    $$('.g-col').forEach(c => {
      const show = btn.dataset.f === 'all' || c.dataset.cat === btn.dataset.f;
      c.classList.toggle('hide', !show);
      if (show && window.gsap) gsap.fromTo(c, { scale: .9, opacity: 0 }, { scale: 1, opacity: 1, duration: .5 });
    });
    window.ScrollTrigger && ScrollTrigger.refresh();
  }));

  /* ---------- Lightbox ---------- */
  const lb = $('#lb'), lbImg = $('img', lb), lbCap = $('p', lb);
  const closeLb = () => { lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true'); };
  $('#galleryGrid').addEventListener('click', e => {
    const a = e.target.closest('.g-item'); if (!a) return;
    e.preventDefault(); lbImg.src = a.href; lbImg.alt = lbCap.textContent = a.dataset.title;
    lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false');
  });
  lb.addEventListener('click', e => { if (e.target !== lbImg) closeLb(); });
  addEventListener('keydown', e => e.key === 'Escape' && closeLb());

  /* ---------- Before / After slider ---------- */
  $('#baRange').addEventListener('input', e => $('#ba').style.setProperty('--p', e.target.value + '%'));

  /* ---------- Booking form validation ---------- */
  const form = $('#bookForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) { e.stopPropagation(); form.classList.add('was-validated'); return; }
    form.reset(); form.classList.remove('was-validated');
    $('#formOk').classList.remove('d-none');
    setTimeout(() => $('#formOk').classList.add('d-none'), 7000);
  });

  /* ---------- Newsletter ---------- */
  $('#news').addEventListener('submit', e => {
    e.preventDefault();
    const em = $('#newsEm'), msg = $('#newsMsg'), ok = /^\S+@\S+\.\S+$/.test(em.value);
    msg.textContent = ok ? 'Thanks for subscribing!' : 'Please enter a valid email.';
    msg.style.color = ok ? '#3ddc84' : '#ff8080';
    if (ok) em.value = '';
  });
})();
