$(function(){
    //li width
    var liWidth = $(".sns>li").width();
    
    // li 개수
    var liCount = $(".sns>li").length;

    //.sns의 너비값 설정
    $(".sns").width(liWidth*liCount);
    //.sns의 너비값 얻어오기
    var snsWidth= $(".sns").width();

    //윈도우의 너비값
    var wWidth= $(window).width();

    //일대일 대응점 찾기 : 일차함수
    //마우스가 움직일 거리는 0(a)~ window의 너비(b)까지 움직일때
    //.sns는 0(c)~ sns너비-윈도우의너비(d)의 너비 만큼 움직인다
    //마우스의 위치에 따라     .sns 가 이동할 위치는
    // (d-c)/(b-a)*(마우스위치-a)+c

    $(".sns").mousemove(function(e){
        var mouseX = e.clientX;
        console.log(snsWidth,wWidth,e.clientX);
        //sns의 마진값은?
        var moveX =(snsWidth-wWidth)/wWidth*mouseX;
        $(".sns").css("margin-left",-moveX)

    })

    


})