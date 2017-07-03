$(function () {
    $(document).ready(function () {
        var location = window.location.href;
        $('.navbar-nav a').each(function () {
            if (location == this.href) {
                $(this).parent().addClass('active');
            }
        });
    });
});