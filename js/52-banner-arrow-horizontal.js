$(function () {
    //화면에 보여지는 배너가 몇번째 배너인지를 체크할 변수 만들기
    var showBanner = 0;
    
    //배너를 이동하는 함수 만들기
    function moveBanner(){
         $(".banner").stop().animate({
            "margin-left": -showBanner * 100 + "%"
        }, 1000)
    }

    //오른쪽 버튼을 클릭하면 다음 배너가 보이도록 .banner margin-left를 왼쪽으로 한개 이동하기
    $(".rightBtn").click(function () {
        if (showBanner < 3) {
            showBanner++;
        }
        console.log(showBanner);
        moveBanner();
    })

    //왼쪽 버튼을 클릭하면 이전 배너가 보이도록 .banner margin-left 오른쪽으로 한개 이동하기
    $(".leftBtn").click(function () {
        if (showBanner > 0) {
            showBanner--;
        }
        moveBanner();        
    })

})
