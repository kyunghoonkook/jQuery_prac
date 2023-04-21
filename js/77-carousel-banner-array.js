$(function () {
    //각각의 배너들의 위치값을 저장할 배열만들기
    var bannerX = new Array();
    //배너의 class명을 저장할 배열만들기
    var $banner = new Array();
    //for 규칙이 잇는 요소들을 순차적으로 실행
    //each
    //    for(i=0;i<8;i++){
    //        bannerX[i] = $(".banner>.b"+(i+1)).css("left");
    //        $banner[i]=$(".banner>.b"+(i+1)).attr("class");
    //    }
    $(".banner>li").each(function (i) {
        bannerX[i] = $(this).css("left");
        $banner[i] = "." + $(this).attr("class");
    })
    var count = $banner.length;
    console.log(count);
    console.log(bannerX);
    console.log($banner);
    //오른쪽 버튼을 클릭하면
    //$banner배열의 첫번째 요소를 추출하여 마지막에 넣고
    //$banner의 요소를 bannerX에 저장된 위치로 하나씩 애니메이션주기
    $(".right").on("click", function () {
        var obj = $banner.shift();
        $banner.push(obj);
        console.log($banner);
        $($banner[count - 1]).css("left", bannerX[count - 1]);

        for (i = 0; i < count; i++) {
            $($banner[i]).stop().animate({
                "left": bannerX[i]
            }, 500)
        }
    })

    //왼쪽 버튼을 클릭하면 뒤에 
    //$banner배열의 마지막 요소를 추출하여 배너 처음에 넣기
    //$banner의 요소를 bannerX에 저장된 위치로 하나씩 애니메이션주기
    $(".left").on("click", function () {
        var obj = $banner.pop();
        $banner.unshift(obj);
        console.log($banner);
        $($banner[0]).css("left", bannerX[0]);

        $($banner).each(function (i) {
            $($banner[i]).stop().animate({
                "left": bannerX[i]
            }, 500)
        })

    })

    //3초마다 배너가 하나씩 왼쪽으로 이동하기
    var timer = setInterval(function () {
        $(".right").trigger("click");
    }, 3000)


    //배너에 마우스가 들어가면 자동이 실행되지 않고,
    //마우스가 벗어나면 다시 자동 실행이 되도록
    $(".carouselBanner").on({
        "mouseenter": function () {
            clearInterval(timer);
        },
        "mouseleave": function () {
            timer = setInterval(function () {
                $(".right").trigger("click");
            }, 3000)
        }
    })
})
