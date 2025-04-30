// Calculadora da forma do professor

const readline = require('readline-sync');

function entrada(){
    const conta =readline.question("Digite a conta: ").split(" ");
    return conta;
}

function somar(n1, n2){
    return n1 + n2;
}

function subtrair(n1, n2){
    return n1 - n2;
}

function dividir(n1, n2){
    return n1 / n2;
}

function multiplicar(n1, n2){
    return n1 * n2
}

const conta = entrada()
const n1 = Number(conta[0])
const n2 = Number(conta[2])
let res

if(conta[1] == '+'){
    res = somar(n1, n2)
}else if(conta[1] == '-'){
    res = subtrair(n1, n2)
}else if(conta[1] == '/'){
    res = dividir(n1, n2)
}else if(conta[1] == '*'){
    res = multiplicar(n1, n2)
}else{
    console.log('\nOperação invlálida\n')
}