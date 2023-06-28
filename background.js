
var likeElements = document.querySelectorAll('.button-secondary');
var currentTimeout = 3;

function getRandomTimeout() {
    var baseTimeout = 5000
    var randTimeout = Math.random() * 5000 + baseTimeout;
    currentTimeout = randTimeout + currentTimeout;
    return currentTimeout
}

function likeElementWithTimeout(i) {
    setTimeout(function(i) {
        likeElements[i].click()
        console.log('Liked ' + i)
    }, getRandomTimeout(), i);
}

function autoLikeNewsFeed() {
    console.log("The AutoClickSelector script is getting started")
    for (i = 0; i < likeElements.length; i++) { 
        likeElementWithTimeout(i);
    }	
}

	autoLikeNewsFeed();
