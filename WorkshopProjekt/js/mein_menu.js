/*
   -------------------------------------------------
   jQuery-Selektoren, Klassen, IDs anpassen!

   Falls 'nav' keine ID hat und es nur 1 'nav' gibt,
   dann z.B.: $("nav ul").
   -------------------------------------------------
*/
$(document).ready(function(){
  // Folgende Funktion wird ausgefuehrt,
  // - bei Seitenaufruf oder
  // - bei jedem Resize des Browser-Fensters:

  $(".menubutton a").on("click", function(ev){
    ev.preventDefault();
    $(".menubutton a").toggleClass('active');
    $("#mainnav ul").slideToggle(400);
  });

  var adjust_my_nav = function() {

    // Falls '.menubutton' sichtbar
    //    s. '.menubutton' im Stylesheet mit 'display:block'
    //    bei @media only screen and (max-width: 480px)!

    if ( $(".menubutton").css('display') != 'none' ) {

      // verstecke zuerst die sichtbare Navigation...
      $("#mainnav ul").css("display", "none");
    }
    else {
      $("#mainnav ul").css("display", "block");
      
    }
  };
  // end of function 'adjust_my_nav'


  // bei Seitenaufruf:
  adjust_my_nav();

  // bei jedem Fenster-resize:
  $(window).resize(function() {
    // Reset toggle  (falls Resizing bei sichtbarer Nav gemacht wird)
    console.log('resize!');
    $(".menubutton a").removeClass('active');
    adjust_my_nav();
  });

});