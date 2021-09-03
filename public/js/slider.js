$(document).ready(function () {
  $(".post-wrapper").slick({
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "60px",
    slidesToShow: 3,
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
