$(document).ready(function () {


     const coders= [ 'Candy', 'Gabrielle', 'Carmen', 'Laura .C', 'Alexia', 
     'Alisa', 'Kristina', 'Helen', 'Ana', 'Anna', 'Yuliya', 'Desiree', 'Laura M.', 'Valentina', 'Gracia', 
     'Joana', 'Faby', 'Marisa', 'Judith', 'Sonia', 'Tamara', 'Rosa', 'Sandra', 'Sara', 'Marta',
     ];

     function pickCoder () {
        let random=  Math.floor((Math.random() * coders.length));
        var randomName=coders[random];
        console.log(randomName);

        coders.forEach( t => 
            $('.resultado').html(
                randomName
            )
        );
     
}

$('.start').on('click', pickCoder);

});