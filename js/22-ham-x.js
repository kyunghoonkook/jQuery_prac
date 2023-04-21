$(function(){
    //ham1 attr
    //버튼을 몇번클릭했는지를 체크할 변수
    var count =0;
    $(".ham1>a").click(function(){
        count++;
        //count값이 홀수번 눌러지면 x
        //짝수번 눌러지면 햄버거 그림이 되도록
        console.log(count);
        if(count % 2 != 0){
            $(this).children("img").attr("src","images/icon_modal_close.png");
        }
        else{
            $(this).children("img").attr("src","images/hamBtn.png")
        }
    })
    //ham2
    $(".ham2>a").click(function(){
        $(this).toggleClass("active");
    })
    //.ham3
    $(".ham3>a").click(function(){
        if($(".ham3>a").hasClass("active")){
            $(this).removeClass("active")
        }
        else{
            $(this).addClass("active");
        }
    })
})