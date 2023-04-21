$(function(){
    //.btn>li를 클릭하면 몇번째 li가 클릭되었는지 순서를 찾고
    //클릭한 li에는 active클래스를 추가하고, 형제들한테 적용된 active클래스는 제거
    //.bigImg>li 몇번째에 해당하는 li는 fadeIn되면서 보이고, 
    //나머지 형제들의 fadeOut로 사라지도록
    //.bigImg해당하는>li 의 후손인 img alt 속성을 bTitle내용으로 넣도록
    $(".btn>li").click(function(){
        var sNum = $(this).index();
        console.log(sNum);
        var title = $(".bigImg>li").eq(sNum).find("img").attr("alt");
        console.log(title);
        //제목
        $(".bTitle").text(title);
        //썸네일 아이콘 반투명도
        $(this).addClass("active").siblings().removeClass("active");

        //큰그림
        $(".bigImg>li").eq(sNum).fadeIn(1000).siblings().fadeOut(1000);
    })

    //.bigImg>li를 클릭하면 .bg fadein되면서 보이고,
    //.popup을 slideDown 되면서 보이고, .popup의 배경은 bigImg>li에 find img src들어있는 그림
    $(".bigImg>li").click(function(){
        //
        var src = $(this).find("img").attr("src");
        console.log(src);
        //popup의 위치값
        var $left = ($(".bg").width()-$(".popup").width())/2;
        var $top = ($(".bg").height()-$(".popup").height())/2;

        $(".bg").fadeIn(1000);
        $(".popup").css({
            "background-image":`url(${src})`,
            "background-repeat":"no-repeat",
            // backgroundRepeat:"no-repeat",
            "background-size":"100%", 
            "left":$left,
            // left:$left,
            "top":$top
        })
        $(".popup").slideDown(1000);
    })

    //popup
    $(".popup").click(function(){
        $(".bg").fadeOut(1000);
        $(this).slideUp(1000);
    })

})
