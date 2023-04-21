$(function () {
  //#nav>li click하면 toggleClass
  $("#nav>li").click(function () {
    // $(this).toggleClass("active").siblings().removeClass("active");
    // $(this).children(".sub").stop().slideToggle(300);
    // $(this).siblings().children(".sub").stop().slideUp(300);

    $(this).toggleClass("active")
    .children(".sub").stop().slideToggle(300)
    .parent().siblings().removeClass("active")
    .children(".sub").stop().slideUp(300);

  });
});
