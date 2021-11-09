$(document).ready(function () {


     const coders= [ 'Candy', 'Gabrielle', 'Carmen', 'Laura .C', 'Alexia', 
     'Alisa', 'Kristina', 'Helen', 'Ana', 'Anna', 'Yuliya', 'Desiree', 'Laura M.', 'Valentina', 'Gracia', 
     'Joana', 'Faby', 'Marisa', 'Judith', 'Sonia', 'Tamara', 'Rosa', 'Sandra', 'Sara', 'Marta', 'Javi',
     ];

     function pickCoder () {
        let random=  Math.floor((Math.random() * coders.length));
        var randomName=coders[random];
        console.log(randomName);

        coders.forEach( t => 
            $('h2').append(
                `<div class="resultado">${t}</div>`
            )
        );
     
}

$('.start').on('click', pickCoder);

});