const logoutBtn = document.querySelector('.logout-btn');

const logout = () => {
  fetch('/logout', {
    method: 'GET',
    headers: { 'Content-type': 'application/json' }
  })
    .then(res => {
      window.location.href = '/';
    }).catch(err => console.log(err));
}



logoutBtn.addEventListener('click', logout);
