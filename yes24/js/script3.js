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

$(document).ready(function(){
    $(".acda2").hide();
    $(".acda1").toggle(function(){
        $(this).css({background:"url(images/join/join_up_arrow.png) no-repeat right center",backgroundSize:"18px 18px"});
        $(".acda2").slideDown();
        $(".acda1").text("전문 닫기");
    },function(){
        $(this).css({background:"url(images/join/join_down_arrow.png) no-repeat right center",backgroundSize:"18px 18px"});
        $(".acda2").slideUp();
        $(".acda1").text("전문 보기");
    });

    
        $('#u_mail3').change(function(){ $("#u_mail3 option:selected").each(function () { if($(this).val()== '1'){ 
            //직접입력일 경우 
            $("#u_mail2").val('').css("color","#000");
            //값 초기화 
            /* $("#u_mail2").attr("disabled",false);  */
            //활성화 
            }else{ 
            //직접입력이 아닐경우 
            $("#u_mail2").val($(this).text()).css("color","#000"); 
            //선택값 입력 
            /* $("#u_mail2").attr("disabled",true);  */
            //비활성화 
            } 
        }); 
    });

    $("#info9_1").click(function(){
        $(".btn4").removeClass("selected4");
        $(this).addClass("selected4");
    });
    $("#info9_2").click(function(){
        $(".btn4").removeClass("selected4");
        $(this).addClass("selected4");
    });
});