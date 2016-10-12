'use strict';

var Images = (function () {

    for (var i = 0; i < NUMBER_OF_IMAGES; i++) {
        var newImage = document.createElement('img');
        newImage.setAttribute('class', 'image');
        $images1.appendChild(newImage);
        console.log('wygenerowane img', newImage);
    }
});
