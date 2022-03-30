
function tocaSom(seletorAudio) {

   const elemento = document.querySelector(seletorAudio);

   if (elemento != null && elemento.localName === 'audio'){
    elemento.play();
   } else {
       console.log('Elemento não encontrado ou seletor inválido.');
   };
};


const listaDeTeclas = document.querySelectorAll('.tecla'); //cria uma lista de elementos que possuem a mesma classe(.tecla) e atribui a uma referencia, nesse casso, uma lista com todas as teclas de som
const listaDeSons = document.querySelectorAll('.som');
//listaDeTeclas[0].onclick = tocaSomPom;

//loop para abilitar todas as teclas com seus respectivos sons.
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    let tecla = listaDeTeclas[contador]; // referencia para tag de cada tecla do MIDI atráves de um contador

    let instrumento = tecla.classList[1]; // referencia para cada nome do instrumento segundo a classe desses nomes dentro da tag de cada tecla dele

    let idAudio = `#som_${instrumento}`; //template string - concatena strings - cria id do audio de cada instrumento

    tecla.onclick = function () { //fução anonima
        tocaSom(idAudio); //chama função que atribui som a cada tecla do instrumento e faz tocar ela ao usuário clicar
    };  

    tecla.onkeydown = function(evento) { //quando a tecla desejada estiver sendo apertada

        if ( evento.code === 'Space'  || (evento.code === 'Enter')){ // se o código do evento for igual a tecla Space ou Enter, sendo apertada, entao:
            tecla.classList.add('ativa'); //adiciona a classe ativa na tecla desejada
        };
    };

    tecla.onkeyup = function() { //quando a tecla desejada não estiver sendo apertada
        tecla.classList.remove('ativa'); //remove a classe ativa na tecla desejada
    };
};


//document.querySelector('.tecla_pom').onclick = tocaSomPom;

/*
function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
}

function tocaSomTim() {
    document.querySelector('#som_tecla_tim').play();
}

function tocaSomPuff() {
    document.querySelector('#som_tecla_puff').play();
}

function tocaSomSplash() {
    document.querySelector('#som_tecla_splash').play();
}

function tocaSomToim() {
    document.querySelector('#som_tecla_toim').play();
}

function tocaSomPsh() {
    document.querySelector('#som_tecla_psh').play();
}

function tocaSomTic() {
    document.querySelector('#som_tecla_tic').play();
}

function tocaSomTom() {
    document.querySelector('#som_tecla_tom').play();
}


document.querySelector('.tecla_clap').onclick = tocaSomClap;

document.querySelector('.tecla_tim').onclick = tocaSomTim;

document.querySelector('.tecla_puff').onclick = tocaSomPuff;

document.querySelector('.tecla_splash').onclick = tocaSomSplash;

document.querySelector('.tecla_toim').onclick = tocaSomToim;

document.querySelector('.tecla_psh').onclick = tocaSomPsh;

document.querySelector('.tecla_tic').onclick = tocaSomTic;

document.querySelector('.tecla_tom').onclick = tocaSomTom;

*/

