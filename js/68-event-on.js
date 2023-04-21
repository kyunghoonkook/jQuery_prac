$(function(){
    //javascript
    //선택자.addEventListener("이벤트타입",function(){})
    
    //.bt1 click 이전의p 배경색 변경
    $(".btn1").on("click",function(){
        $(this).prev().css("background","pink");
    })
    
    //.btn2 mouseover focus 되면 배경이
    $(".btn2").on("mouseover focus",function(){
        $(this).prev().css("background","skyblue");
    })
    
    //.btn3 click-
    //dblclick -
    //mousemout -
    $(".btn3").on({
        "click":function(){
            $(this).prev().css("font-size","40px")
        },
        "dblclick" : function(){
            $(this).prev().css("background","#ddd")
        },
        "mouseout" :function(){
            $(this).prev().css("text-decoration","underline")
        }
    })
    
    
    
    
})