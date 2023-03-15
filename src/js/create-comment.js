import { getFormattedTime } from './time-formatter.js';

export function createCommentBody(commentData) {
    let commentBody = document.createElement('div');
    commentBody.className = 'comment-body';

    let commentBodyData = document.createElement('div');
    commentBodyData.classList.add('comment-body__data', 'data');
    commentBodyData.innerHTML = `
        <div class="data__username">${commentData.name}</div>
        <div class="data__comment-date">${getFormattedTime(commentData.date)}</div>
    `;

    let commentBodyText = document.createElement('div');
    commentBodyText.className = 'comment-body__text';
    commentBodyText.innerHTML = commentData.commentText;

    let commentBodyFooter = document.createElement('div');
    commentBodyFooter.className = 'comment-body__footer';
    commentBodyFooter.innerHTML = `
        <button title="Нравится" class="like-button">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 20C12 20 21 16 21 9.71405C21 6 18.9648 4 16.4543 
                    4C15.2487 4 14.0925 4.49666 13.24 5.38071L12.7198 5.92016C12.3266 
                    6.32798 11.6734 6.32798 11.2802 5.92016L10.76 5.38071C9.90749 
                    4.49666 8.75128 4 7.54569 4C5 4 3 6 3 9.71405C3 16 12 20 12 20Z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </button>
        <button class="delete-button" title="Удалить комментарий">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14 9.5C14 9.5 14.5 10.5 14.5 12.5C14.5 14.5 14 15.5 14 
                    15.5M10 9.5C10 9.5 9.5 10.5 9.5 12.5C9.5 14.5 10 15.5 10 
                    15.5M5.99999 6C5.99999 11.8587 4.63107 20 12 20C19.3689 
                    20 18 11.8587 18 6M4 6H20M15 6V5C15 3.22496 13.3627 3 
                    12 3C10.6373 3 9 3.22496 9 5V6"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </button>
    `;

    commentBody.append(commentBodyData, commentBodyText, commentBodyFooter);
    return commentBody;
}