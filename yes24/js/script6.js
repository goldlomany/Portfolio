$(document).ready(function(){
    $("#page_1_r9_sub").hide();
    $("#page_1_r9>li>img").toggle(function(){
        $("#page_1_r9_sub").slideDown();
        $("#page_1_r9>li>img").attr("src","images/page/arrow_u.png");
    },function(){
        $("#page_1_r9_sub").slideUp();
        $("#page_1_r9>li>img").attr("src","images/page/arrow_d.png");
    });
    $("#alm_btn").toggle(function(){
        $(this).attr("value","관심작가 알림중");
        $(this).addClass("alm_select");
    },function(){
        $(this).attr("value","관심작가 알림");
        $(this).removeClass("alm_select");
    });
});
$(document).ready(function(){
    $("#page_2_2_2_text2").hide();
    $("#txt_open").toggle(function(){
        $(this).text("접기");
        $(this).css({background:"url(images/join/join_up_arrow.png) no-repeat right center", backgroundSize:"16px 15px"});
        $("#page_2_2_2_text2").show();
        $("#page_2_2_2_text1").hide();
    },function(){
        $(this).text("펼치기");
        $(this).css({background:"url(images/join/join_down_arrow.png) no-repeat right center", backgroundSize:"16px 15px"});
        $("#page_2_2_2_text2").hide();
        $("#page_2_2_2_text1").show();
    });

    $(function() {
        $('#r2_txt').keyup(function (e){
            var content = $(this).val();
            $('#counter').html(content.length + '/200');
        });
        $('#r2_txt').keyup();
  });

  $(".page2_6_2").toggle(function(){
    $(this).addClass("sel_hart");
  },function(){
    $(this).removeClass("sel_hart");
  });

  $("#banner_sld li:not(:first-child)").hide();
  $("#banner_sld_btn li a").click(function(){
    $("#banner_sld_btn li a").removeClass("sel");
    $(this).addClass("sel");
    $("#banner_sld li").hide();
    $($(this).attr("href")).fadeIn("fast");
    return false;
  });

  var sideOffset = $("#side_banner").offset();
        $( window ).scroll( function() {
          if ( $( document ).scrollTop() > sideOffset.top ) {
            $("#side_banner").addClass("sidefixed");
          }
          else {
            $("#side_banner").removeClass("sidefixed");
          }
        });
});

(function($) {
    $.fn.customizeCRInput = function(options) {
        var options = $.extend({
            checked_class : "checked" // label에 적용되는 클래스 이름
        }, options);

        return this.each(function(){
            var input = $(this);
            input.on("change",function(){
                var is_checked = input.is(":checked");
                var type = input.attr("type");
                var id = input.attr("id");
                var label = $("label[for="+id+"]");
                if (type == "checkbox") {
                    if (input.is(":checked")) {
                        label.addClass(options.checked_class);
                    } else {
                        label.removeClass(options.checked_class);
                    }
                } else if (type == "radio") {
                    $("input[name="+input.attr("name")+"]").each(function(idx){
                        $("label[for="+$(this).attr("id")+"]").removeClass(options.checked_class);
                    });
                    label.addClass(options.checked_class);
                }
            });
        });
    };
})(jQuery);