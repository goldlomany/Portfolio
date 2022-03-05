$(document).ready(function(){
    $("#gnb ul li a, #fixbar ul li a").click(function(e){
        $.scrollTo(this.hash || 0, 700); // 해시(#1,#2 ...)가 있는 위치, 즉, 클릭한 링크의 해시값을 갖는 섹션으로 스크롤
        e.preventDefault(); // 원래 가지고 있던 링크 기능 끄기
    });
    
    $(function(){
        var contents = $("#container > section")
        $("#gnb ul li, #fixbar ul li").click(function(){
            var idx = $(this).index();
            var section = contents.eq(idx);
            var sectionDistance = section.offset().top;
            $("html, body").animate({scrollTo:sectionDistance});
        });
        $(window).scroll(function(){
            contents.each(function(){            
                if($(this).offset().top <= $(window).scrollTop()){
                    var idx = $(this).index();
                    $("#gnb ul li").removeClass("top_c");
                    $("#gnb ul li").eq(idx).addClass("top_c");
                    $("#fixbar ul li").removeClass("act_l");
                    $("#fixbar ul li").eq(idx).addClass("act_l");
                    $("#fixbar ul li a").removeClass("act");
                    $("#fixbar ul li a").eq(idx).addClass("act");
                }
            });
        });
    });

    (function($){
        $.aniPage=function(e,type){
            if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
                $("body, html").animate({
                    scrollTop:$(window).scrollTop()-$(window).height()
                },700,function(){
                        $.aniOk = 0;
                });
            }else{
                $("body, html").animate({
                    scrollTop:$(window).scrollTop()+$(window).height()
                },700,function(){
                        $.aniOk = 0;
                });
            }
        };
    })(jQuery);
    $(function(){
        $("#container section").height($(window).height()); // 선택자 수정
        $.aniOk=0;
        $(window).scrollTop(0);
    });
    $(document).on("mousewheel DOMMouseScroll",function(e){
        e.preventDefault();
        if($.aniOk == 0){
            $.aniPage(e,e.type);
            $.aniOk = 1;
        }
    });
    
    $(".next_btn").click(function(){
        $("#pg2").fadeOut(700);
        $("#pg2_2").fadeIn(700);
    });
    $(".prev_btn").click(function(){
        $("#pg2_2").fadeOut(700);
        $("#pg2").fadeIn(700);
    });

    $(".arl").mouseover(function(){
        $(".arl_over").show();
    }).mouseout(function(){
        $(".arl_over").hide();
    });
    $(".arr").mouseover(function(){
        $(".arr_over").show();
    }).mouseout(function(){
        $(".arr_over").hide();
    });



    $(".change_tap").hide();
    $("#north_chr").show();
    $(".p4l_box li a").click(function(e){
        $(".change_tap").filter(this.hash).fadeIn(700);
        $(".change_tap").not(this.hash).fadeOut(700);
        e.preventDefault(); // 원래 가지고 있던 링크 기능 끄기
    });

    $(".character_size").hide();
    $(".change_tap>li").toggle(function(){
        $(".change_tap>li").not(this).animate({width:"7%"},700);
        $(".fig_txt").css({fontSize:"16px"});
        $(".change_tap>li>figure").show();
        $(".character_size").hide();
        $(this).animate({width:"50%"},700);
        $($(this).children("figure")).hide();
        $($(this).children("img")).fadeIn();
        $(".character_prev").delay(700).show();
    },function(){
        $(".change_tap>li").animate({width:"13.9%"},700);
        $(".fig_txt").css({fontSize:"24px"});
        $(this).animate({width:"13.9%"},700);
        $($(this).children("figure")).delay(700).fadeIn();
        $($(this).children("img")).delay(400).fadeOut();   
    });
});




$(document).ready(function(){
	var mySlider=$(".slide_box").bxSlider({
		mode:"horizontal",   // 가로 수평으로 슬라이드
		speed:500,              // 이동 속도를 설정
		pager:false,            // 현재 위치 페이징 표시 여부 설정
		moveSlides:1,         // 슬라이드 이동시 갯수 설정
		slideWidth:630,        // 슬라이드 마다 너비 설정
		minSlides:1,           // 최소 노출 개수를 설정
		maxSlides:1,          // 최대 노출 개수를 설정
		slideMargin:0,      // 슬라이드간의 간격을 설정
		auto:true,             // 자동으로 흐를지 설정
		autoHover:true,    // 마우스 오버시 정시킬지 설정
		controls:false        // 이전 다음 버튼 노출 여부 설정
	});
	//이전 버튼을 클릭하면 이전 슬라이드로 전환
   $(".arl_over").on("click",function(){
		mySlider.goToPrevSlide();  //이전 슬라이드 배너로 이동
		return false; //<a>에 링크를 차단
   });
	//다음 버튼을 클릭하면 다음 슬라이드로 전환
   $(".arr_over").on("click",function(){
		mySlider.goToNextSlide();  //다음 슬라이드 배너로 이동
		return false;
   });
});
