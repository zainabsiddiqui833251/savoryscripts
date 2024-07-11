/////////////////////////////////////////////////////// slider ////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    const sliderTrack = document.querySelector('.slider-track');

    sliderTrack.addEventListener('mouseover', () => {
        sliderTrack.style.animationPlayState = 'paused';
    });

    sliderTrack.addEventListener('mouseout', () => {
        sliderTrack.style.animationPlayState = 'running';
    });
});

//////////////////////////////////////////////////////// slider //////////////////////////////////////////////////

//////////////////////////////////////////////////////// comments //////////////////////////////////////////////////


let selectedRating = 0;

document.addEventListener('DOMContentLoaded', () => {
    loadComments();
});

document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
        selectedRating = star.getAttribute('data-value');
        document.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));
        star.classList.add('selected');
    });
});

function addComment() {
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value;

    if (commentText.trim() !== '' && selectedRating > 0) {
        const commentsList = document.getElementById('comments-list');
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.innerHTML = `
            <p><strong>Rating: ${selectedRating} stars</strong></p>
            <p>${commentText}</p>
            <button onclick="editComment(this)">Edit</button>
            <button onclick="deleteComment(this)">Delete</button>
        `;

        commentsList.appendChild(newComment);
        saveComments();
        
        commentInput.value = '';
        document.querySelectorAll('.star').forEach(star => star.classList.remove('selected'));
        selectedRating = 0;
    } else {
        alert('Please provide both a rating and a comment.');
    }
}

function deleteComment(button) {
    const comment = button.parentElement;
    comment.remove();
    saveComments();
}

function editComment(button) {
    const comment = button.parentElement;
    const commentText = comment.querySelector('p:nth-child(2)').innerText;
    const commentInput = document.getElementById('comment-input');
    commentInput.value = commentText;
    deleteComment(button);
}

function saveComments() {
    const commentsList = document.getElementById('comments-list');
    localStorage.setItem('comments', commentsList.innerHTML);
}

function loadComments() {
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
        document.getElementById('comments-list').innerHTML = savedComments;
    }
}

//////////////////////////////////////////////////////// comments //////////////////////////////////////////////////

//////////////////////////////////////////////////////// ads //////////////////////////////////////////////////
//////////////////////////////////////////////////////// ads //////////////////////////////////////////////////
