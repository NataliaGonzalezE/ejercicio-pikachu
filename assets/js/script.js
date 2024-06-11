//js nativo

/* document.getElementById('btn-pikachu').addEventListener('click', function(){
    let ojo = document.getElementById('ojoUno');
    let ojoo = document.getElementById('ojoDos');
    let boca = document.getElementById('bocap');
    let brazo = document.getElementById('brazoIz');
    let brazoo = document.getElementById('brazoDe');

    ojo.setAttribute('class', 'ojo-uno position-absolute ojo-movimiento');
    ojoo.setAttribute('class', 'ojo-dos position-absolute ojoo-movimiento');


})*/

//jquery

$('#btn-pikachu').click(function() {
    $('#ojoUno').addClass('ojos-movimiento');
    $('#ojoDos').addClass('ojos-movimiento');
    $('#bocap').addClass('boca-movimiento');
    $('#brazoIz').addClass('brazo-left-movimiento');
    $('#brazoDe').addClass('brazo-right-movimiento');
    $('#cola').addClass('cola-movimiento');
});
  