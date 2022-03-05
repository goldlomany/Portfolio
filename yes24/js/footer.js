$(document).ready(function(){
	$("#time_info").hide();
    $("#w6_box dd").hide();

	$(".ft3_btn3").click(function(e){
		e.preventDefault();
		$("#time_info").fadeIn();
	});

	$("#time_info > img").click(function(){
		$("#time_info").fadeOut();
	});

	$(".fm_obtn").click(function(){
		$("#w6_box dd").slideDown();
		$(this).hide();
		$(".fm_cbtn").show();
	});
	$(".fm_cbtn").click(function(){
		$("#w6_box dd").slideUp();
		$(this).hide();
		$(".fm_obtn").show();
	});
});