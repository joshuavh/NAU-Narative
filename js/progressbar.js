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
    document.getElementById("myBar").style.width = scrolled * 1 + "%";

      if (scrolled > 1.4) {
          $("#marker0").css('background', '#7000FF');
      } else {
          $("#marker0").css('background', '#4a4a4a');
      }

      if (scrolled > 16.5) {
          $("#marker1").css('background', '#7000FF');
      } else {
          $("#marker1").css('background', '#4a4a4a');
      }

      if (scrolled > 35) {
          $("#marker1a").css('background', '#7000FF');
      } else {
          $("#marker1a").css('background', '#4a4a4a');
      }

      if (scrolled > 46) {
          $("#marker1b").css('background', '#7000FF');
      } else {
          $("#marker1b").css('background', '#4a4a4a');
      }

      if (scrolled > 52.5) {
          $("#marker2").css('background', '#7000FF');
      } else {
          $("#marker2").css('background', '#4a4a4a');
      }

      if (scrolled > 67.5) {
          $("#marker2a").css('background', '#7000FF');
      } else {
          $("#marker2a").css('background', '#4a4a4a');
      }

      if (scrolled > 87.5) {
          $("#marker2b").css('background', '#7000FF');
      } else {
          $("#marker2b").css('background', '#4a4a4a');
      }

      if (scrolled > 95) {
          $("#marker3").css('background', '#7000FF');
      } else {
          $("#marker3").css('background', '#4a4a4a');
      }
}
