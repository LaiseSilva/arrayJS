'use strict'

//const numeros = [] cria o array vazio,  
//Qualquer tipo de informação pode ser colocado dentro dele, mesmo que misturadas


const numeros = [20,131,70,279,320]

// PROBLEMA: crescentar 100 a cada elemento


/* Solução Imperativa 
const limite = numeros.length - 1
let numeros100 = []

for(let i=0; i<=limite; i++){
    numeros100[i] = numeros[i] + 100 
}*/

/* Solução Declarativa */

// o MAP ele percorre todo o array, podendo modifcar ou não e retorna um novo array de mesmo tamanho
//Parametros/argumentos do map: 1ºElemento; 2ºíndice, 3º array. A função que recebe os parâmetros

const adicionar100 =(numero) => numero + 100

const numeros100 = numeros.map(adicionar100)

console.log("Números: ", numeros)
console.log("Números mais 100: ",numeros100)

//------PROBLEMA = Criar um novo array com números menores que 100

/*-------Solução imperativa--------
let numerosMenores100 = []
const limite = numeros.length - 1
let cont = 0


for(let i=0; i <= limite; i++){
    if(numeros[i] <= 100){
        numerosMenores100[cont] = numeros[i]
        cont ++
    }
}
    console.log(numerosMenores100)
*/

//------Solução Descritiva-----

//FILTER:  percorre todo o array filtrando dependendo de uma condição e retorna um array de mesmo tamanho ou menor
//* Precisa de um retorno true ou false
//mesmo parâmetros do MAP

const ehMenor100 = (numero) => numero <= 100
const numerosMenores100 = numeros.filter(ehMenor100)
console.log("Números menores que 100: ", numerosMenores100)

// PROBLEMA - SOMAR TODOS OS VALORES

/*-------Solução imperativa--------
let soma = 0
for( let i = 0; i< numeros.length; i++){
    soma = soma + numeros[i]
}

console.log(soma)*/

//------Solução Descritiva-----
//REDUCE - percorre todo o array aplicando uma função (callback) e retorna um único valor
//parametros 1º acumulador, 2º elemento, 3º indice, 4 array
const soma = (acumulador,numero) => acumulador + numero
const total = numeros.reduce(soma,0)

console.log("Soma dos números: ", total)




/******************************************************************************************************/

const elevadoAoQuadrado = (numero) => numero * numero
const numerosAoQuadrado = numeros.map(elevadoAoQuadrado)
console.log("Números elevado ao quadrado: ", numerosAoQuadrado)

const numerosPares = (numero) => numero % 2 == 0
const numerosPar = numeros.filter(numerosPares)
console.log("Números Pares: ", numerosPar)

const mediaNumeros = (acumulador, numero) => acumulador + numero / numeros.length
const media =  numeros.reduce(mediaNumeros, 0)
console.log("Média dos números: ", media)

const numerosImpares = (numero) => numero % 2 == 1
const numerosImpar = numeros.filter(numerosImpares)
console.log("Números Ímpares: ", numerosImpar)

const somaImpares = (acumulador,numero) => acumulador + numero
const totalImpares = numerosImpar.reduce(somaImpares,0)
console.log("Total de ímpares: " + totalImpares)

const desconto = (acumulador, numero) => acumulador + numero * 0.2
const valorDesconto = numeros.reduce(desconto,0)
console.log("Valor com desconto: " + valorDesconto)





