init = function() {
  var puzzleArea = document.getElementById('puzzlearea');
  var divs = puzzleArea.getElementsByTagName("div");

  for (var i = 0; i < divs.length; i++) {
    var div = divs[i];
    var x = ((i % 4) * 100);
    var y = (Math.floor(i / 4) * 100);

    div.style.left = x + 'px';
    div.style.top = y + 'px';
    if (i < divs.length - 1) {
      div.className = "puzzlepiece";
      div.style.backgroundImage = 'url("background.jpg")';
    } else {
      div.className = "blank";
    }
    div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
    div.x = x;
    div.y = y;
  }
};

$(document).ready(function() {
  $(".puzzlepiece").each(function() {
    $(this).hover(function() {
      var bx = parseInt($(".blank").css('left'));
      var by = parseInt($(".blank").css('top'));
      var x = parseInt($(this).css('left'));
      var y = parseInt($(this).css('top'));
      if ((x === bx - 100 && y === by) || (x === bx + 100 && y === by) ||
          (x === bx && y === by - 100) || (x === bx && y === by + 100)) {
        $(this).addClass("movablepiece");
      } else if ($(this).hasClass("movablepiece")) {
        $(this).removeClass("movablepiece");
      }
    });
    $(this).click(function() {
      var bx = parseInt($(".blank").css('left'));
      var by = parseInt($(".blank").css('top'));
      var x = parseInt($(this).css('left'));
      var y = parseInt($(this).css('top'));
      if ($(this).hasClass("movablepiece")) {
        $(this).css({'left': bx + 'px', 'top': by + 'px'});
        $(".blank").css({'left': x + 'px', 'top': y + 'px'});
      }
    });
  });
});

function shuffle() {
  var random = Math.floor(Math.random() * 100);
  var i = 0;
  $(".puzzlepiece").each(function() {
    var bx = parseInt($(".blank").css('left'));
    var by = parseInt($(".blank").css('top'));
    var x = parseInt($(this).css('left'));
    var y = parseInt($(this).css('top'));
    $(this).css({'left': bx + 'px', 'top': by + 'px'});
    $(".blank").css({'left': x + 'px', 'top': y + 'px'});
    i++;
    if (i >= random)
      return false;
  });
}
