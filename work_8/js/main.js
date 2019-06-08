$(function(){

  $('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false,
								singleItem: true,
								dots: false,//кнопки убираем
 								loop: true, //зацикливание
                margin:50, //делаем отступ справа
                nav: false, //навигацию отключаем
                autoplay:true, //атозапуск
                smartSpeed:1000, //скорость прокрутки
								autoplayHoverPause: true, //при наведении слайдер останавливается
                autoplayTimeout:5000 //и интервал смены слайдера
  });

  $('select').styler();

  $('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
  });

});