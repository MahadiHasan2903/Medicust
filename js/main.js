// Fact Section
$(".counter").counterUp({
  delay: 10,
});

// Testimonial Section
$(".testimonial").owlCarousel({
  autoplay: true,
  autoplayTimeout: 10000,
  navSpeed: 1000,
  loop: true,
  autoplayHoverPause: true,
  pagination: false,
  smartSpeed: 1000,
  margin: 35,
  stagePadding: 10,
  items: 3,
  nav: true,
  navElement: "span",
  navText: [
    "<span class='icofont-long-arrow-left'></span>",
    "<span class='icofont-long-arrow-right'></span>",
  ],
  responsive: { 0: { items: 1 }, 992: { items: 2 }, 1200: { items: 3 } },
});

// Blog Section
$(".blog-carousel").owlCarousel({
  autoplay: true,
  autoplayTimeout: 5000,
  navSpeed: 1000,
  loop: true,
  autoplayHoverPause: true,
  pagination: false,
  smartSpeed: 1000,
  margin: 35,
  stagePadding: 15,
  items: 2,
  responsive: { 0: { items: 1 }, 992: { items: 1 }, 1200: { items: 2 } },
});
$(".blog-carousel-nav.btn-prev").on("click", function () {
  $(".blog-carousel").trigger("next.owl.carousel");
});
$(".blog-carousel-nav.btn-next").on("click", function () {
  $(".blog-carousel").trigger("prev.owl.carousel");
});



// BackToTop
$(".back2top").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});
jQuery(window).on("scroll", function () {
  (function (a) {
    if ($(window).scrollTop() > 300) {
      $(".back2top").addClass("totop");
    } else {
      $(".back2top").removeClass("totop");
    }
  })(jQuery);
});

// jQuery(document).ready(function() {
//   jQuery('.asideRightFixed').theiaStickySidebar({
//     additionalMarginBottom: 0,
//     sidebarBehavior: "stick-to-bottom",
//   });
// });

