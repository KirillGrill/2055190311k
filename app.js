function sendComment() {
    const commentator = document.createElement('div');
    const commentatorsName = document.createElement('span');
    const commentText = document.createElement('p');
    const comment = commentator.cloneNode(true);
    const commentsDate = commentatorsName.cloneNode(true);
    const partOfTheComment = document.createElement('img');
    partOfTheComment.src = 'img/partOfTheComment.png';

    const feedbackContent = document.getElementById('feedbackContent');
    const writeCommentField = document.getElementById('writeCommentField');

    commentText.innerText = writeCommentField.value;
    writeCommentField.value = '';

    commentatorsName.innerText = 'User name'; // пока что нет данных из которых я мог бы брать имя пользователя

    const date = new Date();
    let month = date.getMonth();
    
    switch (month) {
        case 0:
            month = 'января';
            break;
        case 1:
            month = 'февраля';
            break;
        case 2:
            month = 'марта';
            break;
        case 3:
            month = 'апреля';
            break;
        case 4:
            month = 'мая';
            break;
        case 5:
            month = 'июня';
            break;
        case 6:
            month = 'июля';
            break;
        case 7:
            month = 'августа';
            break;
        case 8:
            month = 'сентября';
            break;
        case 9:
            month = 'октября';
            break;
        case 10:
            month = 'ноября';
            break;
        case 11:
            month = 'декабря';
            break;
    }

    let dateArr = [];
    dateArr.push(date.getDate());
    dateArr.push(month);
    dateArr.push(date.getFullYear());
    commentsDate.innerText =  dateArr.join(' ');

    commentator.appendChild(commentatorsName);
    commentator.appendChild(commentsDate);

    // comment.innerHTML =  '<img src="img/partOfTheComment.png" class="partOfTheComment">';
    comment.appendChild(partOfTheComment);
    comment.appendChild(commentText);

    feedbackContent.appendChild(commentator);
    feedbackContent.appendChild(comment);

    commentatorsName.classList.add('commentatorsName');
    commentsDate.classList.add('commentsDate');
    partOfTheComment.classList.add('partOfTheComment');
    commentText.classList.add('commentText');
    commentator.classList.add('commentator');
    comment.classList.add('comment');
    feedbackContent.classList.add('feedbackContent');
}


document.onkeydown = function(event) {
    if (event.ctrlKey && event.keyCode === 13) {

        event.preventDefault();
        sendComment();
    }
};
