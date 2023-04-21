$(function(){
    //headTop height
    var headtopH=$(".headTop").outerHeight();
    console.log(headtopH);
    
    $(window).scroll(function(){
        //스크롤의 위치값
        var scrollY = $(this).scrollTop();
        if(scrollY>=headtopH){
            $("header").css({
                "position":"fixed",
                "top":-headtopH
            })
        }
        else{
            $("header").css({
                "position":"relative",
                top:0
            })
        }
    })
})