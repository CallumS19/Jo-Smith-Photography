$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 900) {
	    $("nav").css("background" , "#fff");
		$("nav").css("border-bottom" , "3px solid #000");
		$(".icon i").css("color", "#000");
	  }

	  else{
		  $("nav").css("background" , "transparent");
		  $("nav").css("border" , "none");
		  $(".icon i").css("color", "#fff");
	  }
  })
})