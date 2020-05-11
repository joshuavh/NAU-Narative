function myFunction() {
  var x = document.getElementById("aboutsection");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById("about").innerHTML = "about";
  } else {
    x.style.display = "block";
    document.getElementById("about").innerHTML = "&#10060";
  }
}
