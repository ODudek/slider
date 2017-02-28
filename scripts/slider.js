require('../styles/style.css');
function findCurrentPhotoById(images, id) {
    for (let i = 0; i < images.length; i++) {
        if (images[i].id == id) {
            return images[i];
        }
    }
}

class Slider {
    constructor() {
        this.images = [];
        this.currentPhotoId = 0;
        this.currentDot = 0;
        this.buildImagesArray();
        this.setupClickListeners();
        this.buildImgInHtml();
        this.buildDotsInHtml();
    }

    buildImgInHtml() {
        let $slider = document.getElementById('slider');
        for (let i = 0; i < 3; i++) {
            let $img = document.createElement('img');
            $img.setAttribute('src', this.images[i].src);
            $slider.appendChild($img);
        }
    }

    buildDotsInHtml() {
        let $dots = document.getElementById('dots');
        for (let i = 0; i < 3; i++) {
            let $dot = document.createElement('nav');
            if (i == 0) {
                $dot.setAttribute('class', 'active-dot');
            } else {
                $dot.setAttribute('class', '');
            }
            $dot.setAttribute('id', i);
            $dot.setAttribute('alt', 'Image' + i);
            $dots.appendChild($dot);
        }
    }

    buildImagesArray() {
        for (let i = 0; i < 3; i++) {
            this.images.push({
                id: i,
                src: './images/image' + i + '.png'
            });
        }
    }

    setupClickListeners() {
        let $previousButton = document.getElementById('arrow-left');
        let $nextButton = document.getElementById('arrow-right');
        let $dots = document.querySelector('#dots');

        window.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case 37:
                    this.setupClicker('prev');
                    break;
                case 39:
                    this.setupClicker('next');
                    break;
            }
        });
        $previousButton.addEventListener('click', () => {
            this.setupClicker('prev');
        });

        $nextButton.addEventListener('click', () => {
            this.setupClicker('next');
        });

        $dots.addEventListener('click', (e) => {
            this.currentPhotoId = e.target.id;
            this.currentDot = e.target.id;
            this.clearSelectedDots();
            this.selectedDot(this.currentDot);
            this.displayCurrentPhoto();
        })
    }

    setupClicker(element) {
        this.clickHandler(element);
        this.clearSelectedDots();
        this.selectedDot(this.currentDot);
        this.displayCurrentPhoto();
    }

    displayCurrentPhoto() {
        let currentArrayPhoto = findCurrentPhotoById(this.images, this.currentPhotoId);
        let $currentPhoto = document.querySelector('img');
        $currentPhoto.src = currentArrayPhoto.src;
    }

    selectedDot(id) {
        let dot = document.getElementById(id);
        for (let i = 0; i < 3; i++) {
            if (id != this.currentDot) {
                dot.className = '';
                console.log('dziala');
            } else {
                dot.className = 'active-dot';
            }
        }
    }

    clearSelectedDots() {
        for (let i = 0; i != this.currentPhotoId; i++) {
            let $restOfDots = document.getElementById(i);
            $restOfDots.className = '';
        }
        for (let j = 2; j != this.currentPhotoId; j--) {
            let $restOfDots = document.getElementById(j);
            $restOfDots.className = '';
        }
    }

    clickHandler(value) {
        switch (value) {
            case 'next':
                if (this.currentPhotoId >= (this.images.length - 1)) {
                    this.currentPhotoId = 0;
                    this.currentDot = 0;

                } else {
                    this.currentPhotoId++;
                    this.currentDot++;
                }
                break;
            case 'prev':
                if (this.currentPhotoId <= 0) {
                    this.currentPhotoId = 2;
                    this.currentDot = 2;

                } else {
                    this.currentPhotoId--;
                    this.currentDot--;
                }
                break;
            default:
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let slider = new Slider();
});