$(function(){
    //.btn>li 첫번째 .banner margin-left:0 =>-0*1200px
    //.btn>li 두번재 .banner margin-left:-1200px; => -1 * 1200px
    //.btn>li 세번째 .banner margin-left:-2400px; => -2 * 1200px
    $(".btn>li").click(function(){
        var sNum= $(this).index();
        $(".banner").stop().animate({
            "margin-left":-sNum*1200+"px"
        },1000)
        $(this).addClass("active").siblings().removeClass("active");
    })

})