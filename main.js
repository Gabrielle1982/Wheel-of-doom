function pickCoder() {

    let random = Math.floor((Math.random() * coders.length));
    let randomName = coders[random];
    console.log(randomName);


}
let coders = ['Candy ', 'Gabrielle ', 'Carmen ', 'Laura .C ', 'Alexia ',
    'Alisa ', 'Kristina ', 'Helen ', 'Ana ', 'Anna ', 'Yuliya ', 'Desiree ', 'Laura M. ', 'Valentina ', 'Gracia ',
    'Joana ', 'Faby ', 'Marisa ', 'Judith ', 'Sonia ', 'Tamara ', 'Rosa ', 'Sandra ', 'Sara ', 'Marta ',
];

let random = Math.floor((Math.random() * coders.length));







$(document).ready(function() {
    // DECLARACION DE NOMBRES
    let names = $("#names");



    let coders = ['Candy ', 'Gabrielle ', 'Carmen ', 'Laura .C ', 'Alexia ',
        'Alisa ', 'Kristina ', 'Helen ', 'Ana ', 'Anna ', 'Yuliya ', 'Desiree ', 'Laura M. ', 'Valentina ', 'Gracia ',
        'Joana ', 'Faby ', 'Marisa ', 'Judith ', 'Sonia ', 'Tamara ', 'Rosa ', 'Sandra ', 'Sara ', 'Marta ',
    ];


    //  POR CADA RESULTADO, AÑADE UN LI
    $.each(coders, function(index, value) {
        names.append($("<li>" + value + "</li>"))
    });

    //  FUNCION QUE ELIGE CODER AL AZAR

    function pickCoder() {

        let random = Math.floor((Math.random() * coders.length));
        let randomName = coders[random];
        console.log(randomName);
        // POR CADA RESULTADO, ELIMINA DEL ARRAY
        coders.splice(random, 1);
        // POR CADA RESULTADO, PONLO AÑADELO EN EL HTML
        coders.forEach(t =>
                $('.resultado').html(
                    randomName)),

            $('.resultado').show();

        // POR CADA RESULTADO, QUITALO DE LA LISTA EN EL HTML
        coders.forEach(t =>
            $('#names').html(coders)
        )

    }
    $('.restart').hide();
    $('#names').show();

    // EJECUTA LA FUNCION AL HACER CLICK EN START
    $('.start').on('click', pickCoder);

    // ///////////////////////////////////////////////////////////////

    // FUNCION PARA BORRAR NOMBRES
    function clearResult() {
        if (coders.length === 0) {
            coders = ['Candy ', 'Gabrielle ', 'Carmen ', 'Laura .C ', 'Alexia ',
                'Alisa ', 'Kristina ', 'Helen ', 'Ana ', 'Anna ', 'Yuliya ', 'Desiree ', 'Laura M. ', 'Valentina ', 'Gracia ',
                'Joana ', 'Faby ', 'Marisa ', 'Judith ', 'Sonia ', 'Tamara ', 'Rosa ', 'Sandra ', 'Sara ', 'Marta ',
            ];
            $('#names').hide();
            // CUANDO NO QUEDEN MÁS OPCIONES, DA UN MENSAJE

            $('.resultado').html("Game Over");
            $('.resultado').show();
            $('.start').hide();
            $('.restart').show();



            // EFECTO FADE PARA LOS NOMBRES

        } else { $('#names').show(); }
    }


    // EJECUTA LA FUNCION DE BORRAR AL HACER CLICK EN START
    $('.start').on("click", clearResult);

    function reset() {




        $('.start').show();
        $('.restart').hide();
        $('.resultado').hide();


    }

    $('.restart').on("click", reset);



    // /////////////////// MODO NAVIDAD
    function Navidad() {
        let copitos = $('.copitos')
        let copitos1 = $('.copitos1')
        let drFacilier = $('.dr-facilier')
        let source = '/img/snwflks-106.gif'

        $("input").on('change', function() {
            if ($(".toggle").is(':checked')) {
                // Hacer algo si el checkbox ha sido seleccionado
                copitos.attr("src", source);
                copitos1.attr("src", source);
                drFacilier.attr("src", "/img/dr.facilitier-navideño.png")
                copitos.css("background-image", "url(" + source + ")");
                copitos1.css("background-image", "url(" + source + ")");
                copitos.css("width", "100%")
                copitos1.css("width", "100%")
                console.log("El checkbox ha sido seleccionado");
            } else {
                // Hacer algo si el checkbox ha sido deseleccionado
                copitos.removeAttr("src", "/img/snwflks-106.gif");
                copitos1.removeAttr("src", "/img/snwflks-106.gif");
                copitos.removeAttr("style");
                copitos1.removeAttr("style")
                drFacilier.attr("src", "/img/dr.facilitier.png")


                console.log("El checkbox ha sido deseleccionado");
            }
        });


    }

    $(".toggle input[type='checkbox']").on("click", Navidad);
});