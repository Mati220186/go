// Opisany w dokumentacji
import iziToast from 'izitoast';
// Kolejny import stylów
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = parseInt(form.elements.delay.value);
  const state = form.elements.state.value;

  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
        close: false,
        icon: ``,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        // title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        icon: ``,
        close: false,
        position: 'topRight',
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
