$(function() {
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
});
