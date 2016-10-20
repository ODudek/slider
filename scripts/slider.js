'use strict';

var Slider = (function () {
    var slideIndex = 1;
    var $slider = document.getElementById('slider');
    var i;
    var $images = document.getElementsByClassName('images');
    var $leftArrow = document.getElementById('arrowleft');
    var $rightArrow = document.getElementById('arrowright');

    var images = [
        {
            id: 1,
            url: 'images/image1.jpg'
        },
        {
            id: 2,
            url: 'images/image2.jpg'
        },
        {
            id: 3,
            url: 'images/image3.jpg'
        }
    ];

    function generateImages() {
        for (i = 0; i < $images.length; i++) {
            var $imagesElement = document.createElement('img');
            $imagesElement.setAttribute('class', 'images');
            $imagesElement.setAttribute('src', images[i].url);
            $slider.appendChild($imagesElement);
            console.log($imagesElement);
        }
    }

    function displayImage(number) {
        if (number > $images.length) {
            slideIndex = 1;
        }
        if (number < 1) {
            slideIndex = $images.length;
        }
        for (i = 0; i < $images.length; i++) {
            var $image = $images[i];
            $image.style.display = 'none';
        }
        $images[slideIndex - 1].style.display = 'block';
    }

    function move(number) {
        displayImage(slideIndex += number);
        console.log('dziala');
    }

    function sliderShow() {
        generateImages();
        $leftArrow.addEventListener('click', move(-1));
        $rightArrow.addEventListener('click', move(1));
    }

    sliderShow();
});
