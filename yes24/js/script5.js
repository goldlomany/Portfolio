$(document).ready(function(){
   $(".sub_list").hide();
   $("#best_list>li>ul>li").hover(function(){
    $(".sub_list").hide();
    $("#best_list>li>ul>li").removeClass("select_list");
    $(this).addClass("select_list");
    $(this).children("ul").show();
   },function(){
    $(".sub_list").hide();
    $("#best_list>li>ul>li").removeClass("select_list");
   });

    $("#b_list_show").bxSlider({
		mode:"horizontal",   // 가로 수평으로 슬라이드
		speed:700,              // 이동 속도를 설정
		pager:false,            // 현재 위치 페이징 표시 여부 설정
		moveSlides:1,         // 슬라이드 이동시 갯수 설정
		slideWidth:790,        // 슬라이드 마다 너비 설정
		minSlides:1,           // 최소 노출 개수를 설정
		maxSlides:1,          // 최대 노출 개수를 설정
		slideMargin:0,      // 슬라이드간의 간격을 설정
		auto:true,             // 자동으로 흐를지 설정
		autoHover:true,    // 마우스 오버시 정시킬지 설정
		controls:false        // 이전 다음 버튼 노출 여부 설정
	});

    $(".align_list_box").hide();
    $(".align_list").toggle(function(){
        $(".align_list_box").slideDown();
    },function(){
        $(".align_list_box").slideUp();
    });
    
    $(".jjim").toggle(function(){
        $(this).attr("src","images/page/hart_f.png");
    },function(){
        $(this).attr("src","images/page/hart_g.png");
    });

    $("#t_list2, #t_list3, #t_list4").hide();
    $("#tab_list>li>ul>li>a").click(function(){
        $("#tab_list>li>ul>li>a").removeClass("bt_sel");
        $(this).addClass("bt_sel");
        $("#t_list1, #t_list2, #t_list3, #t_list4").hide();
        $($(this).attr("href")).show();
        return false;
    });
});