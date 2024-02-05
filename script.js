function acceptYes() {
    var valentineQuestion = document.getElementById('valentineQuestion');
    var valentineRejection = document.getElementById('valentineRejection');
    var valentineImgRejection = document.getElementById('valentineImgRejection');
    var valentineImgIntro = document.getElementById('valentineImgIntro');
    var valentineAccept = document.getElementById('valentineAccept');
    var valentineImgAccept = document.getElementById('valentineImgAccept');
    var yesButton = document.getElementById('buttonContainer');

    valentineQuestion.style.display = 'none';
    valentineImgIntro.style.display = 'none';
    valentineRejection.style.display = 'none';
    valentineImgRejection.style.display = 'none';
    valentineAccept.style.display = 'block';
    valentineImgAccept.style.display = 'block';
    yesButton.style.display = 'none';



}

function rejectNo() {
    var valentineQuestion = document.getElementById('valentineQuestion');
    var valentineRejection = document.getElementById('valentineRejection');
    var valentineImgRejection = document.getElementById('valentineImgRejection');
    var valentineImgIntro = document.getElementById('valentineImgIntro');
    var noButton = document.getElementById('noButton');

    valentineQuestion.style.display = 'none';
    valentineImgIntro.style.display = 'none';
    valentineRejection.style.display = 'block';
    valentineImgRejection.style.display = 'block';

    noButton.onmousemove = function() {
        moveNo();
    };
}


function moveNo() {
    var noButton = document.getElementById('noButton');
    var randomX = (Math.random() - 0.5) * 300;
    var randomY = (Math.random() - 0.5) * 300;

    var buttonRect = noButton.getBoundingClientRect();

    // Get the maximum allowable translation based on screen dimensions
    var maxX = window.innerWidth - buttonRect.width;
    var maxY = window.innerHeight - buttonRect.height;

    // Limit the random translation to ensure the button stays within the screen
    var limitedX = Math.max(0, Math.min(randomX, maxX));
    var limitedY = Math.max(0, Math.min(randomY, maxY));

    noButton.style.visibility = 'hidden';
    setTimeout(function() {
        noButton.style.visibility = 'visible';
    }, 1000);


    noButton.style.transform = 'translate(' + limitedX + 'px, ' + limitedY + 'px)';
}