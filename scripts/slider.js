(function (root) {
    'use strict';

    var images = root.imageDB;
    var i;

    function Slider() {
        var slideIndex = 1;
        var $images = document.getElementsByClassName('images');
        var $leftArrow = document.getElementById('arrow-left');
        var $rightArrow = document.getElementById('arrow-right');

        function buildImage(image) {
            var $image = document.createElement('img');
            $image.setAttribute('class', 'images');
            $image.setAttribute('src', image.url);
            $image.setAttribute('data-id', image.id);
            return $image;
        }

        function setupImages() {
            var $slider = document.getElementById('slider');

            for (i = 0; i < images.length; i++) {
                var $image = buildImage(images[i]);
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

            for (i = 0; i < $images.length; i++) {
                var $image = $images[i];
                $image.style.display = 'none';
            }

            var $lastImage = $images[slideIndex - 1];
            $lastImage.style.display = 'block';
        }

        function move(direction) {
            displayImage(slideIndex += direction);
            console.log('it works!');
        }

        function defineClickHandlers() {
            $leftArrow.addEventListener('click', move.bind(this, -1));
            $rightArrow.addEventListener('click', move.bind(this, 1));
        }

        setupImages();
        defineClickHandlers();
    }

    function Dots() {
        var $dots = document.querySelector('#dots');

        function buildDots(dots) {
            var $dots = document.createElement('input');
            $dots.setAttribute('class', 'dots');
            $dots.setAttribute('type', 'button');
            $dots.setAttribute('data-id', dots);
            return $dots;
        }

        function setupDots() {
            for(i = 0; i < images.length; i++){
                var $dot = buildDots(i);
                $dots.appendChild($dot);
            }
        }

        function selectedDots() {

        }

        function displayDots() {
            setupDots();
            selectedDots();
        }

        displayDots();
    }

    root.Dots = Dots;
    root.Slider = Slider;
}(window));
