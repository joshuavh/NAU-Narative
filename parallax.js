// Y axis scroll speed
var velocity = 0.5;

function update(){
    var pos = $(window).scrollLeft();
    $('.chapter').each(function() {
        var $element = $(this);
        $(this).css('backgroundPosition', Math.round(pos * velocity) + 'px' + ' 50%');
    });
};

$(window).bind('scroll', update);
