$(document).ready(function () {
  $(".menu-btn").click(function () {
    $(".navbar-nav").toggleClass("active");
  });
  $(".nav-link").click(function () {
    $(".navbar-nav").toggleClass("active");
  });

  // $('.navbar-nav').onePageNav({
  //     currentClass: 'active',
  //     changeHash: false,
  //     scrollSpeed: 750,
  //     scrollThreshold: 0.5,
  //     filter: '',
  //     easing: 'swing',

  // });
});
