document.addEventListener("DOMContentLoaded", () => {
    fetchPosts();
  });
  
  async function fetchPosts() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
      const posts = await response.json();
      renderPosts(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }
  
  function renderPosts(posts) {
    const postsContainer = document.getElementById("posts");
    posts.forEach((post) => {
      const postElement = createPostCard(post);
      postsContainer.appendChild(postElement);
    });
  }
  
  function createPostCard(post) {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
  
    const cardBody = document.createElement("div");
    cardBody.className = "card";
  
    const title = createElement("h5", "card-title", post.title);
    const content = createElement("p", "card-text", post.body);
  
    cardBody.appendChild(title);
    cardBody.appendChild(content);
    card.appendChild(cardBody);
  
    return card;
  }
  
  function createElement(tag, className, textContent) {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = textContent;
    return element;
  }
  