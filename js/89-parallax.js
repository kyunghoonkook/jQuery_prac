$(function(){
    //각각의 section영역을 저장할 변수
    var section = $(".parallax>div");
    // console.log(section);

    //각각의 section 영역의 위치값 저장하기
    var sectionInfo= new Array();

    //각 section 자식들의 위치값을 저장할 배열
    var objectInfo = [];

    //각 section 마다 실행해라~
    //각 section을 구분해주는 i
    section.each(function(i){
        //각 section의 위치값 저장
        sectionInfo.push($(this).offset().top);
        // console.log(sectionInfo);
        //자식요소를 저장할 배열에 또 다른 배열을 넣어서 2차원으로 사용하기
        //배열명[][]
        //배열명[첫번째section][0~8]
        //배열명[두번째section][0~6]
        //배열명[세번째section[0~2]
        objectInfo.push([]);
        //자식들을 저장할 변수
        var child = $(this).children();
        // console.log(child);
        // j
        child.each(function(j){
            objectInfo[i][j]= $(this).position().top;
        })

        // console.log(objectInfo);

        //화살표
        var upBtn = $(this).find(".arrow>li:eq(0)");
        var downBtn= $(this).find(".arrow>li:eq(1)");

        //downBtn을 클릭하면 다음 section으로 이동하도록 
        downBtn.on("click",function(e){
             e.preventDefault();
            if( i !=2){
                $("html,body").stop().animate({
                    scrollTop:sectionInfo[i+1]
                },800)
            }
        })
        //upBtn을 클릭하면  이전 section으로 이동하도록
        upBtn.on("click",function(e){
            e.preventDefault();
            if( i != 0){
                $("html,body").stop().animate({
                    scrollTop:sectionInfo[i-1]
                },800)
            }
        })
    })

    section.css("position","fixed");

    //윈도우에서 스크롤 이벤트가 발생하면 스크롤의 위치값을 찾아서
    //각각의 section의 스크롤의 속도와 다르게 움직이도록
    $(window).scroll(function(){
        //스크롤의 위치값
        var scrollT = $(window).scrollTop();
        console.log(scrollT);
        section.each(function(i){
            //움직일 거리는 0~1200
            var moveY = - scrollT + sectionInfo[i];
            if(scrollT>sectionInfo[i]){
                moveY *= 0.5;    
            }
            $(this).css("top",moveY);

            //자식을 선택하여 움직이기
            var child = $(this).children();
            child.each(function(j){
                //움직일 범위 구하기
                //이동할 위치값
                //시작위치
                var start = sectionInfo[i];

                //끝위치
                var end = sectionInfo[i+1];
                if(!end){
                    end = $(".wrap").height();
                }

                var objStart = objectInfo[i][j];
                var objEnd = objectInfo[i][j]+j*200;

                var objMove = (objEnd - objStart)/(end-start) *(scrollT-start)+objStart;
                $(this).css("top",objMove)
                //x a~ b
                //y c~ d
                // x가 t로 갔을때 y는 어디로 가냐되느냐?


            })

        })
        
    })


})