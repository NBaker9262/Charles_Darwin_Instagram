// Randomize posts on page load
document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts_sec');
    
    if (postsContainer) {
        // Get all post items
        const posts = Array.from(postsContainer.children);
        
        // Shuffle array using Fisher-Yates algorithm
        for (let i = posts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [posts[i], posts[j]] = [posts[j], posts[i]];
        }
        
        // Clear and re-append in random order
        postsContainer.innerHTML = '';
        posts.forEach(post => postsContainer.appendChild(post));
    }
});
