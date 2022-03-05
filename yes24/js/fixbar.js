$(document).ready(function(){
    var divOffset = $( '#scroll_fixbar' ).offset();
	var name = "#scroll_fixbar";
	var menuYloc = null;
	menuYloc = parseInt($(name).css("top").substring(0,$(name).css("top").indexOf("px")))
	$(window).scroll(function(){
		offset = menuYloc+$(document).scrollTop()+"px";
		$(name).animate({top:offset},{duration:1000,queue:false});
		if ( $(document).scrollTop() > divOffset.top - 250 ) {
			$(name).addClass("fix_show");
		} else {
			$(name).removeClass("fix_show");
		}
	});

	$(".fix_7").click(function(){
		$.scrollTo(this.hash || 0, 700);
		e.preventDefault();
	});

	$(".fix_8").click(function(){
		$.scrollTo(this.hash || 0, 700);
		e.preventDefault();
	});


	$(".fixbar_menu").hide();
	$(".fix_2").toggle(function(){
		$(this).addClass("fix_sel");
		$(".fixbar_menu").show();
	},function(){
		$(this).removeClass("fix_sel");
		$(".fixbar_menu").hide();
	});
	
});