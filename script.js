const form = document.querySelector('#lead-form');
const success = document.querySelector('.success');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const message = `طلب حجز REE\nالعلامة: ${data.get('brand')}\nالمسؤول: ${data.get('name')}\nالجوال: ${data.get('phone')}\nالقطاع: ${data.get('sector')}`;
  window.open(`https://wa.me/966549364362?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});
