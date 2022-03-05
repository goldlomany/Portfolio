$(document).ready(function(){
	    /* notice_wrap */
		$('body').append('<div id="glayLayer2"></div><div id="overLayer2"></div>');
		$('#glayLayer2').show();
		$('#overLayer2').show();
		$('#notice_wrap').fadeIn('fast');
	
		$('.close_btn').click(function(){
			$('#glayLayer2').hide();
			$('#overLayer2').hide();
			$('#notice_wrap').fadeOut('fast');
		});
	
		$(".close_btn").mouseover(function(){
			$(this).attr("src","images/index/close_b.png");
		}).mouseout(function(){
			$(this).attr("src","images/index/close.png");
		});;
});

$(document).ready(function(){


	var visual = $("#show_img ul li"); // 배너이미지
	var button = $("#btn_all li"); // 아이콘(버튼)
	var current = 0;
	var setIntervalId;
	
	button.on({
		click:function(){
			var tg = $(this);
			var i = tg.index();

			button.removeClass('selected1'); // 선택된 아이콘을 설정하는 클래스 이름 일치시켜야 함
			tg.addClass('selected1');

			move(i);
		}
	});
	
	$("#main_img").on({ // 마우스 오버시 멈추고 아웃시 다시 시작 내용 => 전체 영역
		mouseover:function(){
			clearInterval(setIntervalId);
		},
		mouseout:function(){
			timer();
		}
	});
	
	timer();
	function timer(){
		setIntervalId = setInterval(function(){
			var n = current + 1;
			if(n == visual.size()){
				n = 0;
			}
			
			button.eq(n).trigger('click');
		}, 3500);
	}
	
	function move(i){
		if(current == i) return;
		
		var currentEl = visual.eq(current);
		var nextEl = visual.eq(i);
		
		currentEl.css({right:"200px"}).stop().animate({left:'-1050px'}).appendTo(".slide_box");
		nextEl.css({left:'1225px'}).stop().animate({left:"175px"});

		current = i;
	}
});

$(document).ready(function(){
	var url1 = $("#movie1").attr("src");
	var url2 = $("#movie2").attr("src");
	var url3 = $("#movie3").attr("src");
	var url4 = $("#movie4").attr("src");
	$("#mda_sld > article:not(:first)").hide();
	$(".mda_rt1").click(function(){
		$("#movie2").attr("src",url2);
		$("#movie3").attr("src",url3);
		$("#movie4").attr("src",url4);
		$("#movie1")[0].src += '?autoplay=1&mute=0';
		$("#mda_sld > article").hide();
		$($(this).attr("href")).show();
		return false;
	}).mouseover(function(){
		$("#mda_sld > article").hide();
		$($(this).attr("href")).show();
	});
	$(".mda_rt2").click(function(){
		$("#movie1").attr("src",url1);
		$("#movie3").attr("src",url3);
		$("#movie4").attr("src",url4);
		$("#movie2")[0].src += '?autoplay=1&mute=0';
		$("#mda_sld > article").hide();
		$($(this).attr("href")).show();
		return false;
	}).mouseover(function(){
		$("#mda_sld > article").hide();
		$($(this).attr("href")).show();
	});
	$(".mda_rt3").click(function(){
		$("#movie2").attr("src",url2);
		$("#movie1").attr("src",url1);
		$("#movie4").attr("src",url4);
		$("#movie3")[0].src += '?autoplay=1&mute=0';
		$("#mda_sld > article").hide();
		$($(this).attr("href")).show();
		return false;
	}).mouseover(function(){
		$("#mda_sld > article").hide();
		$($(this).attr("href")).show();
	});
	$(".mda_rt4").click(function(){
		$("#movie2").attr("src",url2);
		$("#movie3").attr("src",url3);
		$("#movie1").attr("src",url1);
		$("#movie4")[0].src += '?autoplay=1&mute=0';
		$("#mda_sld > article").hide();
		$($(this).attr("href")).show();
		return false;
	}).mouseover(function(){
		$("#mda_sld > article").hide();
		$($(this).attr("href")).show();
	});
});


$(document).ready(function(){
	var mySlider=$("#b_list_show").bxSlider({
		mode:"horizontal",   // 가로 수평으로 슬라이드
		speed:500,              // 이동 속도를 설정
		pager:false,            // 현재 위치 페이징 표시 여부 설정
		moveSlides:1,         // 슬라이드 이동시 갯수 설정
		slideWidth:1200,        // 슬라이드 마다 너비 설정
		minSlides:1,           // 최소 노출 개수를 설정
		maxSlides:1,          // 최대 노출 개수를 설정
		slideMargin:0,      // 슬라이드간의 간격을 설정
		auto:true,             // 자동으로 흐를지 설정
		autoHover:true,    // 마우스 오버시 정시킬지 설정
		controls:false        // 이전 다음 버튼 노출 여부 설정
	});

	//이전 버튼을 클릭하면 이전 슬라이드로 전환
   $(".w4la").on("click",function(){
		mySlider.goToPrevSlide();  //이전 슬라이드 배너로 이동
		return false; //<a>에 링크를 차단
   }).mouseover(function(){
	   $(this).attr("src","images/index/tl_2.png");
   }).mouseout(function(){
		$(this).attr("src","images/index/tl_1.png");
   });
   $(".w4ra").on("click",function(){
		mySlider.goToNextSlide();  //이전 슬라이드 배너로 이동
		return false; //<a>에 링크를 차단
   }).mouseover(function(){
		$(this).attr("src","images/index/tr_2.png");
	}).mouseout(function(){
		$(this).attr("src","images/index/tr_1.png");
	});
});