const imagens = document.querySelectorAll('.imagem');
const problemas = document.querySelectorAll('.problema');
var index = 0;
var numImagens = 3;

iniciarTemporizador();
// Função que será executada após o tempo definido
function trocarImagem() {
    EsconderImagemAtiva();
    EsconderTestoAtivo();
    imagens[index].classList.add('ativa');
    problemas[index].classList.add('ativo')

    if(index == numImagens - 1){
        index = 0;
    }
    else{
        index += 1;
    }
}

function EsconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function EsconderTestoAtivo(){
    const TextoAtivo = document.querySelector('.ativo');
    TextoAtivo.classList.remove('ativo');
}

// Inicia o temporizador
function iniciarTemporizador() {
    trocarImagem(); // Troca a imagem imediatamente
  
    setInterval(trocarImagem, 20000); // Chama a função trocarImagem a cada 10 segundos
  }