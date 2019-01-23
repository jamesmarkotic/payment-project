$(function () {
    $(document).scroll(function () {
        var $nav = $(".navigation-bar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});