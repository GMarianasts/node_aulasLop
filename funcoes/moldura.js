//Desenha uma moldura em frase

const readline = require('readline-sync')

function barra(qtde){
    for(let i=0; i<qtde+4; i++){
        process.stdout.write(ch)
    }
}

const frase = readline.question('\nDigite uma frase: ')
const ch = '█'

barra(frase.length)
console.log(`\n${ch} ${frase} ${ch}`);
barra(frase.length)