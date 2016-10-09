$(document).ready(function(){
  $(".hamburger").click(function(evento){
        $('.overlay').css('display', 'block');
  });

  $(".wa").click(function(evento){
        $('.open').toggle();
  });




		// Cerrar overlay
    $(".x").click(function(evento){
	        $('.overlay').css('display', 'none');
	  });

		$(".img-x").click(function(evento){
	        $('.overlay').css('display', 'none');
	  });


});
