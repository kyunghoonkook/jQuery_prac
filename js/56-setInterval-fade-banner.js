$(function () {
    //현재 보여지는 배너를 체크할 변수 만들기
    var showBanner = 0;

    function autoBanner() {
        console.log(showBanner);
        if (showBanner < 2) {
            showBanner++;
        } else {
            showBanner = 0;
        }
        $(".banner>li").eq(showBanner).fadeIn(1000).siblings().fadeOut(1000)
    }

    setInterval(autoBanner,3000);
})
