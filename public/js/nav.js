function createFields() {
    $('.field').remove();
    var container = $('#circle-nav');
    var ul = document.getElementById("nav");
    var items = ul.getElementsByTagName("li");
    for (var i = 0; i < items.length; ++i) {
           $('<div/>', {
            'class': 'field',
            'html': items[i].innerHTML
        }).appendTo(container);
    }
}

function distributeFields() {
    var radius = 200;
    var fields = $('.field'), container = $('#circle-nav'),
        width = container.width(), height = container.height(),
        angle = 0, step = (2*Math.PI) / fields.length;
    fields.each(function() {
        var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
        var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
        if(window.console) {
            console.log($(this).text(), x, y);
        }
        $(this).css({
            left: x + 'px',
            top: y + 'px'
        });
        angle += step;
    });
}

$('input').change(function() {
    createFields();
    distributeFields();
});

createFields();
distributeFields();
$('#profile').addClass('animated bounceIn');
animateFields();

function animateFields(){
    var fields = $('.field');
    var secs = 1;
    fields.each(function(){
        $(this).css('-webkit-animation-delay',  secs + "s");
        secs = secs + 0.3;       
    })
    fields.addClass('animated bounceIn');    
}


$(".fill-div").fancybox({
    width       : 600,
    height      : 600,
    autoSize    : false,
    padding : 0,
    fitToView: false,
    beforeShow: function(){
        $(".fancybox-skin").css("backgroundColor","transparent");
    },
    helpers : {
        overlay : {
            css : {
                'background' : 'rgba(51, 51, 51, 1)'
            }
        }
    }
});

$('.field').addClass('hollow');



