const mainContainer = document.querySelector("#posts .container");
const logoutBtn = document.querySelector("#logout");

const messageHandler = document.querySelector(".message");
const messagePara = document.querySelector(".message p");
const messageSpan = document.querySelector(".message span");

/Logout fetch/;

const logout = () => {
  fetch("/logout", {
    method: "GET",
    headers: { "Content-type": "application/json" },
  })
    .then((res) => {
      window.location.href = "/";
    })
    .catch((err) => console.log(err));
};

logoutBtn.addEventListener("click", logout);

/Fetch user profile/;

fetch("/user/profile")
  .then((data) => data.json())
  .then((result) => result.data)
  .then((userData) => profileInfo(userData));

function profileInfo(userData) {
  const username = document.querySelector(".users p");
  username.textContent = userData["username"];

  const userImg = document.querySelector(".icons img");
  const accountImg = document.querySelector(".account-img img");
  userImg.src = userData["image_url"];
  accountImg.src = userData["image_url"];
}

fetch("/home", {
  method: "GET",
  headers: { "Content-type": "application/json" },
})
  .then((data) => data.json())
  .then((response) => handleDom(response));

function handleDom(response) {
  response.reverse().forEach((ele) => {
    // console.log(ele);
    const bigDiv = document.createElement("div");
    bigDiv.className = "big";
    mainContainer.appendChild(bigDiv);

    const votes = document.createElement("div");
    votes.className = "votes";
    bigDiv.appendChild(votes);

    const upVote = document.createElement("i");
    upVote.className = "fa-solid fa-up-long";
    votes.appendChild(upVote);

    const votesNum = document.createElement("p");
    votesNum.textContent = "0";
    votes.appendChild(votesNum);

    const downVote = document.createElement("i");
    downVote.className = "fa-solid fa-down-long";
    votes.appendChild(downVote);

    const postDiv = document.createElement("div");
    postDiv.className = "post";
    bigDiv.appendChild(postDiv);

    const postPublisher = document.createElement("div");
    postPublisher.className = "post-publisher";
    postDiv.appendChild(postPublisher);

    const userImage = document.createElement("img");
    userImage.src = ele["image_url"];
    postPublisher.appendChild(userImage);

    const publisherInfo = document.createElement("div");
    publisherInfo.className = "publisher-info";
    postPublisher.appendChild(publisherInfo);

    const userName = document.createElement("p");
    userName.textContent = ele["username"];
    publisherInfo.appendChild(userName);

    const event = new Date(ele["post_date"]);
    const postDate = document.createElement("span");
    postDate.textContent = `Posted in ${event.toLocaleDateString("es-CL")}`;
    publisherInfo.appendChild(postDate);

    const ellipsis = document.createElement("i");
    ellipsis.className = "fa-solid fa-ellipsis";
    postPublisher.appendChild(ellipsis);

    const content = document.createElement("p");
    content.className = "content";
    content.textContent = ele["content"];
    postDiv.appendChild(content);

    const postImgDiv = document.createElement("div");
    postImgDiv.className = "post-img";
    postDiv.appendChild(postImgDiv);

    const postImg = document.createElement("img");
    postImg.src = ele["post_image"];
    postImgDiv.appendChild(postImg);

    const social = document.createElement("div");
    social.className = "social";
    postDiv.appendChild(social);

    const comment = document.createElement("p");
    fetch(`/single-post/${ele.id}/comments`, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    })
      .then((result) => result.json())
      .then((com) => {
        comment.innerHTML = `<i class="fa-regular fa-message"></i> <span>${com.length}<span> Comments`;
      });
    const share = document.createElement("p");
    share.innerHTML = `<i class="fa-regular fa-share-from-square"></i> Share`;
    const Save = document.createElement("p");
    Save.innerHTML = `<i class="fa-regular fa-bookmark"></i> Save`;
    social.appendChild(comment);
    social.appendChild(share);
    social.appendChild(Save);

    const commentDiv = document.createElement("div");
    commentDiv.className = "comments";
    postDiv.appendChild(commentDiv);

    const visitorDiv = document.createElement("div");
    visitorDiv.className = "visitor-comment";
    commentDiv.appendChild(visitorDiv);

    const commentImg = document.createElement("img");
    fetch("/user/profile")
      .then((data) => data.json())
      .then((result) => result.data)
      .then((rr) => {
        commentImg.src = rr["image_url"];
      });
    visitorDiv.appendChild(commentImg);

    const commentInput = document.createElement("input");
    commentInput.type = "text";
    commentInput.placeholder = "Write a comment...";
    commentInput.id = "comment";
    visitorDiv.appendChild(commentInput);

    const sendBtn = document.createElement("button");
    const sendIcon = document.createElement("i");
    sendIcon.className = "fa-regular fa-paper-plane";
    sendBtn.appendChild(sendIcon);
    visitorDiv.appendChild(sendBtn);

    sendBtn.addEventListener("click", () => {
      if (commentInput.value !== "") {
        fetch(`/single-post/${ele.id}/comments`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            content: commentInput.value,
          }),
        })
          .then((data) => data.json())
          .then((x) => {
            visitorDiv.textContent = "";
            const imagDiv = document.createElement("div");
            const commentImg = document.createElement("img");
            imagDiv.appendChild(commentImg);
            fetch("/user/profile")
              .then((data) => data.json())
              .then((result) => result.data)
              .then((rr) => {
                commentImg.src = rr["image_url"];
              });
            visitorDiv.appendChild(imagDiv);

            const commenter = document.createElement("div");
            commenter.className = "commenter";
            const comName = document.createElement("p");
            comName.textContent = "Name";
            commenter.appendChild(comName);
            visitorDiv.appendChild(commenter);

            const commentInput = document.createElement("input");
            commentInput.type = "text";
            commentInput.placeholder = "Write a comment...";
            commentInput.id = "comment";
            commenter.appendChild(commentInput);

            const sendBtn = document.createElement("button");
            const sendIcon = document.createElement("i");
            sendIcon.className = "fa-regular fa-paper-plane";
            sendBtn.appendChild(sendIcon);
            visitorDiv.appendChild(sendBtn);

            if (x.message) {
              const visitorDiv = document.createElement("div");
              visitorDiv.className = "visitor-comment";
              commentDiv.appendChild(visitorDiv);

              const commentImg = document.createElement("img");
              fetch("/user/profile")
                .then((data) => data.json())
                .then((result) => result.data)
                .then((rr) => {
                  commentImg.src = rr["image_url"];
                });
              visitorDiv.appendChild(commentImg);

              const para = document.createElement("p");
              para.className = "myComment";
              para.textContent = x.data.content;
              visitorDiv.appendChild(para);
            }
          });
      } else {
        messagePara.textContent = "Your comment field is empty!";
        messageSpan.classList.add("vanishspan");
        messageHandler.classList.add("vanish");
        messageHandler.style.backgroundColor = "#1b951b";
        messageSpan.style.backgroundColor = "#13ff13";
        setTimeout(() => {
          messageHandler.classList.remove("vanish");
          messageSpan.classList.remove("vanishspan");
        }, 2000);
      }
    });

    comment.addEventListener("click", () => {
      commentDiv.textContent = "";
      const visitorDiv = document.createElement("div");
      visitorDiv.className = "visitor-comment";
      commentDiv.appendChild(visitorDiv);

      const imagDiv = document.createElement("div");
      const commentImg = document.createElement("img");
      imagDiv.appendChild(commentImg);
      fetch("/user/profile")
        .then((data) => data.json())
        .then((result) => result.data)
        .then((rr) => {
          commentImg.src = rr["image_url"];
        });
      visitorDiv.appendChild(imagDiv);

      const commenter = document.createElement("div");
      commenter.style.width = "100%";
      const comName = document.createElement("p");
      // comName.textContent = 'test';
      commenter.appendChild(comName);
      visitorDiv.appendChild(commenter);

      const commentInput = document.createElement("input");
      commentInput.type = "text";
      commentInput.placeholder = "Write a comment...";
      commentInput.id = "comment";
      commenter.appendChild(commentInput);

      const sendBtn = document.createElement("button");
      const sendIcon = document.createElement("i");
      sendIcon.className = "fa-regular fa-paper-plane";
      sendBtn.appendChild(sendIcon);
      visitorDiv.appendChild(sendBtn);

      sendBtn.addEventListener("click", () => {
        if (commentInput.value !== "") {
          fetch(`/single-post/${ele.id}/comments`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              content: commentInput.value,
            }),
          })
            .then((data) => data.json())
            .then((x) => {
              visitorDiv.textContent = "";
              const imagDiv = document.createElement("div");
              const commentImg = document.createElement("img");
              imagDiv.appendChild(commentImg);
              fetch("/user/profile")
                .then((data) => data.json())
                .then((result) => result.data)
                .then((rr) => {
                  commentImg.src = rr["image_url"];
                });
              visitorDiv.appendChild(imagDiv);

              const commentInput = document.createElement("input");
              commentInput.type = "text";
              commentInput.placeholder = "Write a comment...";
              commentInput.id = "comment";
              visitorDiv.appendChild(commentInput);

              const sendBtn = document.createElement("button");
              const sendIcon = document.createElement("i");
              sendIcon.className = "fa-regular fa-paper-plane";
              sendBtn.appendChild(sendIcon);
              visitorDiv.appendChild(sendBtn);

              if (x.message) {
                const visitorDiv = document.createElement("div");
                visitorDiv.className = "visitor-comment";
                commentDiv.appendChild(visitorDiv);

                const imagDiv = document.createElement("div");
                const commentImg = document.createElement("img");
                imagDiv.appendChild(commentImg);

                fetch("/user/profile")
                  .then((data) => data.json())
                  .then((result) => result.data)
                  .then((rr) => {
                    commentImg.src = rr["image_url"];
                    comName.textContent = rr["username"];
                  });
                visitorDiv.appendChild(commentImg);

                const pp = document.createElement("div");
                pp.className = "commenter";
                const comName = document.createElement("p");
                // comName.textContent = '555';
                pp.appendChild(comName);
                visitorDiv.appendChild(pp);

                const para = document.createElement("p");
                para.className = "myComment";
                para.textContent = x.data.content;
                pp.appendChild(para);
              }
            });
        } else {
          messagePara.textContent = "Your comment field is empty!";
          messageSpan.classList.add("vanishspan");
          messageHandler.classList.add("vanish");
          messageHandler.style.backgroundColor = "#1b951b";
          messageSpan.style.backgroundColor = "#13ff13";
          setTimeout(() => {
            messageHandler.classList.remove("vanish");
            messageSpan.classList.remove("vanishspan");
          }, 2000);
        }
      });

      fetch(`/single-post/${ele.id}/comments`, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      })
        .then((result) => result.json())
        .then((dd) => {
          if (dd.data.length !== 0) {
            dd.data.forEach((comment) => {
              const visitorDiv = document.createElement("div");
              visitorDiv.className = "visitor-comment";
              commentDiv.appendChild(visitorDiv);

              const imagDiv = document.createElement("div");
              const commentImg = document.createElement("img");
              imagDiv.appendChild(commentImg);

              fetch("/user/profile")
                .then((data) => data.json())
                .then((result) => result.data)
                .then((rr) => {
                  if (rr.id === comment["user_id"]) {
                    commentImg.src = rr["image_url"];
                    comName.textContent = rr["username"];
                  } else {
                    fetch("/user", { method: "GET" })
                      .then((res) => res.json())
                      .then((user) => {
                        user.users.forEach((e) => {
                          if (e["id"] === comment["user_id"]) {
                            commentImg.src = e["image_url"];
                            comName.textContent = e["username"];
                          }
                        });
                      });
                  }
                });
              visitorDiv.appendChild(imagDiv);

              const pp = document.createElement("div");
              pp.className = "commenter";
              const comName = document.createElement("p");
              comName.textContent = "Name";
              pp.appendChild(comName);
              visitorDiv.appendChild(pp);

              const para = document.createElement("p");
              para.className = "myComment";
              para.textContent = comment["content"];
              pp.appendChild(para);
            });
          }
        });
    });
  });
}

/ Add post fetch /;

const addPostInput = document.querySelector("#add-post");
const popupPanel = document.querySelector(".pop-up");
const content = document.querySelector("#content");
const image = document.querySelector("#img");
const postBtn = document.querySelector("#post-btn");
const layer = document.querySelector(".layer");

addPostInput.addEventListener("click", () => {
  popupPanel.style.display = "flex";
});

layer.addEventListener("click", () => {
  popupPanel.style.display = "none";
});

postBtn.addEventListener("click", () => {
  if (content.value !== "") {
    fetch("/post/add-post", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        content: content.value,
        post_image: image.value,
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        if (res.message === "post is added") {
          mainContainer.textContent = "";
          fetch("/home", {
            method: "GET",
            headers: { "Content-type": "application/json" },
          })
            .then((data) => data.json())
            .then((response) => handleDom(response));
          popupPanel.style.display = "none";
        }
      });
  }
});

// =================== Fetch user profile ==================
const userProfile = document.querySelector("#profile");

userProfile.addEventListener("click", () => {
  fetch("/user/profile")
    .then((data) => data.json())
    .then((result) => {
      if (result.message) window.location.href = "/profile";
    });
});

// =================== drop down eventlistener ==================
const main = document.querySelector("main");
const dropDownBtn = document.querySelector("header #drop i");
const dropDownMenu = document.querySelector("header #drop-down");
console.log(dropDownBtn);

main.addEventListener("click", () => {
  dropDownMenu.style.display = "none";
});

dropDownBtn.addEventListener("click", () => {
  if (dropDownMenu.style.display === "none") {
    dropDownMenu.style.display = "flex";
  } else {
    dropDownMenu.style.display = "none";
  }
});
// ===================================================================
