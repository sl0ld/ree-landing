const form = document.querySelector('#lead-form');
const success = document.querySelector('.success');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
  success.classList.add('show');
});
