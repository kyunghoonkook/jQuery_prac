$(function () {
    //보여지는 배너를 체크할 변수만들기
    var showBanner = 0;
    //첫번째 배너를 복사하여 배너의 마지막에 붙이기
    var obj = $(".banner>.b1").clone();
    $(".banner").append(obj);

    //배너이동와 버튼 변경
    function moveBanner() {
        
        $(".banner").stop().animate({
            //0 0 0*-100
            //1 -100% 1*-100
            //2 -200% 2*-100
            //3 -300% 3*-100
            marginLeft: -showBanner * 100 + "%"
        }, 1000)

        if (showBanner == 4 ) {
            $(".btn>li").eq(0).addClass("active").siblings().removeClass("active")
        } else {
            $(".btn>li").eq(showBanner).addClass("active").siblings().removeClass("active");
        }
    }

    //버튼을 클릭하면 배너가 해당하는 위치로 이동하고, 버튼에 active 클래스 추가하기
    $(".btn>li").click(function () {
        showBanner = $(this).index();
        console.log(showBanner);
        moveBanner();
    })

    //오른쪽 버튼을 클릭하면 
    $(".rightBtn").click(function () {
        console.log(showBanner);
        
        if(showBanner==4){
            showBanner=0;
            $(".banner").css("margin-left",0);            
        }
        showBanner++;
        moveBanner();
    })
    
    //왼쪽 버튼을 클릭하면
    $(".leftBtn").click(function(){
        if(showBanner==0){
            showBanner=4;
            $(".banner").css("margin-left",-100*showBanner+"%")
        }
        showBanner--;
        moveBanner();
    })

})
