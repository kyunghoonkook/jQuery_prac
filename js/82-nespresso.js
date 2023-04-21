$(function(){
    //현재보여지는 배너를 체크할 변수
    var showBanner=0;

    //li width 값
    var liWidth=$(".smallSubtainable>li").outerWidth();
    //복사하기전의 li개수
    var count=$(".smallSubtainable>li").length;
    //작은그림 앞에서 3개 복사하여 뒤에 붙이기
    var obj= $(".smallSubtainable>li:lt(3)").clone();
    $(".smallSubtainable").append(obj);
    //복사후 li의 개수
    var liCount= $(".smallSubtainable>li").length;
    //부모의 너비
    $(".smallSubtainable").width(liCount*liWidth);
    $(".smallSubtainable").css("margin-left",-liWidth);
    //li너비
    $(".smallSubtainable>li").outerWidth(liWidth);
    function moveBanner(){
        $(".smallSubtainable").stop().animate({
            marginLeft:-showBanner*liWidth-liWidth
        },1000)

       if(showBanner==count){
            $(".bigSubtainable>li").eq(0).stop().fadeIn(500)
            .siblings().stop().fadeOut(500);
       }
       else{
         $(".bigSubtainable>li").eq(showBanner).stop().fadeIn(500)
         .siblings().stop().fadeOut(500);
       }
    }
    //오른쪽 버튼을 클릭하면 작은 그림이 한개씩 왼쪽으로 이동하기
    $(".rightBtn").on("click",function(){
        if(showBanner==count){
            showBanner=0;
            $(".smallSubtainable").css("margin-left",-liWidth)
        }
        showBanner++;
        moveBanner();       
    })
    var timer=setInterval(function(){
        $(".rightBtn").trigger("click");
    },3000)
})