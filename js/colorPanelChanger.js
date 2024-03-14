$(function () {
  $(".color-panel").on("click", function (e) {
    e.preventDefault();
    $(".color-changer").toggleClass("color-changer-active");
  });
  $(".colors a").on("click", function (e) {
    e.preventDefault();
    var attr = $(this).attr("title");
    console.log(attr);
    $("head").append('<link rel="stylesheet" href="css/' + attr + '.css">');
  });
});
