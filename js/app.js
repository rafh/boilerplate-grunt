

$(document).ready(function(){
  $(".scroll-up").click(function() {
      $("html, body").animate({
          scrollTop: $(".header").offset().top
      }, 1500)
    })
})
