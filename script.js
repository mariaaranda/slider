'use srtrict'

const nodoSlider = $("#slider");
let nodoSlide  = $(".slide");
let paginacion = $(".paginacion");

const btnNext    = $("#btnNext");
const btnPrev    = $("#btnPrev");

let ref_interval;

$(document).ready(function(){
    
    let listaSlides = nodoSlide.length;

    let posicionSlide = 1;
    
    // PAGINACIÓN DINÁMICA
    for (let i = 1; i <= listaSlides; i++){
        $(paginacion).append('<i class="fas fa-circle"></i>');
    }

    //OCULTAR SLIDES Y MOSTRAR EL PRIMERO
    $(nodoSlide).hide();
    $('#slider div:first').show();
    $('.paginacion i:first').css({'color': 'salmon'});

    //EJECUCIÓN FUNCIONES CON CLICK
    $('.paginacion i').click(pulsa_paginacion);
    $(btnNext).click(siguiente);
    $(btnPrev).click(anterior);

    // TEMPORIZADOR
    // ref_interval = setInterval (function(){
    //     siguiente ();
    // },4000);

    //FUNCIONES ------------------------------------
    
    function pulsa_paginacion (){

        let posicion_pag = $(this).index()+1;

        $('#slider div').hide();
        $('#slider div:nth-child('+ posicion_pag +')').fadeIn();
        $('.paginacion i').css({'color': 'white'})
        $(this).css({'color': 'salmon'});

        posicionSlide = posicion_pag; 
    }
    
    function siguiente () {

        // clearInterval(ref_interval);
        // ref_interval = setInterval (function(){
        //     siguiente ();
        // },4000);

        if (posicionSlide >= listaSlides){
            posicionSlide = 1;
            
        }else {
            posicionSlide ++;
        }
       
        $('#slider div').hide();
        $('#slider div:nth-child('+ posicionSlide +')').fadeIn();

        $('.paginacion i').css({'color': 'white'})
        $('.paginacion i:nth-child('+ posicionSlide +')').css({'color': 'salmon'});

    }

    function anterior () {

        if (posicionSlide <= 1){
            posicionSlide = listaSlides;
            
        }else {
            posicionSlide --;
        }

        $('#slider div').hide();
        $('#slider div:nth-child('+ posicionSlide +')').fadeIn();

        $('.paginacion i').css({'color': 'white'})
        $('.paginacion i:nth-child('+ posicionSlide +')').css({'color': 'salmon'});
        $(`.paginacion i:nth-child(${posicionSlide} )`).css({'color': 'salmon'});
    }
});
