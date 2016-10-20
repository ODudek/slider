(function (root) {
    'use strict';
    function CreateImages() {
        var $images = document.querySelector('#slider');

        for (var i = 0; i < NUMBER_OF_IMAGES; i++) {
            var newImage = document.createElement('img');
            newImage.setAttribute('class', 'image');
            $images1.appendChild(newImage);
        }
    }


    root.CreateImages = CreateImages;
}(window));
