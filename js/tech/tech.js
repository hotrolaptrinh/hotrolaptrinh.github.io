if (window.history.replaceState) {
    window.history.replaceState( null, null, window.location.href );
}
$(document).on('click', '.xemMK', function () {
    if($(this).find('i').hasClass('fa-eye')){
        $(this).find('i').removeClass('fa-eye');
        $(this).find('i').addClass('fa-eye-slash');
        $(this).parent().prev().attr('type', 'text');
    }else{
        $(this).find('i').removeClass('fa-eye-slash');
        $(this).find('i').addClass('fa-eye');
        $(this).parent().prev().attr('type', 'password');
    }
});
