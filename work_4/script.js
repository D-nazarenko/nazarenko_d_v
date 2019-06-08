$(function (){
	$(document).mousemove(function(e){
		$('#cube').css({
			'-webkit-transform':'rotateX('+e.pageY+'deg) rotateY('
			+e.pageX+'deg)',
			
		});
	});


	 $("#cube").animate({
	 	
	 	left: 600 +'px',
	 	top: 220 + 'px',
	 	transform: 'rotate('+180+'deg)'

	 }, 2000);

	 $(".side").animate({
	 	
	 	opacity: 1

	 }, 2000);

});






