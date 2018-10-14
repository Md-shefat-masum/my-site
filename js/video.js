$(document).on("ready", function () {


    // HOME PAGE HEIGHT
    if ($('.home').length) {
        function centerInit() {
            var hometext = $('.home')
            hometext.css({
                "height": $(window).height() + "px"
            });
        }
        centerInit();
        $(window).resize(centerInit);
    }

}); // document ready end
