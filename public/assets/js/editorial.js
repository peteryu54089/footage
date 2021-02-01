(function($) {
    $('.link.depth-0').each(function() {
        if ($(this).text() !== '登入') {
            $(this).addClass('opener');
        }
    });
    $('.opener').on('click', function(event) {
        $(this).toggleClass('active');
        if ($(this).text() === '經典') {
            $(this).next().toggleClass('active');
            $(this).next().next().toggleClass('active');
            $(this).next().next().next().toggleClass('active');
        }
        if ($(this).text() === '暗房') {
            $(this).next().toggleClass('active');
            $(this).next().next().toggleClass('active');
            $(this).next().next().next().toggleClass('active');
            $(this).next().next().next().next().toggleClass('active');
            $(this).next().next().next().next().next().toggleClass('active');
        }
        if ($(this).text() === '進階') {
            $(this).next().toggleClass('active');
            $(this).next().next().toggleClass('active');
            $(this).next().next().next().toggleClass('active');
            $(this).next().next().next().next().toggleClass('active');
            $(this).next().next().next().next().next().toggleClass('active');
        }
        if ($(this).text() === '攝影棚') {
            $(this).next().toggleClass('active');
        }
        if ($(this).text() === '店#') {
            $(this).next().toggleClass('active');
            $(this).next().next().toggleClass('active');
        }
        if ($(this).text() === '顧客專區') {
            $(this).next().toggleClass('active');
            $(this).next().next().toggleClass('active');
            $(this).next().next().next().toggleClass('active');
            $(this).next().next().next().next().toggleClass('active');
            $(this).next().next().next().next().next().toggleClass('active');
        }
    });
})(jQuery);

