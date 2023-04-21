$(function(){
    //.btn>li 첫번째를 클릭하면 banner margin-top: 0 ==> 0*-300
    // $(".btn>li:eq(0)").click(function(){
    //     $(".banner").stop().animate({
    //         "margin-top":0
    //     },1000)
    //     $(this).addClass("active").siblings().removeClass("active")
    // })
    // //.btn>li 두번째를 클릭하면 banner margin-top:-300px ==> 1* -300
    //    $(".btn>li:eq(1)").click(function(){
    //     $(".banner").stop().animate({
    //         "margin-top":"-300px"
    //     },1000)
    //     $(this).addClass("active").siblings().removeClass("active")
    // })

    // //.btn>li 세번째를 클릭하면 banner margin-top:-600px; ==> 2*-300
    // $(".btn>li:eq(2)").click(function(){
    //     $(".banner").stop().animate({
    //         "margin-top":"-600px"
    //     },1000)
    //     $(this).addClass("active").siblings().removeClass("active")
    // })
    $(".btn>li").click(function(){
        //클릭한 li의 순서 찾기
        var sNum = $(this).index();
        console.log(sNum);
        $(".banner").stop().animate({
            "margin-top":-sNum*300+"px"
        },1000)
        $(this).addClass("active").siblings().removeClass("active")
    })

})