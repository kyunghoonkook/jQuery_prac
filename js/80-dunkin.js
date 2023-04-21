$(function () {
    var showBanner = 0;

    var liWidth = $(".dunkin>li").outerWidth();

    var licount = $(".dunkin>li").length;

    var objFirst = $(".dunkin>li:lt(3)").clone();
    var objLast = $(".dunkin>li:gt(5)").clone();

    $(".dunkin").prepend(objLast);
    $(".dunkin").append(objFirst);

    var count = $(".dunkin>li").length;

    $(".dunkin").width(count * liWidth);

    $(".dunkin>li").outerWidth(liWidth);

    function moveBanner() {
        if (showBanner == licount) {
            showBanner = 0;
            $(".dunkin").css("margin-left", -liWidth / 2)
        }
        showBanner++;

        $(".dunkin").stop().animate({
            "margin-left": -showBanner * liWidth - liWidth / 2
        }, 1000)
    }

    var timer = setInterval(moveBanner, 2000)
    $(".wrap").mouseenter(function () {
        clearInterval(timer);
    })
    $(".wrap").mouseleave(function () {
        timer = setInterval(moveBanner, 2000)
    })





})
