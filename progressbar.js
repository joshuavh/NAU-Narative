// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction()
};

// Execute myFunction once when the page is loaded
window.onload = function() {
  myFunction();
}

function myFunction() {
    var winScroll = document.body.scrollLeft || document.documentElement.scrollLeft;
    var width = document.documentElement.scrollWidth - document.documentElement.clientWidth;
    var scrolled = 100; // Default value: fill width

    // Only if document is scrollable
    if (width > 0) {
        scrolled = (winScroll / width) * 100;
    }
    document.getElementById("myBar").style.width = scrolled * 2 + "%";
}
