$(document).ready(function () {
    let names = $("#names");


     let coders= [ 'Candy ', 'Gabrielle ', 'Carmen ', 'Laura .C ', 'Alexia ', 
     'Alisa ', 'Kristina ', 'Helen ', 'Ana ', 'Anna ', 'Yuliya ', 'Desiree ', 'Laura M. ', 'Valentina ', 'Gracia ', 
     'Joana ', 'Faby ', 'Marisa ', 'Judith ', 'Sonia ', 'Tamara ', 'Rosa ', 'Sandra ', 'Sara ', 'Marta ',
     ];
     $.each(coders, function(index,value){
        names.append($("<li>"+value+"</li>"))
     });
        
     
     
     

     function pickCoder () {
         
        let random=  Math.floor((Math.random() * coders.length));
        let randomName=coders[random];
        console.log(randomName);
        
        coders.splice(random,1);
        

     
        coders.forEach( t => 
            $('.resultado').html(
                randomName
            )

         ),
         coders.forEach( t => 
            $('#names').html(coders)
         )

        }       
 




$('.start').on('click', pickCoder);







// BORRAR
function clearResult() {
    if(coders.length===0){
        coders=[ 'Candy ', 'Gabrielle ', 'Carmen ', 'Laura .C ', 'Alexia ', 
        'Alisa ', 'Kristina ', 'Helen ', 'Ana ', 'Anna ', 'Yuliya ', 'Desiree ', 'Laura M. ', 'Valentina ', 'Gracia ', 
        'Joana ', 'Faby ', 'Marisa ', 'Judith ', 'Sonia ', 'Tamara ', 'Rosa ', 'Sandra ', 'Sara ', 'Marta ',
        ];
        $('.resultado').html("RESTART");
        $('li').fadeIn();
    }
  


}

$('.start').on("click", clearResult);


});

