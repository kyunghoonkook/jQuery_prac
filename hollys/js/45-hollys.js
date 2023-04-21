$(function() {
    $(".nav>li").mouseover(function() {
        $(".sub").stop().slideDown(300);
        $(".subBg").stop().slideDown(300);
    })
    $(".nav>li").mouseout(function() {
        $(".sub").stop().slideUp(300);
        $(".subBg").stop().slideUp(300);
    })

    $(".btn>li").click(function() {
        var sNum = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".banner>li").eq(sNum).stop().fadeIn(500).siblings().fadeOut(500);
    })

})