

$(document).ready(function() {
    // change 3 line to an X after minimazing the width of website
    $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change');
    });

    // shrink navbar 
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 200) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');

        }
    });

    // photo animation 
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if (position >= 650) {
            $('.camera-img').addClass('anim2_fromleft');
            $('.mission-text').addClass('anim2_fromleft');
        } else {
            $('.camera-img').removeClass('anim2_fromleft');
            $('.mission-text').removeClass('anim2_fromleft');
        }
    });


});

$('#recipeCarousel').carousel({
    interval: 10000
})

$('.carousel .carousel-item').each(function() {
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});