(function () {
  'use strict';

  // Sticky header border
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Scroll reveal
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());

  // Contact form: static site, so compose an email and show a confirmation.
  // Replace with a real endpoint (e.g. API Gateway + SES) when deploying.
  var form = document.getElementById('contact-form');
  if (form) {
    var params = new URLSearchParams(window.location.search);
    var topic = params.get('topic');
    var select = form.querySelector('#topic');
    if (topic && select) {
      Array.prototype.forEach.call(select.options, function (o) { if (o.value === topic) select.value = topic; });
    }
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (!form.reportValidity()) return;
      var d = new FormData(form);
      var subject = '[' + d.get('topic') + '] Enquiry from ' + d.get('name');
      var body = [
        'Name: ' + d.get('name'),
        'Organisation: ' + (d.get('org') || '-'),
        'Email: ' + d.get('email'),
        'Phone: ' + (d.get('phone') || '-'),
        'City: ' + (d.get('city') || '-'),
        '',
        String(d.get('message') || '')
      ].join('\n');
      var to = form.getAttribute('data-to') || 'admin@captiosys.in';
      var href = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      var out = document.getElementById('form-result');
      if (out) {
        out.innerHTML = 'Thanks, ' + String(d.get('name')).replace(/[<>&]/g, '') +
          '. Your email app should open with the message ready to send. If it doesn’t, write to <b>' + to + '</b> or call <b>+91 81063 71685</b>.';
        out.classList.add('show');
      }
      window.location.href = href;
    });
  }
})();
