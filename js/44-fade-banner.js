$(function(){
    var sNum;
    //controlBtn>li를 클릭하면 자신은 addClass(red) 형제들은 removeClass(white)
    //첫번째 li를 클릭하면 banner 첫번째 자식인 li가 보이고, 나머지 형제는 사라지고
    //두번째 li를 클릭하면 banner두번째 자식인 li가 보이고, 나머지 형제는 사라지고
    $(".controlBtn>li").click(function(){
        //클릭한 li의 순서 찾기
        sNum=$(this).index();
        console.log(sNum);

        $(this).addClass("active")
        .siblings().removeClass("active");

        $(".banner>li").eq(sNum).stop().fadeIn(1000)
        .siblings().stop().fadeOut(1000);
    })
})