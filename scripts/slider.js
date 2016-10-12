'use strict';

var NUMBER_OF_IMAGES = 3;
var $images1 = document.getElementById('slider');
var Slider = (function () {

    var images = {
        first: {
            id: 1,
            url: 'images/image1.jpg'
        },
        second: {
            id: 2,
            url: 'images/image2.jpg'
        },
        third: {
            id: 3,
            url: 'images/image3.jpg'
        }
    };
    $images1.style.background = "url('" + images.first['url'] + "')";
    console.log(images.first['url']);
});