const posts = [
  {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "images/avatar-vangogh.jpg",
      post: "images/post-vangogh.jpg",
      comment: "just took a few mushrooms lol",
      likes: 21
  },
  {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: "images/avatar-courbet.jpg",
      post: "images/post-courbet.jpg",
      comment: "i'm feelin a bit stressed tbh",
      likes: 4
  },
      {
      name: "Joseph Ducreux",
      username: "jd1735",
      location: "Paris, France",
      avatar: "images/avatar-ducreux.jpg",
      post: "images/post-ducreux.jpg",
      comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
      likes: 152
  }
]

const mainContainer = document.getElementById('main-container')

function renderPosts() {
  let postContainer = document.createElement("div")
  for (const poster of posts) {
    let post = renderPost(poster) 
    postContainer.appendChild(post)
  }
  mainContainer.appendChild(postContainer)
}


function renderPost(poster) {
  const post = document.createElement("section")
  post.classList.add("post")
  post.innerHTML = `
                    <header class="side-padding white-bg">
                      <img src="${poster.avatar}" alt="avatar of ${poster.name}" class="avatar-img">
                      <div class="poster-info">
                        <p class="bold-text">${poster.name}</p>
                        <p>${poster.location}</p>
                      </div>
                    </header>
                    <main class="post-image-${poster.username}"></main>

                    <footer class="side-padding white-bg">
                      <div class="icons-container">
                        <img src="./images/icon-heart.png" alt="Icon for like">
                        <img src="./images/icon-comment.png" alt="Icon for comment">
                        <img src="./images/icon-dm.png" alt="Icon for direct mail">
                      </div>
                      <p class="bold-text">${poster.likes} likes</p>   
                      <p><span class="bold-text">${poster.username}</span> ${poster.comment}</p>
                    </footer>
                  `
  return post
}


renderPosts()