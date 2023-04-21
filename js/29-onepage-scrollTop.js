$(function(){
    //윈도우의 높이값 얻어오기
    var wh=$(window).outerHeight();
    console.log(wh);
    $("#container>section").outerHeight(wh);

    //
    // $("#nav>li").eq(0).click(function(){
    //     $(this).addClass("active").siblings().removeClass("active");
    //     var yPos = $("#container>section").eq(0).offset().top;
    //     console.log(yPos);
    // })
    //두번째 메뉴를 클릭하면 
    //두번째 메뉴에 active 클래스가 추가되고, 나머지 메뉴에서는 클래스 사라지도록
    //html, body의 스크롤의 위치는 2번째 section이 있는 위치(body) offset.top로 이동
    // $("#nav>li").eq(1).click(function(){
    //     $(this).addClass("active").siblings().removeClass("active");
    //     var yPos = $("#container>section").eq(1).offset().top;
    //     console.log(yPos);
    // })

    //세번째 메뉴를 클릭하면 
    //세번째 메뉴에 active 클래스가 추가되고, 형제는 클래스가 사라지고
    //html,body의 스크롤의 위치는 3번째 sectiondl 있는위치 offset.top으로 이동
    // $("#nav>li").eq(2).click(function(){
    //     $(this).addClass("active").siblings().removeClass("active");
    //     var yPos = $("#container>section").eq(2).offset().top;
    //     console.log(yPos);
    // })
    $("#nav>li").click(function(){
        //선택된 li가 몇번째인지 알아내기
        var sNum = $(this).index();
        console.log(sNum);
        var yPos = $("#container>section").eq(sNum).offset().top;
        console.log(yPos);
        $("html,body").animate({
            scrollTop:yPos
        },1000)

        $(this).addClass("active").siblings().removeClass("active");
    })

})