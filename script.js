const form = document.querySelector('#lead-form');
const success = document.querySelector('.success');
const crmEndpoint = document.querySelector('meta[name="crm-lead-endpoint"]')?.content.trim();

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const message = `طلب حجز REE\nالعلامة: ${data.get('brand')}\nالمسؤول: ${data.get('name')}\nالجوال: ${data.get('phone')}\nالقطاع: ${data.get('sector')}`;
  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  if (crmEndpoint) {
    try {
      const response = await fetch(crmEndpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          brand: data.get('brand'),
          name: data.get('name'),
          phone: data.get('phone'),
          sector: data.get('sector'),
        }),
      });
      if (!response.ok) throw new Error('CRM_REQUEST_FAILED');
      form.reset();
      success.classList.add('show');
      submitButton.disabled = false;
      return;
    } catch {
      // Keep the existing WhatsApp fallback if the public CRM endpoint is unavailable.
    }
  }
  window.open(`https://wa.me/966549364362?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  submitButton.disabled = false;
});
