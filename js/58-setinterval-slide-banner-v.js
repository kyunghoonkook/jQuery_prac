$(function () {
    //현재 보여지는 배너를 체크할 변수 
    var showBanner = 0;
    var obj = $(".banner>.b1").clone();
    $(".banner").append(obj);

    function moveBanner() {
        if (showBanner == 3) {
            showBanner = 0;
            $(".banner").css("margin-top", 0)
        }
        showBanner++;
        $(".banner").stop().animate({
            marginTop: -showBanner * 360 + "px"
        }, 1000)
    }

    setInterval(moveBanner, 3000)
})
