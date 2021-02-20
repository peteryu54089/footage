$(function() {
    $('#signin-form').on('submit', function() {
        let isInvalid = false;
        $('input[name="email"]').css('border-width', '0');
        $('input[name="password"]').css('border-width', '0');
        if ($('input[name="email"]').val().trim() === '') {
            $('input[name="email"]').css('border', 'solid 2px #e44c65');
            isInvalid = true;
        }
        if ($('input[name="password"]').val().trim() === '') {
            $('input[name="password"]').css('border', 'solid 2px #e44c65');
            isInvalid = true;
        }
        if (isInvalid) {
            return false;
        }
    });
    $('#signup-form').on('submit', function() {
        let isInvalid = false;
        $('input[name="name"]').css('border-width', '0');
        $('input[name="email"]').css('border-width', '0');
        $('input[name="password"]').css('border-width', '0');
        $('input[name="again"]').css('border-width', '0');
        $('input[name="phone"]').css('border-width', '0');
        if ($('input[name="name"]').val().trim() === '') {
            $('input[name="name"]').css('border', 'solid 2px #e44c65');
            isInvalid = true;
        }
        if ($('input[name="email"]').val().trim() === '') {
            $('input[name="email"]').css('border', 'solid 2px #e44c65');
            isInvalid = true;
        }
        if ($('input[name="password"]').val().trim() === '') {
            $('input[name="password"]').css('border', 'solid 2px #e44c65');
            isInvalid = true;
        }
        if ($('input[name="again"]').val().trim() === '' || $('input[name="again"]').val() !== $('input[name="password"]').val()) {
            $('input[name="again"]').css('border', 'solid 2px #e44c65');
            isInvalid = true;
        }
        if ($('input[name="phone"]').val().trim() === '') {
            $('input[name="phone"]').css('border', 'solid 2px #e44c65');
            isInvalid = true;
        }
        if (isInvalid) {
            return false;
        }
    });
    $('#signout-btn').on('click', function() {
        $.ajax({
            url: '/member-signout-post',
            type: 'POST',
            processData: false,
            contentType: false,
            success: function() {
                location.href = '/member-signin';
            }
        });
    });
});
