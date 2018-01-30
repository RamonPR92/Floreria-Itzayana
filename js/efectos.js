$(document).ready(function () {
    //$("#small-logo").hide();
    $(".menu-icon").on("click", function(){
        $("nav ul").toggleClass("showing");
    });
});

$(window).on("scroll", function(){
    var nav = $("#nav");
    var altoDeBarra = nav.height();
    var posicionNav = nav.position();

    //prueba de z

    var navzposition = nav.css("z-index");
    console.log("zindex " + navzposition);

    $("#small-logo").attr('src','../img/logo-small.png');
    $("#small-logo").css("display", "block-inline");

    //el scroll
    if($(window).scrollTop() >= posicionNav.top){
        addAparienciaAlNav();
    } 
    
    if($(window).scrollTop() <= 200){
        quitarAparienciaAlNav();
    }
});

//
 function addAparienciaAlNav(){
    $('nav').css("top", "0px");
    $('nav').css("left", "0px");
    $('nav').css("position", "fixed");
    $("#menu-navegacion").css("text-align","right");
    //Si la ventana es menor a 580px de ancho, no muestra el 
    //logotipo pequeño, con el efecto scroll
    if($(window).width() <= 580){

    }else{
        $("#small-logo").show().css("position", "fixed");

    }    
};

function quitarAparienciaAlNav(){
    $('nav').css("top", "200px");
    $('nav').css("left", "0px");
    $('nav').css("position", "static");
    $("#menu-navegacion").css("text-align","center");
    $("#small-logo").hide().css("position", "static");
};