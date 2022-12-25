$(".menu a").on("click", function () {

  let href = $(this).attr("href");

  $("html, body").animate({
    scrollTop: $(href).offset().top
  }, {
    duration: 500,
    easing: "linear"
  });

  return false;
});