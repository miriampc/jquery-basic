// $(document).ready(function(){
//   alert("Cargó jQuery");
// });

// $( _ => { //() => {} or function(){}
  //alert("Cargó jQuery");
  // $("a").click(function(){

  // })//devuelve uno o mas elementos

//selector .on ('click',(e)=>{}) ejecuta el evento para todos los selectores

// });

//JQuery devuelve un array de objetos,

// $(function(){
//   alert("Cargó jQuery");
// });


//Scrapping scanear data de la web

$( () => { //function() {}
  $(".popup-link").on('click',(e) => {
    e.preventDefault();
    $('.brand-popup').show();
    //$('.brand-popup').removeClass('hide');
    //$('.brand-popup').addClass('show');

  });

  $(".brand-popup .popup-close").on('click',(e) => {
    e.preventDefault();
    $('.brand-popup').hide();
    //$('.brand-popup').removeClass('show');
    //$('.brand-popup').addClass('hide');
  })
});
