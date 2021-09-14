$(window).scroll(function() {
    var currentHeight = $(window).scrollTop();

    if (currentHeight > 200) {
        $('.biobox').show();
    }
    if (currentHeight > 400) {
        $('.biobox').hide();
    }
});