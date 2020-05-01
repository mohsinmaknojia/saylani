$(document).ready(function() {

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $(document).scroll(function() {
        var scrollpos   =   $(document).scrollTop();
        if (scrollpos > 300) {
        $('.navbar').addClass('fixednav');
        }
        if (scrollpos < 300) {
            $('.navbar').removeClass('fixednav');
            }
    });

});