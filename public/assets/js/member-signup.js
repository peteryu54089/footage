$(function () {
    $("button[type='submit']").on("click", function () {
        var formData = {};
        formData["name"] = $("input[name='name']").val();
        formData["email"] = $("input[name='email']").val();
        formData["password"] = $("input[name='password']").val();
        formData["phone"] = $("input[name='phone']").val();
        formData["sex"] = $("#male").prop("checked") ? $("#male").val() : $("#female").val();
        
        $.ajax({
            url: "/member-signup-post",
            type: "POST",
            dataType: "json",
            data: JSON.stringify(formData),
            processData: false,
            contentType: false,
            success: function (result) {
                localStorage.setItem("footagejwt", result.data);
                location.href = "/member-center";
            }
        });
    });
});

