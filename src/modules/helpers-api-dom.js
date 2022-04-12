import { shows, showEndpoints } from './globals';
export const commentButtonClick = button => {
  button.addEventListener('click', e => {
    const commentContainer = document.getElementById('comment-popup');
    const closePopup = document.getElementById('close-popup');
    commentContainer.classList.toggle('hide', false)
    closePopup.addEventListener('click', () => {
      commentContainer.classList.toggle('hide', true)
    })
    console.log(shows[Number(button.getAttribute('data-id'))]);
  });
}
