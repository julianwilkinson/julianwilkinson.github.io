$(document).ready(function(){
  $( "#about_button" ).click(function(){
    // $(".hide").css("opacity", "0");
    $(".hide").toggleClass("hide-active");
    $(".projects").toggleClass("hide-active");
    $(".navbar").toggleClass("hide-active");
    $(".hide").on('transitionend',
    function () {
      $(".navbar a").css("cursor", "default");
    });

    // $(".projects").css("opa city", "0");
  });
});
