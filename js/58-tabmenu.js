$(function(){
    //메뉴를 저장할 변수 만들기
    var tab = $(".tabBtn>li");
    //내용물
    var tabList = $(".tabList>table");
    
    tab.click(function(){
        var showTab = $(this).index();
//        tab.removeClass("active");
//        $(this).addClass("active");
        
        $(this).addClass("active")
            .siblings().removeClass("active");
        
//        tabList.stop().fadeOut(500);
//        tabList.eq(showTab).stop().fadeIn(500)
        
        tabList.eq(showTab).stop().fadeIn(500)
            .siblings().stop().fadeOut(500);
    })
})