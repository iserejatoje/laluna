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

        if ($(window).scrollTop() > $('#vacancy').offset().top - 200 && $(window).scrollTop() < $('#feedback').offset().top - 200) {
            $('[href="#vacancy"]').addClass('active').siblings().removeClass('active');
        }
        if ($(window).scrollTop() > $('#feedback').offset().top - 190) {
            $('[href="#feedback"]').addClass('active').siblings().removeClass('active');
        }
    }
}

let $transition = false;

$(document).ready(function () {
   init();

   $('[type="tel"]').mask('+7 (999) 999-99-99');

   $('input').on('focus', function () {
       if ($.trim($(this).val()) === '')
           $(this).parent().addClass('active')
   });

   $('input').on('blur', function () {
       if ($.trim($(this).val()) === '')
           $(this).parent().removeClass('active')
   });

   $('nav').on('click', 'a', function () {
       $transition = true;
       $('body, html').animate({scrollTop: $($(this).attr('href')).offset().top}, 600, function() {
           $transition = false;
       });
       $(this).addClass('active').siblings().removeClass('active');
       return false;
   })

   $('.go').on('click', function () {
       $('body, html').animate({scrollTop: $('#feedback').offset().top}, 1200);
       return false;
   })
});

$(window).scroll(function() {
    init();
});