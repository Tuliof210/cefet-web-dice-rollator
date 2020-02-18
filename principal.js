let dados = document.querySelectorAll('.dado')

let d4 = document.querySelector('#quantidadeD4')
let d6 = document.querySelector('#quantidadeD6')
let d8 = document.querySelector('#quantidadeD8')
let d10 = document.querySelector('#quantidadeD10')
let d12 = document.querySelector('#quantidadeD12')
let d20 = document.querySelector('#quantidadeD20')

let somatorio;
let result;

var rolar = document.querySelector('#rolar')

var exibir = document.querySelector('#recipienteResultados')

rolar.addEventListener('click', function(e) {

    result = '';
    somatorio = 0;

    row(4, d4.value)
    row(6, d6.value)
    row(8, d8.value)
    row(10, d10.value)
    row(12, d12.value)
    row(20, d20.value)

    result = result.trim();
    result += "="
    result = result.replace(' +=', ` = ${somatorio}`)

    exibir.classList.remove('oculto');

    let show = document.querySelector('#resultado').innerHTML = result

    console.log(result)
    console.log(somatorio)
})


function row(max, quant) {

    for (let i = 0; i < quant; i++) {

        let resultado = Math.ceil(Math.random() * max);
        somatorio += resultado;
        result += resultado;
        result += ' + '
    }
}