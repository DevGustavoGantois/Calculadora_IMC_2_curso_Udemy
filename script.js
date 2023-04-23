const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector("#peso");// vai me informar quem tá recebendo esse evento. Vai me falar qual evento foi executado na página.
    const inputAltura = e.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso) {
        setResultado('Peso inválido', false);
        return; //Caso o peso for inválido (não for um número) ele irá dar o resultado 'Peso inválido' e return irá servir para retornar somente essa opção parando nela e fazendo a função reiniciar.
    }

    if(!altura) {
        setResultado('Altura inválida', false);
        return;
    }
    
    const imc = getImc(peso, altura);
    const ValorImc = getValorImc(imc);

    const msg = `Seu IMC é ${imc} (${ValorImc}).`

    setResultado(msg,  true);
    //Continuando o código...
});

function getValorImc (imc) {
    const valor = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9) {
        return valor[5];
    } 
    if (imc >= 34.9) {
        return valor[4];
    } 
    if (imc >= 29.9) {
        return valor[3];
    } 
    if (imc >= 24.9) {
        return valor[2];
    } 
    if (imc >= 18.5) {
        return valor[1];
    } 
    if (imc < 18.5) {
        return valor[0];
    }
}


function getImc(peso, altura) {
    const imc = peso / (altura**2);
    return imc.toFixed(2);
}


function CriaParagrafo (className) {
    const p = document.createElement("p");
    return p;
}

function setResultado (msg, isValid) {
    const resposta = document.querySelector('#resposta');
    resposta.innerHTML = ``;


    const p = CriaParagrafo(); {

        if (isValid){

            p.classList.add('paragrafo-resultado')

    } else  {

        p.classList.add('bad');
    }
        p.innerHTML = msg;
        resposta.appendChild(p);
    }

}