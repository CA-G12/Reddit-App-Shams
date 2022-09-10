
const mainContainer = document.querySelector('#posts .container');
const messageHandler = document.querySelector('.message');
const messagePara = document.querySelector('.message p');
const messageSpan = document.querySelector('.message span');

fetch('/user/profile').then(data => data.json()).then(result => result.data).then(userData => profileInfo(userData))

function profileInfo(userData) {

  const username = document.querySelector('.users p');
  username.textContent = userData['username'];

  const userImg = document.querySelector('.icons img');
  const accountImg = document.querySelector('.account-img img');
  const profileImg = document.querySelector('.profile-img img');
  profileImg.src = userData['image_url'];
  userImg.src = userData['image_url'];
  accountImg.src = userData['image_url'];

  const nickname = document.querySelector('.infos p');
  nickname.textContent = userData['username'];

  const email = document.querySelector('.infos span');
  email.textContent = userData['email'];

}

const addPostInput = document.querySelector('#add-post');
const popupPanel = document.querySelector('.pop-up');
const content = document.querySelector('#content');
const image = document.querySelector('#img');
const postBtn = document.querySelector('#post-btn');
const layer = document.querySelector('.layer')

addPostInput.addEventListener('click', () => {
  popupPanel.style.display = 'flex'
});

layer.addEventListener('click', () => {
  popupPanel.style.display = 'none'
});



postBtn.addEventListener('click', () => {
  if (content.value !== '') {
    fetch('/post/add-post', {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({
        content: content.value,
        post_image: image.value
      })
    }).then(dd => {
      if (dd.json()) {
        window.location.reload()
      }
    })
    popupPanel.style.display = 'none';
  }
})



fetch('/post/get-post').
  then(data => (data.json()).
    then(post => fetchUserPosts(post)));


function fetchUserPosts(res) {
  if (res.length !== 0) {
    res.reverse().forEach((ele) => {
      const bigDiv = document.createElement('div');
      bigDiv.className = 'big';
      mainContainer.appendChild(bigDiv);

      const votes = document.createElement('div');
      votes.className = 'votes';
      bigDiv.appendChild(votes);

      const upVote = document.createElement('i');
      upVote.className = 'fa-solid fa-up-long';
      votes.appendChild(upVote);

      const votesNum = document.createElement('p');
      votesNum.textContent = '0';
      votes.appendChild(votesNum);

      const downVote = document.createElement('i');
      downVote.className = 'fa-solid fa-down-long';
      votes.appendChild(downVote);

      const postDiv = document.createElement('div');
      postDiv.className = 'post';
      bigDiv.appendChild(postDiv);

      const postPublisher = document.createElement('div');
      postPublisher.className = 'post-publisher';
      postDiv.appendChild(postPublisher);

      const userImage = document.createElement('img');
      userImage.src = ele['image_url'];
      postPublisher.appendChild(userImage);

      const publisherInfo = document.createElement('div');
      publisherInfo.className = 'publisher-info';
      postPublisher.appendChild(publisherInfo);

      const userName = document.createElement('p');
      userName.textContent = ele['username'];
      publisherInfo.appendChild(userName);

      const event = new Date(ele['post_date']);
      const postDate = document.createElement('span');
      postDate.textContent = `Posted in ${event.toLocaleDateString('es-CL')}`;
      publisherInfo.appendChild(postDate);

      const trash = document.createElement('i');
      trash.className = 'fa-solid fa-trash';
      trash.setAttribute('id', ele.id)
      postPublisher.appendChild(trash);

      trash.addEventListener('click', () => {
        fetch(`/post/delete/${ele.id}`, { method: 'DELETE' }).
          then(data => data.json())
          .then(data => {
            messagePara.textContent = "Post deleted successfully";
            messageSpan.classList.add('vanishspan');
            messageHandler.classList.add('vanish');
            messageHandler.style.backgroundColor = '#1b951b';
            messageSpan.style.backgroundColor = '#13ff13';
            setTimeout(() => {
              messageHandler.classList.remove('vanish');
              messageSpan.classList.remove('vanishspan');
            }, 3000);
            bigDiv.style.display = 'none';
          });
      });

      const content = document.createElement('p');
      content.className = 'content';
      content.textContent = ele['content']
      postDiv.appendChild(content);

      const postImgDiv = document.createElement('div');
      postImgDiv.className = 'post-img';
      postDiv.appendChild(postImgDiv);

      const postImg = document.createElement('img');
      postImg.src = ele['post_image'];
      postImgDiv.appendChild(postImg);

      const social = document.createElement('div');
      social.className = 'social'
      postDiv.appendChild(social);

      const comment = document.createElement('p');
      comment.innerHTML = `<i class="fa-regular fa-message"></i> Comment`;
      const share = document.createElement('p');
      share.innerHTML = `<i class="fa-regular fa-share-from-square"></i> Share`;
      const Save = document.createElement('p');
      Save.innerHTML = `<i class="fa-regular fa-bookmark"></i> Save`;
      social.appendChild(comment);
      social.appendChild(share);
      social.appendChild(Save);
    })
  } else {
    const noPosts = document.createElement('p');
    noPosts.textContent = `You have no posts yet`;
    noPosts.className = 'none'
    mainContainer.appendChild(noPosts)
  }
}


// function deletePost(e) {
//   const { id } = e.target;
//   fetch(`/post/delete/${id}`, { method: 'DELETE' }).
//     then(data => data.json())
//     .then(data => {
//       bigDiv.style.display = 'none'
//       // window.location.reload()
//     });
// }

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




