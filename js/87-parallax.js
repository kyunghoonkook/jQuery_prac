$(function(){
    //윈도우의 스크롤 이벤트가 발생하면 스크롤의 위치값에 따라서
    //.parallax안에 배경으로 넣을 그림을 위로, 
    //아래로 움직이도록 backgroun-position y축값을 조절
    $(window).scroll(function(){
        var yScroll = $(this).scrollTop();
        console.log(yScroll);
        var moveY = yScroll*0.05;
        // $("#container>.parallax").css("background-position","center "+moveY+"px");
        $("#container>.parallax").css("background-position",`center ${moveY}px`);
    })

})