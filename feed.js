const accountSettingsButton = document.getElementById('accountSettingsButton');
const accountSettingsList = document.getElementsByClassName('accountSettingsMenu')[0];

const logoutButton = document.getElementById('logoutButton');

accountSettingsButton.addEventListener('click', function() {
    if(accountSettingsList.style.display === 'flex') {
        accountSettingsList.style.display = 'none';
    } else {
        accountSettingsList.style.display = 'flex';
    }
});

logoutButton.addEventListener('click', () => {
    window.open('../login.html', '_self');
});

const noOfLikesElem = document.getElementById('likesNumber');
const noOfSharesElem = document.getElementById('sharesNumber');

const likeButton = document.getElementById('likeButton');
const shareButton = document.getElementById('shareButton');

const commentButton = document.getElementById('commentButton');
const commentInput = document.getElementById('commentInput');
const commentInputButton = document.getElementById('commentInputButton');

const commentMessage = document.getElementById('commentMessage');
const removeCommentButton = document.getElementById('removeCommentButton');

let isLiked = false;
let isShared = false;

function getNumberOfLikes () {
    noOfLikesElem.innerHTML = noOfLikesElem.innerHTML || 21;
}

function getNumberOfShares () {
    noOfSharesElem.innerHTML = noOfSharesElem.innerHTML || 27;
}

function getData() {
    getNumberOfLikes();
    getNumberOfShares();
}

getData();

console.log(noOfLikesElem.innerHTML);

likeButton.addEventListener('click', function() {
    isLiked = !isLiked;
    console.dir(noOfLikesElem);
    if(isLiked) {
        noOfLikesElem.innerHTML = Number(noOfLikesElem.innerHTML) + 1;
    } else {
        noOfLikesElem.innerHTML = Number(noOfLikesElem.innerHTML) - 1;
    }
});

shareButton.addEventListener('click', function() {
    isShared = !isShared;
    console.dir(noOfSharesElem);
    if(isShared) {
        noOfSharesElem.innerHTML = Number(noOfSharesElem.innerHTML) + 1;
    } else {
        noOfSharesElem.innerHTML = Number(noOfSharesElem.innerHTML) - 1;
    }
});


commentButton.addEventListener('click', function() {
    commentInput.focus();
    // commentButton.blur(); reversul functiei de focus
});

function setComment() {
    commentMessage.innerHTML = commentInput.value;
    commentInput = '';
}

commentInput.addEventListener('keydown', function(event) {
    if(event.keyCode === 13) {
        setComment();
        this.blur();
    }
});

commentInputButton.addEventListener('click', setComment);

const commentText = document.getElementsByClassName('userCommentText')[0];
commentText.addEventListener = ('mouseover', function() {
    removeCommentButton.style.display = 'inline-block';      
});