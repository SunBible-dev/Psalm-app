$(document).ready(function(){

    $("#link_1").click(function(){
        $("#iframe_1").css({"display": "block"});
        $("#iframe_2").css({"display": "none"});
    });

    $("#link_2").click(function(){
        $("#iframe_1").css({"display": "none"});
        $("#iframe_2").css({"display": "block"});
    });


   
    });