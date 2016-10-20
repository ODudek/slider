(function (root) {
    'use strict';

    var images = root.IMAGE_DATABASE;

    function Slider() {
        var slideIndex = 1;
        var $images = document.getElementsByClassName('images');
        var $leftArrow = document.getElementById('arrow-left');
        var $rightArrow = document.getElementById('arrow-right');

        function buildImageHTMLElement(image) {
            var $image = document.createElement('img');
            $image.setAttribute('class', 'images');
            $image.setAttribute('src', image.url);
            $image.setAttribute('data-id', image.id);
            return $image;
        }

        function setupImages() {
            var $slider = document.getElementById('slider');

            for (var i = 0; i < images.length; i++) {
                var $image = buildImageHTMLElement(images[i]);
                $slider.appendChild($image);
            }
        }

        function displayImage(number) {
            if (number > $images.length) {
                slideIndex = 1;
            }

            if (number < 1) {
                slideIndex = $images.length;
            }

            for (var i = 0; i < $images.length; i++) {
                var $image = $images[i];
                $image.style.display = 'none';
            }

            var $lastImage = $images[slideIndex - 1];
            $lastImage.style.display = 'block';
        }

        function changeSlideIndexByDirection(direction) {
            if (direction > 0) {
                slideIndex++;
            } else if (direction < 0) {
                slideIndex--;
            } else {
                throw new Error('direction should not be 0');
            }
        }

        function move(direction) {
            changeSlideIndexByDirection(direction);
            displayImage(slideIndex);
            console.log('it works!');
        }

        function defineClickHandlers() {
            $leftArrow.addEventListener('click', move.bind(this, -1));
            $rightArrow.addEventListener('click', move.bind(this, 1));
        }

        setupImages();
        defineClickHandlers();
    }

    root.Slider = Slider;
}(window));
