import { validationForm, validationInput, removeError } from './validation.js';
import { createCommentBody } from './create-comment.js';

const comments = [
    {
        name: 'Эрик',
        commentText: 'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века',
        date: '2023-02-26T10:20'
    },
    {
        name: 'Жорик',
        commentText: 'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века',
        date: '2023-02-13T16:39'
    },
];

let addingCommentForm = document.querySelector('.comment-form');
let username = addingCommentForm.username;
let commentArea = addingCommentForm['comment-area'];
let commentDate = addingCommentForm.date;

let commentsContent = document.querySelector('.comments-section__content');
let emptyContent = document.createElement('div');
emptyContent.className = 'comments-section__empty';

window.addEventListener('load', () => {
    loadComments(comments);
});

addingCommentForm.addEventListener('submit', (event) => {
    submitForm(event)
});

username.addEventListener('input', () => {
    removeError(username);
});

username.addEventListener('blur', () => {
    validationInput(username);
});

commentArea.addEventListener('input', () => {
    removeError(commentArea);
});

commentArea.addEventListener('blur', () => {
    validationInput(commentArea);
});

commentArea.onkeydown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        submitForm(event);
    }
};

function submitForm(event) {
    event.preventDefault();

    const commentData = {
        name: username.value,
        commentText: commentArea.value,
        date: commentDate.value ? commentDate.value : Date.now()
    };

    if (validationForm(addingCommentForm)) {
        addComment(commentData);
        username.value = '';
        commentArea.value = '';
        commentDate.value = '';
    }
}

function loadComments(comments) {
    if (comments.length) {
        for (let comment of comments) {
            commentsContent.append(createCommentBody(comment));
        }
    } else {
        commentsContent.classList.toggle('content_empty');
        emptyContent.innerHTML = `<span>Здесь пока нет комментариев...</span>`;
        commentsContent.append(emptyContent);
    }

}

function addComment(commentData) {
    commentsContent.classList.remove('content_empty');
    emptyContent.remove();
    commentsContent.append(createCommentBody(commentData));
}

commentsContent.addEventListener('click', (event) => {
    let target = event.target;

    if (target.closest('.delete-button')) {
        let commentBody = target.closest('.comment-body');
        commentBody.remove();
    }

    if (target.closest('.like-button')) {
        let likeButton = target.closest('.like-button');
        likeButton.classList.toggle('liked');
    }

    if (commentsContent.innerHTML === '') {
        commentsContent.classList.toggle('content_empty');
        emptyContent.innerHTML = `<span>Здесь пока нет комментариев...</span>`;
        commentsContent.append(emptyContent);
    }
});