// Nav js used on pr
$(document).ready(function(){

    $(".NavLink").click(function(){
        $("nav").toggle( "slow" );
        $( "div.NavLink" ).toggleClass( "change" )
    });

    $("a").click(function(){
        $("nav").toggle( "slow" );
        $( "div.NavLink" ).toggleClass( "change" )
    });


   
    });