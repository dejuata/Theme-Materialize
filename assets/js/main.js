
$(document).ready(function(){
    $('#tabs-swipe-demo').tabs({ 
      'swipeable': true,      
    });
  });

//Funcion para obtener el scroll
function getScrolled() {
    try {
      return window.pageYOffset || body.scrollTop || html.scrollTop;
    } catch(exp) {
      return 0;
    }
}

(function(){
    
    $(".page-scroll").on("click", function(event){ 
             
        var posicion = $(this);//almaceno el objeto actual
        
       //desplazamiento de la pagina a la seccion seleccionada
        $("html, body").animate({            
            scrollTop: $(posicion.attr('href')).offset().top - 50//$('#perfil') + posicion de scroll - 50
        }, 1500, 'easeInOutExpo');//'easeInOutExpo' tipo de animacion
        
        event.preventDefault(); 
    });

})();
