$(function () {
    //현재 보여지는 배너(가운데 배너)가 누구인지 체크할 변수 만들기
    var showBanner = 0;
    //자식으 너비
    var liWidth = $(".mdPick>li").outerWidth();
    //복사전 배너의 개수
    var liCount = $(".mdPick>li").length;
    //배너 복제하기 앞뒤로 각각 2개씩 복제하여 
    //앞
    var objFirst = $(".mdPick>li:lt(3)").clone();
    //뒤
    var objLast = $(".mdPick>li:gt(4)").clone();

    //배너의 앞뒤로 붙이기
    $(".mdPick").prepend(objLast);
    $(".mdPick").append(objFirst);
    //복사한 후의 배너의 개수
    var count = $(".mdPick>li").length;
    
    
    //부모의 너비
    $(".mdPick").width(count * liWidth);
    //li의 너비
    $(".mdPick>li").outerWidth(liWidth);
   
    $(".mdPick>li").eq(showBanner + 2).find(".textBox").stop().fadeIn(500);
    

    function moveBanner() {
        console.log(showBanner);
        if (showBanner == liCount) {
            showBanner = 0;
            $(".mdPick").css("margin-left", -liWidth / 2)
        }
        showBanner++;
        $(".mdPick>li").find(".textBox").stop().fadeOut(500);
        $(".mdPick").stop().animate({
            marginLeft: -showBanner * liWidth - liWidth / 2
        }, 1000, function () {
            $(".mdPick>li").eq(showBanner + 2).find(".textBox").stop().fadeIn(500)
        })
        
        if (showBanner == liCount) {
            $(".scrollBg>li:eq(0)").addClass("active")
                .siblings().removeClass("active");
        } else {
            $(".scrollBg>li").eq(showBanner).addClass("active")
                .siblings().removeClass("active").siblings;
        }
    }
    //배너를 5초마다 하나씩 왼쪽으로 이동하기
    var timer = setInterval(moveBanner, 2000)
    $(".mdPickWrap").mouseenter(function () {
        clearInterval(timer);
    })
    $(".mdPickWrap").mouseleave(function () {
        timer = setInterval(moveBanner, 2000);
    })

})
