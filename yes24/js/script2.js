$(document).ready(function(){
    $("#log_top2").hide();
    $("#title2").hide();
    $("#login2").hide();
    $("#log_tap li a").click(function(){
        $("#log_tap li a").removeClass("select");
        $(this).addClass("select");
        $("#wrap > div").hide();
        $($(this).attr("href")).show();
        return false;
    });
    $("#log_tap li:first-child a").click(function(){
        $("#log_top1").show();
        $("#title1").show();
        $("#log_top2").hide();
        $("#title2").hide();
    });
    $("#log_tap li:last-child a").click(function(){
        $("#log_top2").show();
        $("#title2").show();
        $("#log_top1").hide();
        $("#title1").hide();
    });
    $(".pop").click(function(event){
        event.preventDefault();
        var href1 = $(this).attr("href");
        window.open(href1,"popup","width=600px,height=800px,left=1200px,top=150px");
    });
});