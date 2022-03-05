$(document).ready(function(){
    $("#top_wrap2").hide();
	$("#slide_wrap").hide();

    $(".g_click").toggle(function(){
		$("#g_box").animate({width:"275px"},300);
		$(".g_click").attr("src","images/index/g24_arb.png");
	},function(){
		$("#g_box").animate({width:"131px"},300);
		$(".g_click").attr("src","images/index/g24_alb.png");
	});

	$(".g_click_2").toggle(function(){
		$("#g_box_2").animate({width:"275px"},300);
		$(".g_click_2").attr("src","images/index/g24_arw.png");
	},function(){
		$("#g_box_2").animate({width:"131px"},300);
		$(".g_click_2").attr("src","images/index/g24_alw.png");
	});

    $(".m_b").click(function(){
        $("#top_wrap").fadeOut(300);
        $("#top_wrap2").fadeIn(300);
        $("#slide_wrap").slideDown(300);
		$("#top_wrap1").css({borderBottom:"3px solid #333"});
    });

    $(".m_b2").click(function(){
        $("#top_wrap2").fadeOut(300);
        $("#top_wrap").fadeIn(300);
        $("#slide_wrap").slideUp(300);
		$("#top_wrap1").css({borderBottom:"3px solid #999"});
    });

	$(".search_1, .search2_1").focusin(function(){
		$(this).attr("value","");
	}).focusout(function(){
		$(this).attr("value","원하는 상품을 검색하세요!");
	});

});