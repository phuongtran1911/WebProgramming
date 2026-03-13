function button() {
  alert("Hello, world!");
  document.getElementById("text").style.fontSize = "24pt";
  setInterval(fontTimer, 500);
}

function fontTimer() {
  var font = 2 + parseInt($("#text").css("font-size"));
  document.getElementById("text").style.fontSize = font + "pt";
}

function checkbox() {
  alert("Hello, world!");
  if (document.getElementById("bling").checked === true) {
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "green";
    document.getElementById("text").style.textDecoration = "underline";
    document.body.style.backgroundImage = "url('hundred-dollar-bill.jpg')";
  } else {
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.textDecoration = "none";
    document.body.style.backgroundImage = "";
  }
}

function pig() {
  var text = document.getElementById("text").textContent;
  var array = text.split(" ");
  for (var i = 0; i < array.length; i++) {
    var letter = array[i].charAt(0);
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      array[i] = array[i] + "ay";
    } else if (letter !== "") {
      array[i] = array[i].slice(1) + letter + "ay";
    }
  }
  document.getElementById("text").innerHTML = array.join(" ");
}

function malkovitch() {
  var text = document.getElementById("text").textContent;
  var array = text.split(" ");
  for (var i = 0; i < array.length; i++) {
    if (array[i].length >= 5) {
      array[i] = "Malkovich";
    }
  }
  document.getElementById("text").innerHTML = array.join(" ");
}
