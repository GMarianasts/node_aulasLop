/*function hello(){
    return 'Bom dia!'
}

// const msg = hello();
//console.log(msg);

console.log(hello());
*/

/*function somar(n1, n2){
    const n3 = n1 + n2;
    console.log(`${n1} + ${n2} = ${n3}`)
}

console.log(somar());
*/

/*
function somar(n1 = 0, n2 = 0){
    return n1 + n2
}

console.log(somar(10))
*/

/*
function func(){
    n1 = 8080
}

let n1 = 10
func( )
console.log(n1)
*/

const readline = require('readline-sync');

function somar(n1, n2){
    let n1 = Number(readline.question("Digite a primeira nota: "))
    let n2 = Number(readline.question("Digite a segunda nota"))

    res = n1 + n2
    console.log(res)
}

function subtrair(){
    let n1 = Number(readline.question("Digite a primeira nota: "))
    let n2 = Number(readline.question("Digite a segunda nota"))

    res = n1 - n2
    console.log(res)
}

function divisao(){
    let n1 = Number(readline.question("Digite a primeira nota: "))
    let n2 = Number(readline.question("Digite a segunda nota"))

    res = n1 / n2
    console.log(res)
}

function multi(){
    let n1 = Number(readline.question("Digite a primeira nota: "))
    let n2 = Number(readline.question("Digite a segunda nota"))

    res = n1 * n2
    console.log(res)
}

let obj = Number(readline.question("Escolha uma opção: \n somar(1) \n subtração(2) \n divisão(3) \n multiplicação(4)"));

if(obj == 1){
    somar()
}else if(obj == 2){
    subtrair()
}else if(obj == 3){
    divisao()
}else{
    multi()
}