$('.owl-carousel').owlCarousel({
    loop:false,
    margin:40,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    rewind: true,

    responsive:{
        0:{
            items:1
        },
        390:{
            items:2
        },
        768:{
            items:4
        }
    }
})