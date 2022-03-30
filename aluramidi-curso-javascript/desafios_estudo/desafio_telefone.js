const listaDeTeclas = document.querySelectorAll('.tecla');
const inputTel = document.querySelector('input[type=tel]');
console.log(listaDeTeclas);


for(let contador = 0; contador < listaDeTeclas.length; contador++){

    let tecla = listaDeTeclas[contador];

    tecla.onclick = function() { //função anonima
        inputTel.value = inputTel.value + tecla.value;
    };

    tecla.onkeydown = function(evento) {
        if(evento.code === "Enter" || evento.code === "Space"){
            tecla.classList.add('ativa');
        };

    };

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    };

};

