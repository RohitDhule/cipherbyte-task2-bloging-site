// Select form and container elements
const postForm = document.getElementById("postForm");
const postsContainer = document.getElementById("postsContainer");

// Handle new post submission
postForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get post title and content
  const postTitle = document.getElementById("postTitle").value;
  const postContent = document.getElementById("postContent").value;

  // Create a new post element
  const postElement = document.createElement("div");
  postElement.classList.add("blog-post");

  postElement.innerHTML = `
    <h3>${postTitle}</h3>
    <p>${postContent}</p>
    <div class="comment-section">
      <h4>Comments</h4>
      <div class="comments"></div>
      <input type="text" placeholder="Add a comment..." />
      <button>Add Comment</button>
    </div>
  `;

  // Handle adding comments
  const commentInput = postElement.querySelector("input");
  const addCommentButton = postElement.querySelector("button");
  const commentsContainer = postElement.querySelector(".comments");

  addCommentButton.addEventListener("click", () => {
    const commentText = commentInput.value.trim();
    if (commentText) {
      const commentElement = document.createElement("p");
      commentElement.textContent = commentText;
      commentsContainer.appendChild(commentElement);
      commentInput.value = "";
    }
  });

  // Append the post to the container
  postsContainer.prepend(postElement);

  // Clear form inputs
  postForm.reset();
});
