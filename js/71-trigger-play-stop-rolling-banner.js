$(function () {
    //보여지는 배너가 누구인지를 체크할 변수만들기
    var showBanner = 0;
    //보여지는 배너가 누구인지를 숫자화시켜서 count안에 보여주기
    $(".count").text(showBanner + 1);

    //배너의 전체 개수 체크하기
    var total = $(".banner>li").length;
    console.log(total);
    $(".total").text(total);

    //첫번째 배너를 복사하여
    var obj = $(".banner>.b1").clone();
    //배너의 마지막에 붙이기
    $(".banner").append(obj);

    var cloneTotal = $(".banner>li").length;

    $(".banner").css("width", cloneTotal * 100 + "%");


    //이동하기 공통사항
    function moveBanner() {
        $(".banner").stop().animate({
            marginLeft: -100 * showBanner + "%"
        }, 1000)

        if (showBanner == total) {
            $(".count").text(1)
        } else {
            $(".count").text(showBanner + 1);
        }
    }

    //오른쪽 버튼을 클릭하면 배너를 한개씩 왼쪽으로 이동하기
    $(".right").on("click", function () {
        if (showBanner == total) {
            showBanner = 0;
            $(".banner").css("margin-left", 0)
        }
        showBanner++;
        moveBanner();
    })

    //왼쪽 버튼을 클릭하면 배너를 한개씩 오른쪽으로 이동하기
    $(".left").on("click", function () {
        if (showBanner == 0) {
            showBanner = total;
            $(".banner").css("margin-left", -total * 100 + "%")
        }
        showBanner--;
        moveBanner();
    })

    //3초마다 오른쪽 버튼을 강제로 실행
    //일정시간마다 반복학;
    var timer = setInterval(function () {
        $(".right").trigger("click");
    }, 3000)


    //playStop을 클릭하면
    //자동으로 가던 배너가  중지되면서, 이미지 play그림으로 변경
    //배너가 중지된 상태에서 ,클릭하면, 이미지 일지 정지로 변경되고, 배너는 자동으로 움직이고

    $(".playStop").on("click", function () {
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
            timer = setInterval(function () {
                $(".right").trigger("click");
            }, 3000)
        } else {
            $(this).addClass("on");
            clearInterval(timer);
        }
    })
})
