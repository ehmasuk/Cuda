
// mixitup plugin
$(document).ready(function(){
    var mixer = mixitup(".portfolio-section");
});
// sticky nav with waypoint js
$(document).ready(function(){


    $(".heading-section").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("stick-top");
        } else {
            $("nav").removeClass("stick-top");
        }
    });


});

// scroll it
$(function(){
    $.scrollIt();
});