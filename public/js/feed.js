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


fetch('/user/profile').then(data => data.json()).then(result => result.data).then(userData => profileInfo(userData))

function profileInfo(userData) {

  const username = document.querySelector('.users p');
  username.textContent = userData['username'];

  const userImg = document.querySelector('.icons img');
  const accountImg = document.querySelector('.account-img img');
  userImg.src = userData['image_url'];
  accountImg.src = userData['image_url'];
}

fetch('/home').then(data => data.json()).then(response => handleDom(response));

function handleDom(response) {
  response.reverse().forEach((ele) => {
    const mainContainer = document.querySelector('#posts .container')
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
    votesNum.textContent = '14.5k';
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

    const ellipsis = document.createElement('i');
    ellipsis.className = 'fa-solid fa-ellipsis';
    postPublisher.appendChild(ellipsis);

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
}




