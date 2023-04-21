$(function(){
    //#uName에 포커스가 들어가면 배경색 skyblue
    //포커스가 벗어나면 배경을 흰색으로
    //focusin focusout
    $("#uName").focusin(function(){
        $(this).css("background","skyblue");
    })
    $("#uName").focusout(function(){
        $(this).css("background","white")
    })
        
    
    //focus blur
    $("#uId").focus(function(){
        $(this).css("background","pink");
    })
    $("#uId").blur(function(){
        $(this).css("background","white");
    })
    
    //주소에 글자를 입력후 드래그(select)하면 배경이 hotpink
    $("#address").select(function(){
        $(this).css("background","hotpink");
    })
    //#tel에서 선택한 옵션에 대한 정보 알아보기
    $("#tel").change(function(e){
        console.log(e);
        console.log($(this).val());
        console.log($(this).prop("selectedIndex"))
    })
    
    //전송버튼을 클릭하면 '회원가입을 축하합니다'alert
    $("#myForm").submit(function(){
        alert("회원가입을 축하합니다");
    })
    
    
})



