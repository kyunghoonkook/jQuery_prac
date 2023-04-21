$(function(){
    //모든 a
    var menu = $("a");

    var text= $(".content>section");

    //a를 클릭하면 href에 있는 링크 대상이 누구인지 찾기
    menu.click(function(e){
        //href값 hash
        var target = $(this.hash);
        console.log(target);
        $("html,body").stop().animate({
            scrollTop:target.offset().top
        },1000)
        //마크업있는 a, form submit의 기본 링크 기능을 막아줄때 사용한다.
       e.preventDefault(); 
    })
    $(window).on("scroll",function(){
        var scrollY = $(this).scrollTop();
        $(".parallax1").css("top",-scrollY*0.25+"px")
        $(".parallax2").css("top",-scrollY*0.5+"px")
        $(".parallax3").css("top",-scrollY*0.85+"px")

        //스크롤의 위치가 글자 각각의 영역안에 들어갔는지 체크해서 
        //해당하는 버튼에 클래스가 적용되고, 나머지 클래스가 제거되도록
        text.each(function(){
            var id= $(this).index();
            if($(this).offset().top <= scrollY)
            {
                $("#nav>li").removeClass("active");
                $("#nav>li").eq(id).addClass("active");
               
                // $("#nav>li").eq(id).addClass("active")
                // .siblings().removeClass("active");
            }

        })

    })
})