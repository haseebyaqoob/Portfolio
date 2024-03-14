$(function () {
  $(".menubar").on("click", function () {
    gsap.to("#navigation-content", { duration: 0.6, y: 0, ease: "power2.out" });
  });

  $(".navigation-close").on("click", function () {
    gsap.to("#navigation-content", { duration: 0.6, y: "-100%", ease: "power2.out" });
  });
});
