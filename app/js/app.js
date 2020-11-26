console.log("%cCreated by Sergey Valitov, with ❤","color: #000; padding: 5px 0px 1px; border-bottom:2px solid #c5a26d;");

function init() {

    if (!$transition) {
        if ($(window).scrollTop() > $('#home').offset().top - 120 && $(window).scrollTop() < $('#about').offset().top - 120) {
            $('[href="#home"]').addClass('active').siblings().removeClass('active');
        }

        if ($(window).scrollTop() > $('#about').offset().top - 120 && $(window).scrollTop() < $('#services').offset().top - 120) {
            $('[href="#about"]').addClass('active').siblings().removeClass('active');
        }

        if ($(window).scrollTop() > $('#services').offset().top - 120 && $(window).scrollTop() < $('#vacancy').offset().top - 120) {
            $('[href="#services"]').addClass('active').siblings().removeClass('active');
        }

        if ($(window).scrollTop() > $('#money').offset().top - 120 && $(window).scrollTop() < $('#vacancy').offset().top - 120) {
            $('[href="#money"]').addClass('active').siblings().removeClass('active');
        }

        if ($(window).scrollTop() > $('#vacancy').offset().top - 180 && $(window).scrollTop() < $('#feedback').offset().top - 180) {
            $('[href="#vacancy"]').addClass('active').siblings().removeClass('active');
        }
    }
}

let $transition = false;

$(document).ready(function () {
   init();

   $('nav').on('click', 'a', function () {
       $transition = true;
       $('body, html').animate({scrollTop: $($(this).attr('href')).offset().top}, 600, function() {
           $transition = false;
       });
       $(this).addClass('active').siblings().removeClass('active');
       return false;
   })
});

$(window).scroll(function() {
    init();
});