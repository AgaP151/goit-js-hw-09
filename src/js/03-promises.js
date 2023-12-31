import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

formEl.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const {
elements: { delay, step, amount }
 
  } = event.currentTarget;

  let position = 1;
  let nextDelay = Number(delay.value);

  for (let i = 0; i < amount.value; i += 1) {
    createPromise(position, nextDelay)
    .then(({position, delay}) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({position, delay}) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });

    position += 1; 
    nextDelay += Number(step.value);
  };
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay}); 
      } else {
        reject({ position, delay});
      }
    }, delay);
  })
  return promise;
}