// Escreva uma funcao chamada ePaisagem que
// recebe dois argumentos, largura e altura
// de uma imagem (number)
// returne true se a imagem estiver no modo paisagem


function ePaisagem(largura, altura) {
    return largura >= altura;
}

// const paisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1080,1920));