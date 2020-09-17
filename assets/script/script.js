jQuery(document).ready(function($) {
    "use strict";
    // latest carousel (uses the Owl Carousel library)
    $(".latest-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 3,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            }
        }
    });

    // jQuery counterUp (used in Facts section)
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    $(window).on('load', function() {
        aos_init();
    });

});