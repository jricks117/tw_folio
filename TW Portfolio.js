$(document).ready(function() {
    $(".wait-wait").hide();
    $(".btn-primary").on("click", function() {
      $(this).hide().next().fadeIn(1000);
    });
  });