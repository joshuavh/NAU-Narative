function myButton() {
  var x = document.getElementById("aboutsection");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById("about").innerHTML = "about";
    document.getElementById("about").style.fontSize = "20px";
    document.getElementById("about").style.borderBottomWidth = "1px";
  } else {
    x.style.display = "block";
    document.getElementById("about").innerHTML = "&#10005;";
    document.getElementById("about").style.fontSize = "40px";
    document.getElementById("about").style.borderBottomWidth = "0px";
  }
}
