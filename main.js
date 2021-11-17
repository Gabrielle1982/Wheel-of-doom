$(document).ready(function () {
    // DECLARACION DE NOMBRES
    let names = $("#names");



     let coders= [ 'Candy ', 'Gabrielle ', 'Carmen ', 'Laura .C ', 'Alexia ', 
     'Alisa ', 'Kristina ', 'Helen ', 'Ana ', 'Anna ', 'Yuliya ', 'Desiree ', 'Laura M. ', 'Valentina ', 'Gracia ', 
     'Joana ', 'Faby ', 'Marisa ', 'Judith ', 'Sonia ', 'Tamara ', 'Rosa ', 'Sandra ', 'Sara ', 'Marta ',
     ];

    //  POR CADA RESULTADO, AÑADE UN LI
     $.each(coders, function(index,value){
        names.append($("<li>"+value+"</li>"))
     });
        
    //  FUNCION QUE ELIGE CODER AL AZAR

     function pickCoder () {
         
        let random=  Math.floor((Math.random() * coders.length));
        let randomName=coders[random];
        console.log(randomName);
    // POR CADA RESULTADO, ELIMINA DEL ARRAY
        coders.splice(random,1);
    // POR CADA RESULTADO, PONLO AÑADELO EN EL HTML
        coders.forEach( t => 
            $('.resultado').html(
                randomName)),

        // POR CADA RESULTADO, QUITALO DE LA LISTA EN EL HTML
         coders.forEach( t => 
            $('#names').html(coders)
         )

        }       
// EJECUTA LA FUNCION AL HACER CLICK EN START
$('.start').on('click', pickCoder);

// ///////////////////////////////////////////////////////////////

// FUNCION PARA BORRAR NOMBRES
function clearResult() {
    if(coders.length===0){
        coders=[ 'Candy ', 'Gabrielle ', 'Carmen ', 'Laura .C ', 'Alexia ', 
        'Alisa ', 'Kristina ', 'Helen ', 'Ana ', 'Anna ', 'Yuliya ', 'Desiree ', 'Laura M. ', 'Valentina ', 'Gracia ', 
        'Joana ', 'Faby ', 'Marisa ', 'Judith ', 'Sonia ', 'Tamara ', 'Rosa ', 'Sandra ', 'Sara ', 'Marta ',
        ];
    // CUANDO NO QUEDEN MÁS OPCIONES, DA UN MENSAJE
        $('.resultado').html("Vuelve a empezar");
    // EFECTO FADE PARA LOS NOMBRES
        $('li').fadeIn();
    }
}
// EJECUTA LA FUNCION DE BORRAR AL HACER CLICK EN START
$('.start').on("click", clearResult);



// /////////////////// MODO NAVIDAD
function Navidad () {
let copitos= $('.copitos')
let copitos1= $('.copitos1')

    $("input").on( 'change', function() {
        if( $(".toggle").is(':checked') ) {
            // Hacer algo si el checkbox ha sido seleccionado
            copitos.attr("src", "/img/snwflks-106.gif");
            copitos1.attr("src", "/img/snwflks-106.gif");
            console.log("El checkbox ha sido seleccionado");
        } else {
            // Hacer algo si el checkbox ha sido deseleccionado
            copitos.removeAttr("src", "/img/snwflks-106.gif");
            copitos1.removeAttr("src", "/img/snwflks-106.gif");
            console.log("El checkbox ha sido deseleccionado");
        }
    });
    

}

$(".toggle input[type='checkbox']").on("click", Navidad);
});