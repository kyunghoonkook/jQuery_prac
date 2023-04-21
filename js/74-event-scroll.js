$(function(){
    //#mainBanner 이미지들이 .banner1보이고, 05초뒤에 banner3 1초뒤에 banner2이 서서히 보이도록
    $(".banner1").stop().fadeIn(1000);
    $(".banner2").delay(2000).fadeIn(2000);
    $(".banner3").delay(1500).fadeIn(2000);
    
    //scroll
    $(window).scroll(function(){
        //스크롤의 위치값
        var scrollY = $(this).scrollTop();
        console.log(scrollY);
        if(scrollY>300){
            $(".section1>.title").stop().animate({
                "left":300
            },1000)
            $(".section1>p").stop().animate({
                "right":300
            },1000)
        }
        
        if(scrollY>1000){
            $(".section2>.title").stop().animate({
                "left":100
            },500)
            $(".section2>p").stop().animate({
                "right":200
            },500)
        }
        else{
             $(".section2>.title").stop().animate({
                "left":-200
            },500)
            $(".section2>p").stop().animate({
                "right":-400
            },500)
        }
    })
})