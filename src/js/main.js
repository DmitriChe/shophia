console.log('main.js успешно подключен!');
console.log('document.documentElement.clientWidth = ', document.documentElement.clientWidth);
console.log('document.documentElement.clientWidth = ', document.documentElement.clientWidth + 100);

$(".carousel").slick({
    // сокрытие стрелок карусели!
    arrows: false,

    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease',
    dots: true,
    pauseOnDotsHover: true,
    infinite: true,
});

$(function(){

    //настройка видимости кнопки "home"
    function scrollingEffects(e) {

        let $currentPos = $(this).scrollTop();

        if (btnShow && $currentPos <= window.innerHeight / 4) {
            $('.scroll-up-button').fadeOut(500);
            console.log('out');
            btnShow = false;
        }
        else if (!btnShow && $currentPos > window.innerHeight / 4) {
            $('.scroll-up-button').fadeIn(500);
            console.log('in');
            btnShow = true;
        }

    }

    let propdownMenu = () => {
        if (document.documentElement.clientWidth <= 550) {
            console.log('document.documentElement.clientWidth = ', document.documentElement.clientWidth);

            $(".footer-menu__list").slideUp(500);

            $('.footer-menu__title').on('click', function () {

                $(this).next().stop(true).slideToggle(500);
                $(this).parent().siblings().children(".footer-menu__list").slideUp(500);
            });
        }
        else {
            $(".footer-menu__list").slideDown(500);
        }
    };

    const scrollSpeedCoeff = 0.1;  //коэффициент скорости прокрутки страницы

    let btnShow = false;  //флаг скрытия кнопки прокрутки вверх страницы

    scrollingEffects();

    let scrollTimer;

    $(window).on('scroll', function(){
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(scrollingEffects, 50);
    });


    //прокрутка вверх с постоянной скоростью
    $('.scroll-up-button').on('click', function() {
        let time = scrollSpeedCoeff * $(document).scrollTop();  //здесь время берем как расстояние до верха страницы * коэффициент "ускорения".
        $('html,body').animate({scrollTop: 0}, time, "linear");
    });


    window.addEventListener('resize', propdownMenu);
});

