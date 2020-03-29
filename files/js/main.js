$(document).on("scroll", window, function () {
    if ($(window).scrollTop()>200)
    {
        $(".header").addClass('scroll');
    }
    else
    {
        $(".header").removeClass('scroll');
    }
});


$('.menu-burger').click(function () {
    $(this).toggleClass('open');
    $('.menu__body').toggleClass('open');
    $('.menu').toggleClass('open');
})

$('.menu .overlay').click(function () {
    $('.menu-burger').toggleClass('open');
        $('.menu__body').toggleClass('open');
        $('.menu').toggleClass('open');
    })