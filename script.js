// Interacciones de la propuesta. Sustituir los datos de ejemplo antes de publicar para la clínica.
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

// Datos pendientes de validación: cambiar por los canales oficiales de Spacio Dental.
const clinic = {
  whatsapp: '', // Ejemplo de formato: 526391234567 (código de país + número, sin + ni espacios)
  phone: '',    // Ejemplo de formato internacional: +526391234567
  instagram: '',// URL completa del perfil oficial
  googleReviews: '', // URL del perfil de Google / reseñas
  googleMaps: '' // URL del pin confirmado de Google Maps
};
function setupLink(selector, url, fallback) {
  const link = document.querySelector(selector);
  if (!link) return;
  if (url) link.href = url;
  else {
    link.href = '#contacto';
    link.addEventListener('click', event => {
      event.preventDefault();
      alert(fallback);
    });
  }
}
setupLink('.contact-whatsapp', clinic.whatsapp ? `https://wa.me/${clinic.whatsapp}` : '', 'Demo de portafolio: falta configurar el número oficial de WhatsApp de la clínica.');
setupLink('.contact-phone', clinic.phone ? `tel:${clinic.phone}` : '', 'Demo de portafolio: falta configurar el teléfono oficial de la clínica.');
setupLink('.contact-instagram', clinic.instagram, 'Demo de portafolio: falta configurar el perfil oficial de Instagram.');
setupLink('.review-section .button-light', clinic.googleReviews, 'Demo de portafolio: falta añadir el enlace real a las reseñas de Google.');
