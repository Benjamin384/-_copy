$(function(){
//map screen confirmed click event
$("#confirmed").click(function(){
    $(this).css({"background-color":"white","border-bottom-color": "#2493f2","border-top-color": "white"});
    $("#active").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
});

//map screen active click event
$("#active").click(function(){
    $(this).css({"background-color":"white","border-bottom-color": "#2493f2","border-top-color": "white"});
    $("#confirmed").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
});

//upright add click event
$("#rise").click(function(){
    $(this).css({"background-color":"white","border-bottom-color": "#2493f2","border-top-color": "white"});
    $("#act").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
    $("#cure").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
    $("#death").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
});

//upright act click event
$("#act").click(function(){
    $(this).css({"background-color":"white","border-bottom-color": "#2493f2","border-top-color": "white"});
    $("#rise").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
    $("#cure").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
    $("#death").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
});

//upright cure click event
$("#cure").click(function(){
    $(this).css({"background-color":"white","border-bottom-color": "#2493f2","border-top-color": "white"});
    $("#rise").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
    $("#act").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
    $("#death").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
});

//upright death click event
$("#death").click(function(){
    $(this).css({"background-color":"white","border-bottom-color": "#2493f2","border-top-color": "white"});
    $("#rise").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
    $("#act").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
    $("#cure").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
});

//charts confirmed click event
$("#confir").click(function(){
    $(this).css({"background-color":"white","border-bottom-color": "#2493f2","border-top-color": "white"});
    $("#add").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
});

//charts add click event
$("#add").click(function(){
    $(this).css({"background-color":"white","border-bottom-color": "#2493f2","border-top-color": "white"});
    $("#confir").css({"background-color":"rgb(201, 193, 193)","border-top-color": "#c9c5c5","border-bottom-color": "black"});
});


});



