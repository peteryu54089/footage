(function($) {

    var $window = $(window);

    // Breakpoints.
    breakpoints({
        xlarge: ['1281px', '1800px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: [null, '480px'],
    });

    // Lightbox gallery.
    $window.on('load', function() {

        $('.strata-section').poptrox({
            caption: function($a) {
                return $a.next('h3').text();
            },
            overlayColor: '#2c2c2c',
            overlayOpacity: 0.85,
            popupCloserText: '',
            popupLoaderText: '',
            selector: '.work-item a.image',
            usePopupCaption: true,
            usePopupDefaultStyling: false,
            usePopupEasyClose: false,
            usePopupNav: true,
            windowMargin: (breakpoints.active('<=small') ? 0 : 50)
        });

    });

})(jQuery);
