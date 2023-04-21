$(function(){
    //현재 보여지는 배너 체크할 변수 만들기
    var showBanner=0;
    //브라우저별로 방향의 체크하는 값이 차이를 통일할 변수 만들기
    var delta;

    //배너가 애니메이션 상태인지를 체크하기
    var animating = $(".banner").is(":animated");
    console.log(animating);

    //마우스휠을 아래로 내리면 다음 배너가 나오고, 위로 올리면 이전 배너가 나오도록
    $("html,body").on("mousewheel DOMMouseScroll",function(e){
        if(!animating){
            animating=true;
            //이벤트와 관련된 속성 정보를 얻어오기
            var event = e.originalEvent;
            // console.log(event);
            //파이어폭스에서 실행했는지, 다른 브라우저에서 실행했는지 체크하기
            //방향통일
            if(event.detail){
                //파이어폭스에서 실행
                //detail 속성으로 마우스 방향을 체크 3아래, -3 위로
                delta = event.detail* -40
            }
            else{
                //나머지 브라우저
                //wheelDelta -120 아래, 120 위로
                delta = event.wheelDelta; 
            }
            console.log(delta);
            if(delta<0 && showBanner<2){
                showBanner++;
            }
            if(delta>0 && showBanner>0){
                showBanner--;
            }
            $(".banner").stop().animate({
                "margin-left":-showBanner*100+"%"
            },500,function(){
                animating = false;
            })
        }
    })
})