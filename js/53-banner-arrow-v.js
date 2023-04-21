$(function () {
    //화면에 보여지는 배너가 몇번째 배너인지를 체크할 변수 만들기
    var showBanner = 0;
    
    //배너가 이동하는 함수
    function moveBanner(){
        $(".banner").stop().animate({
            "margin-top":-showBanner*400+"px"
        },1000)
    }
    
    //오른쪽 버튼을 클릭하면 배너가 위로 한개씩 올라가도록 400px
    $(".rightBtn").click(function(){
        if(showBanner<3){
            showBanner++;
        }
        moveBanner();
    })
    
    //왼쪽 버튼을 클릭함녀 배너가 아래로 한개씩 내려가도록 400px
    $(".leftBtn").click(function(){
        if(showBanner>0){
            showBanner--;
        }
        moveBanner();
    })

})
