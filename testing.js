const chai = window.chai
const expect = chai.expect


describe('Wheel of Doom', () => {

    let coders = ['Candy ', 'Gabrielle ', 'Carmen ', 'Laura .C ', 'Alexia ',
        'Alisa ', 'Kristina ', 'Helen ', 'Ana ', 'Anna ', 'Yuliya ', 'Desiree ', 'Laura M. ', 'Valentina ', 'Gracia ',
        'Joana ', 'Faby ', 'Marisa ', 'Judith ', 'Sonia ', 'Tamara ', 'Rosa ', 'Sandra ', 'Sara ', 'Marta ',
    ];
    let random = 1;

    let coder = randomName(coders, random);


    expect(coder).to.equal("Gabrielle")
    expect(coders).to.have.same.members(['Candy ', 'Carmen ', 'Laura .C ', 'Alexia ',
        'Alisa ', 'Kristina ', 'Helen ', 'Ana ', 'Anna ', 'Yuliya ', 'Desiree ', 'Laura M. ', 'Valentina ', 'Gracia ',
        'Joana ', 'Faby ', 'Marisa ', 'Judith ', 'Sonia ', 'Tamara ', 'Rosa ', 'Sandra ', 'Sara ', 'Marta ',
    ])


})