const newPostBtn = document.getElementById('new-post-btn');
const postModal = document.getElementById('post-modal');
const closeBtn = document.querySelector('.close-btn');
const savePostBtn = document.getElementById('save-post-btn');
const blogPostsDiv = document.getElementById('blog-posts');
const postTitleInput = document.getElementById('post-title');
const postContentInput = document.getElementById('post-content');

// Show modal
newPostBtn.addEventListener('click', () => {
  postModal.style.display = 'flex';
});

// Hide modal
closeBtn.addEventListener('click', () => {
  postModal.style.display = 'none';
});

// Save post
savePostBtn.addEventListener('click', () => {
  const title = postTitleInput.value.trim();
  const content = postContentInput.value.trim();

  if (title && content) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('blog-post');
    postDiv.innerHTML = `
      <h3>${title}</h3>
      <p>${content}</p>
    `;
    blogPostsDiv.appendChild(postDiv);

    // Clear inputs and close modal
    postTitleInput.value = '';
    postContentInput.value = '';
    postModal.style.display = 'none';
  } else {
    alert('Please fill in both fields.');
  }
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === postModal) {
    postModal.style.display = 'none';
  }
});