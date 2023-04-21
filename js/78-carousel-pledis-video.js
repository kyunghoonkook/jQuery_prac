$(function(){
    //가운데 나와있는 배너가 누구인지 체크할 변수 만들기
    //보여지는 배너를 체크할 변수
    var showBanner = 0;
    
    //복사전 자식의 개수
    var liCount= $(".videoBanner>li").length;
    
    //배너한개의 너비값 구하기
    var liWidth=$(".videoBanner>li").width();
    console.log(liWidth);
    
    //배너의 마지막요소 복사하기
    var objLast = $(".videoBanner>li:last").clone();
    
    //배너의 1,2요소 복사하기
    var objFirst=$(".videoBanner>li:lt(2)").clone();
    
    $(".videoBanner").append(objFirst);
    $(".videoBanner").prepend(objLast);
    
    //복사한 후의 자식의 개수 구하기
    var count = $(".videoBanner>li").length;
    
    //부모의 너비
    $(".videoBanner").width(count*liWidth);
    //li의 너비는
    $(".videoBanner>li").width(liWidth);
    
    //비디오를 이동시키고, 하늘색 배경인 비디오 보이고, 선택이 안된 li는 그림이 보이도록
    function moveVideo(){
        $(".videoBanner").stop().animate({
            "margin-left":-showBanner*liWidth - liWidth/2
        },500)
        
        $(".videoBanner>li").children(".video").stop().fadeOut(500);
        $(".videoBanner>li").eq(showBanner+1).children(".video").stop().fadeIn(500);
    }
    
    
    //rightBtn
    $(".rightBtn").on("click",function(){
        console.log(showBanner);
        if(showBanner==liCount){
            showBanner=0;
            $(".videoBanner").css("margin-left",-liWidth/2)
        }
        showBanner++;
        moveVideo();
    })
    
    //leftBtn
    $(".leftBtn").on("click",function(){
        if(showBanner==0){
            showBanner=liCount;
            $(".videoBanner").css("margin-left",-showBanner*liWidth-liWidth/2)
        }
        showBanner--;
        moveVideo();
    })
    
})










