$(document).ready(function() {
  $("#start").click(function() {
    if ($(".boundary").hasClass("youlose")) {
      $(".boundary").removeClass("youlose");
      $("#status").text("Click the \"S\" to begin.");
    }
    $("#status").mouseover(function() {
      $(".boundary").addClass("youlose");
    });
    $("p").mouseover(function() {
      $(".boundary").addClass("youlose");
    });
    $(".boundary").mouseover(function() {
      $(".boundary").addClass("youlose");
    });
  });

  $("#end").click(function() {
    if ($(".boundary").hasClass("youlose")) {
      $("#status").text("Sorry, you lost. :(");
    } else {
      $("#status").text("You win! :)");
    }
  });
});
