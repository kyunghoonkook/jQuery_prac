$(function(){
    //첫번째 버튼을 클릭하면 
    //.box의 width200, height 200, opacity 0.2 스르륵?
    $("button:eq(0)").click(function(){
        $(".box").animate({
            "width":"200px",
            "height":"200px",
            "opacity":0.2
        },1000)
    })
    //두번째 버튼을 클릭하면
    //.box의 width 50, height 50 opacity 1
    $("button:eq(1)").click(function(){
        $(".box").animate({
            width:"50px",
            height:"50px",
            opacity:1
        },1000)
    })
    //세번째 버튼을 클릭하면
    //.box의 margin-left:1000px, background-color:"pink"
    $("button:eq(2)").click(function(){
        $(".box").animate({
            width:"200px",
            height:"200px",
            marginLeft:"1000px",
            backgroundColor:"pink"
        },1000,"easeOutElastic")
    })
    //네번째 버튼을 클릭하면
    //.box margin-left:0  background cornflowerblue 
    //애니메이션이 끝난다음에 width,height 50으로 변경하도록
    // $("button:eq(3)").click(function(){
    //     $(".box").animate({
    //         "margin-left":0            
    //     },1000,function(){
    //         $(this).animate({
    //             width:"50px",
    //             height:"50px",
    //             "background-color":"cornflowerblue"
    //         },1000)
    //     })
    // })
    $("button:eq(3)").click(function(){
        $(".box").animate({
            marginLeft:0
        },1000)
        
        $(".box").animate({
            width:"50px",
            height:"50px",
            backgroundColor:"cornflowerblue"
        },1000)
    })
})