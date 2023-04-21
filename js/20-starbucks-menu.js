$(function () {
  //#nav>li를 클릭하면 나는 active클래스가 추가되고,형제는 사라지고
  //내 자식인 sub를 보이고, 내 형제의 자식인 sub는 사라지고
  $("#nav>li").click(function () {
    //$(this).addClass("active").children(".sub").css("display","block");

    // $(this).addClass("active").siblings("li").removeClass("active");
    // $(this).children(".sub").css("display", "block");
    // $(this).siblings("li").children(".sub").css("display", "none");

    $(this)
      .addClass("active")
      .children(".sub")
      .css("display", "block")
      .parent("li")
      .siblings("li")
      .removeClass("active")
      .children(".sub")
      .css("display", "none");
  });
});
