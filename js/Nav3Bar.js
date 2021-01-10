// Nav js used on pr
$(document).ready(function(){

    $(".NavLink").click(function(){
        $("nav").toggle();
        $("NavLink").toggle(".change");
    });

    $("a").click(function(){
        $("nav").toggle();
        $("NavLink").toggle(".change");
    });
   
    });