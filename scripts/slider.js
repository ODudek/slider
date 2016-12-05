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
            $dot.setAttribute('class', '');
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
        $previousButton.addEventListener('click', () => {
            this.clickHandler('prev');
            this.displayCurrentPhoto();
        });
        $nextButton.addEventListener('click', () => {
            this.clickHandler('next');
            this.displayCurrentPhoto();
        });
        let $dots = document.querySelector('#dots');
        $dots.addEventListener('click', (e) => {
            this.currentPhotoId = e.target.id;
            this.displayCurrentPhoto();
            this.selectedDot();
        })
    }

    displayCurrentPhoto() {
        let currentArrayPhoto = findCurrentPhotoById(this.images, this.currentPhotoId);
        let $currentPhoto = document.querySelector('img');
        $currentPhoto.src = currentArrayPhoto.src;
    }

    clickHandler(value) {
        switch (value) {
            case 'next':
                if (this.currentPhotoId >= (this.images.length - 1)) {
                    this.currentPhotoId = 2;
                } else {
                    this.currentPhotoId++;
                }
                break;
            case 'prev':
                if (this.currentPhotoId <= 0) {
                    this.currentPhotoId = 0;
                } else {
                    this.currentPhotoId--;
                }
                break;
            default:
        }
        this.selectedDot(this.currentPhotoId);
    }

    selectedDot(id) {
        let $dots = document.querySelectorAll('nav');
        let $currentDot = $dots.item(this.currentPhotoId);
        if (id == this.currentPhotoId) {
            $currentDot.className = 'active-dot';
            this.clearSelectedDots();
        }
    }

    clearSelectedDots() {
        for (let i = 0; i != this.currentPhotoId; i++) {
            let $restOfDots = document.getElementById(i);
            $restOfDots.className = '';
        }
        for (let j = 4; j != this.currentPhotoId; j--) {
            let $restOfDots = document.getElementById(j);
            $restOfDots.className = '';
        }
    }

}

document.addEventListener('DOMContentLoaded', function () {
    let slider = new Slider();
});
