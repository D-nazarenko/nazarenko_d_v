$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
								items: 1,
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
});


//Гамбургер меню, +- рабочее
(function ($) {
	$(function(){
		$('.icon').on('click', function(){
			$(this).closest('.gamb-menu').toggleClass('menu-open');
		});
	});
})(jQuery);
/* blur/img*/
window.onload = function() {
	var featured = document.getElementById("featured_sectione");
	var images = featured.getElementsByTagName("img");
	for (var i = 0; i < images.length; i++) {
		images[i].onmouseover = ShowStartImage;
		images[i].onmouseout = reblur;
		document.getElementById('justbutton').click()	
}
};
function ShowStartImage(eventObj){
	var image = eventObj.target;
	var name = image.id;
	name = name + ".png";
	image.src = name;

}
function reblur(eventObj){
	var image = eventObj.target;
	var name=image.id;
	name= name +"blur.png";
	image.src =name;
}
//При нажатии на Кнопки Фильтр картинок - сортировка картинок
$( document ).ready(function() {
    var $container = $('.isotope');
    $('#filters button').click(function(){
		var $this = $(this);
        if ( !$this.hasClass('is-checked') ) {
          $this.parents('#options').find('.is-checked').removeClass('is-checked');
          $this.addClass('is-checked');
        }
      var selector = $this.attr('data-filter');
      $container.isotope({  itemSelector: '.item', filter: selector });
      return false;
    });
    
});
