$(document).ready(function(){
	var owl = $(".slider");
  owl.owlCarousel({
  	items: 1,
  	loop: true,
  	itemClass: "slide-wrap",
  	nav: true,
  	navText: ""
  });

  $(".next").click(function(){
  	owl.trigger('next.owl.carousel');
  })
  $(".prev").click(function(){
  	owl.trigger('prev.owl.carousel');
  });

});