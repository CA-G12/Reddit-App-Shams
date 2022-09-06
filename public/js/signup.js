const submitBtn = document.querySelector('#btn');
const loginBtn = document.querySelector('.login-btn');
const inputs = document.querySelectorAll('#form input');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm-password');
const imageUrl = document.querySelector('#image');


const errormsg = document.querySelector('.error-message');
const messageHandler = document.querySelector('.message');
const messagePara = document.querySelector('.message p');
const messageSpan = document.querySelector('.message span');

// messageSpan.classList.add('vanishspan');
// messageHandler.classList.add('vanish');
// messageHandler.style.backgroundColor = '#951b1b';
// messageSpan.style.backgroundColor = '#ff1313';
// setTimeout(() => {
//   messageHandler.classList.remove('vanish');
//   messageSpan.classList.remove('vanishspan');
// }, 2000);


loginBtn.addEventListener('click', () => {
  window.location.href = '/signin';
});

submitBtn.addEventListener('click', () => {
  inputs.forEach((e) => {
    if (e.value === '') {
      e.style.outline = '2px solid red';
    } else {
      e.style.outline = '2px solid green';
    }
  });


  if (username.value === '') {
    errormsg.textContent = 'Username is required';
  } else if (email.value === '') {
    errormsg.textContent = 'Email is required';
  } else if (password.value === '') {
    errormsg.textContent = 'Password is required';
  } else if (confirmPass.value === '') {
    errormsg.textContent = 'Confirm Password is not required';
  } else if (imageUrl.value === '') {
    errormsg.textContent = 'Image url is required';
  } else if (password.value !== confirmPass.value) {
    errormsg.textContent = 'Password must be equal';
  } else {
    errormsg.textContent = '';
    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
        confirm_password: confirmPass.value,
        image_url: imageUrl.value
      }),
    }).then((data) => data.json())
      .then(res => {
        // console.log(res);
        if (res.error) {
          errormsg.textContent = res.error
        } else if (res.message === 'Account created successfully') {
          messagePara.textContent = res.message;
          messageSpan.classList.add('vanishspan');
          messageHandler.classList.add('vanish');
          messageHandler.style.backgroundColor = '#1b951b';
          messageSpan.style.backgroundColor = '#13ff13';
          setTimeout(() => {
            messageHandler.classList.remove('vanish');
            messageSpan.classList.remove('vanishspan');
            window.location.href = "/signin";
          }, 2000);
        }
      });
  }
})