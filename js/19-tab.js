$(function(){
    //.tabBtn>li 첫번째 li를 클릭하면
    // $(".tabBtn>li:eq(0)").click(function(){
    //     $(this).addClass("active").siblings("li").removeClass("active");
    //     $(".tabList>div:eq(0)").css("display","block")
    //     .siblings("div").css("display","none");
    // })

    //.tabBtn>li 두번째 li를 클릭하면 active클래스가 적용되고
    //첫번째 li active 클래스는 제거
    //.tabList>div중 두번째 div가 보이도록
    //.tabList>div 첫번째 div는 사라지도록
    // $(".tabBtn>li:eq(1)").click(function(){
    //     $(this).addClass("active").siblings("li").removeClass("active");
    //     $(".tabList>div:eq(1)").css("display","block")
    //     .siblings("div").css("display","none")
    // })

    //.tabBtn>li를 클릭하면 몇번째 li를 클릭했는지 찾아서 
    //index()를 이용하여 순서 찾기
    $(".tabBtn>li").click(function(){
        console.log($(this).index());//0 1
        var sNum = $(this).index();
        $(this).addClass("active")
        .siblings("li").removeClass("active");
        $(".tabList>div").eq(sNum).css("display","block")
        .siblings().css("display","none");
    })
})