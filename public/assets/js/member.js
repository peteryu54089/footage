$(function() {
    $('#signin-form').on('submit', function() {
        let isInvalid = false;
        $('input[name="email"]').css('border-width', '0');
        $('input[name="password"]').css('border-width', '0');
        if ($('input[name="email"]').val().trim() === '' || $('input[name="email"]').val().length > 50) {
            $('input[name="email"]').css('border', 'solid 2px #e44c65');
            isInvalid = true;
        }
        if ($('input[name="password"]').val().trim() === '' || $('input[name="password"]').val().length > 20) {
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
        if ($('input[name="name"]').val().trim() === '' || $('input[name="name"]').val().length > 20) {
            $('input[name="name"]').css('border', 'solid 2px #e44c65');
            isInvalid = true;
        }
        if ($('input[name="email"]').val().trim() === '' || $('input[name="email"]').val().length > 50) {
            $('input[name="email"]').css('border', 'solid 2px #e44c65');
            isInvalid = true;
        }
        if ($('input[name="password"]').val().trim() === '' || $('input[name="password"]').val().length > 20) {
            $('input[name="password"]').css('border', 'solid 2px #e44c65');
            isInvalid = true;
        }
        if ($('input[name="again"]').val().trim() === '' || $('input[name="again"]').val() !== $('input[name="password"]').val()) {
            $('input[name="again"]').css('border', 'solid 2px #e44c65');
            isInvalid = true;
        }
        if ($('input[name="phone"]').val().trim() === '' || $('input[name="phone"]').val().length > 20) {
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
    $('#order-del-btn').on('click', function() {
        alert('確定要取消此筆預約？');
        $.ajax({
            url: '/member-order-delete',
            type: 'POST',
            dataType: 'json',
            data: { id: $(this).next().text() },
            success: function() {
                location.reload();
            }, error: function() {
                alert('請稍後再試');
            }
        });
    });
    $('#info-form').on('submit', function() {
        let isInvalid = false;
        $('input[name="name"]').css('border-width', '0');
        $('input[name="email"]').css('border-width', '0');
        $('input[name="password"]').css('border-width', '0');
        $('input[name="again"]').css('border-width', '0');
        $('input[name="phone"]').css('border-width', '0');
        if ($('input[name="name"]').val().trim() === '' || $('input[name="name"]').val().length > 20) {
            $('input[name="name"]').css('border', 'solid 2px #e44c65');
            isInvalid = true;
        }
        if ($('input[name="email"]').val().trim() === '' || $('input[name="email"]').val().length > 50) {
            $('input[name="email"]').css('border', 'solid 2px #e44c65');
            isInvalid = true;
        }
        if ($('input[name="password"]').val().trim() === '' || $('input[name="password"]').val().length > 20) {
            $('input[name="password"]').css('border', 'solid 2px #e44c65');
            isInvalid = true;
        }
        if ($('input[name="again"]').val().trim() === '' || $('input[name="again"]').val() !== $('input[name="password"]').val()) {
            $('input[name="again"]').css('border', 'solid 2px #e44c65');
            isInvalid = true;
        }
        if ($('input[name="phone"]').val().trim() === '' || $('input[name="phone"]').val().length > 20) {
            $('input[name="phone"]').css('border', 'solid 2px #e44c65');
            isInvalid = true;
        }
        if (isInvalid) {
            return false;
        }
    });
    $('#forgot-form').on('submit', function() {
        let isInvalid = false;
        $('input[name="email"]').css('border-width', '0');
        if ($('input[name="email"]').val().trim() === '' || $('input[name="email"]').val().length > 50) {
            $('input[name="email"]').css('border', 'solid 2px #e44c65');
            isInvalid = true;
        }
        if (isInvalid) {
            return false;
        } else {
            alert('發送成功，請至 email 查看');
        }
    });
    $('#reset-form').on('submit', function() {
        let isInvalid = false;
        $('input[name="password"]').css('border-width', '0');
        if ($('input[name="password"]').val().trim() === '' || $('input[name="password"]').val().length > 20) {
            $('input[name="password"]').css('border', 'solid 2px #e44c65');
            isInvalid = true;
        }
        if ($('input[name="again"]').val().trim() === '' || $('input[name="again"]').val() !== $('input[name="password"]').val()) {
            $('input[name="again"]').css('border', 'solid 2px #e44c65');
            isInvalid = true;
        }
        if (isInvalid) {
            return false;
        }
    });
    $('#token').val(getUrlVars()['token']);
});

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
