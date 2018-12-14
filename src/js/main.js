console.log('main.js успешно подключен!');

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
