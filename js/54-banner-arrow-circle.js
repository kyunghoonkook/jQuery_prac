$(function () {
    //선택된 배너가 누구인지를 체크할 변수 만들기
    var showBanner = 0;
    //배너의 개수 알아내기
    var bCount = $(".banner>li").length;
    console.log(bCount);

    //배너애니
    function moveBanner() {
        $(".banner").stop().animate({
            marginLeft: -showBanner * 100 + "%"
        }, 1000);
        
        $(".circle>li").eq(showBanner).addClass("active")
            .siblings().removeClass("active");
    }
    
    //circle
    $(".circle>li").click(function () {
        showBanner = $(this).index();
        moveBanner();        
    })
    
    //오른쪽 버튼
    $(".rightBtn").click(function(){
        if(showBanner<(bCount-1)){
            showBanner++;
        }
        moveBanner();
    })
    
    $(".leftBtn").click(function(){
        if(showBanner>0){
            showBanner--;
        }
        moveBanner();
    })    
})

