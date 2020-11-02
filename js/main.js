$(document).ready(function () {
    $('.menu-button').click(function(){
        $('.navigation').toggleClass('navigation--active');
        $('body').toggleClass('lock');
    });
    
    $('.navigation__link').click(function(){
        $('.navigation').toggleClass('navigation--active');
        $('body').toggleClass('lock');
    });
});