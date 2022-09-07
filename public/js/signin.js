const submit = document.querySelector('#submit-btn');
const signupBtn = document.querySelector('.signup-btn');
const inputs = document.querySelectorAll('#form input');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const errorMessage = document.querySelector('.error-message');
const messageHandler = document.querySelector('.message');
const messagePara = document.querySelector('.message p');
const messageSpan = document.querySelector('.message span');


signupBtn.addEventListener('click', () => {
  window.location.href = '/signup';
});

// fetch('/signin', {
//   method: 'POST',
//   headers: { 'Content-type': 'application/json' },
//   body: JSON.stringify({
//     email: email.value,
//     password: password.value
//   }),
// }).then(data => data.json()).then(res => {
//   if (res.message === 'isLogged') {
//     window.location.href = '/feed'
//   }
// })


submit.addEventListener('click', () => {
  inputs.forEach((e) => {
    if (e.value === '') {
      e.style.outline = '2px solid red';
    } else {
      e.style.outline = '2px solid green';
    }
  });

  if (email.value === '') {
    errorMessage.textContent = 'Email is required!';
  } else if (password.value === '') {
    errorMessage.textContent = 'Password is required!';
  } else {
    errorMessage.textContent = '';
    fetch('/signin', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      }),
    }).then(data => data.json())
      .then(result => {
        if (result.success) {
          messagePara.textContent = result.message;
          messageSpan.classList.add('vanishspan');
          messageHandler.classList.add('vanish');
          messageHandler.style.backgroundColor = '#1b951b';
          messageSpan.style.backgroundColor = '#13ff13';
          setTimeout(() => {
            messageHandler.classList.remove('vanish');
            messageSpan.classList.remove('vanishspan');
            window.location.href = result.path;
          }, 3000);
        }
      })
  }
});

