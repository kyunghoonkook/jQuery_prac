$(function(){
    //각각의 서브가 보이도록
    //#nav>li의 마우스를 올리면 내 자식을 있는 sub 슬라이드 다운되면서 보이도록
    // $("#nav>li").mouseover(function(){
    //     $(this).children(".sub").stop().slideDown(300);
    //     // $(this).siblings("li").children(".sub").slideUp(500);
    // })
    // $("#nav>li").mouseout(function(){
    //     $(this).children(".sub").stop().slideUp(300);
    // })

    $("#nav>li").mouseover(function(){
        $(".sub").stop().slideDown(300);
        $(".subBg").stop().slideDown(300);
    })
    $("nav").mouseout(function(){
        $(".sub").stop().slideUp(300);
        $(".subBg").stop().slideUp(300);
    })
})