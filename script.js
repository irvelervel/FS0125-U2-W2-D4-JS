// JS RECAP!

// variabili
// una variabile è un contenitore per un valore

let myVariable = 1
const myConstant = 'STEFANO'

myVariable = 2
// myConstant = 'EPICODE' // <-- errore

// TIPI DI DATO PRIMITIVI
// string ('stefano')
// number (1000)
// boolean (true/false)
// undefined
// null

myVariable = 10
// myVariable = 'ciao' <-- SBAGLIATO

let myName = 'GIORGIO'
let partialName = myName.slice(0, 3) // 'GIO'

console.log(partialName)

// TIPI DI DATO NON PRIMITIVI
// ARRAY
// un array è una collezione (lista) di valori
const myArray = [1, 3, 5, 7, 10]
const myArray2 = ['s', 't', 'e', 'f']
const myArray3 = [['s'], ['t'], ['e'], ['f']]

// inserimento di elementi
myArray.unshift(0) // in cima all'array
myArray.push(12) // in fondo all'array
myArray.splice(5, 0, 9) // ho inserito dopo il 7 un 9
console.log('MYARRAY', myArray) // verifico i risultati

// rimozione di elementi in un array
myArray.shift() // rimuove il primo
myArray.pop() // rimuove l'ultimo
myArray.splice(4, 1) // alla posizione 4 ne rimuovo 1 -> tolgo il 9
console.log('MYARRAY', myArray) // verifico i risultati

// ogni array è dotato di LUNGHEZZA (numero di elementi)
myArray.length

// per recuperare un elemento in un array si fa riferimento alla sua POSIZIONE
// detta INDICE
// gli indici di riferimento per le posizioni degli elementi in un array
// partono dallo 0 in JS!
// di conseguenza, il primo elemento in un array avrà SEMPRE indice 0 mentre
// l'ultimo elemento di un array avrà sempre posizione "length - 1"
// grazie agli indici è possibile recuperare elementi singoli dell'array
myArray[0] // -> numero 1
myArray[myArray.length - 1] // numero 10

// OGGETTI
// gli oggetti servono a memorizzare diversi valori in un colpo solo ma
// vengono organizzati in COPPIE chiave:valore
// una coppia chiave:valore di un oggetto viene chiamata PROPRIETÀ
// un oggetto può avere INFINITE coppie

const myObject = {
  firstName: 'Stefano',
  lastName: 'Casasola',
  teacher: true,
  age: 19,
  skills: ['HTML', 'JS'], // JS -> myObject.skills[1]
  canDrive: true,
  area: {
    region: 'FVG',
  },
}

// NAVIGAZIONE DEGLI OGGETTI
// DUE TECNICHE:
// a) DOT NOTATION
myObject.lastName // 'Casasola'

// b) SQUARE BRACKETS NOTATION
myObject['lastName'] // 'Casasola'

const property = 'age'
myObject.property // undefined
myObject[property] // 19, sarebbe come dire myObject['age']

// modificare una proprietà
myObject.canDrive = false

// aggiungere proprietà
myObject.hasTwoCats = true

// eliminare una proprietà
delete myObject.area

// ATTENZIONE A COPIARE IL VALORE DELLE VARIABILI
let a = 10
let b = a // b vale 10
a = 20 // b è rimasto 10

let objA = {
  a: 10,
}

let objB = objA // objB è diventato un oggetto con a:10
objA.a = 20
console.log(objB.a) // 20

// quindi, per creare VERE copie di array e oggetti bisogna utilizzar
// tecniche specifiche:

let objC = { ...objA } // lo spread operator (...) creano una COPIA DELLE
// PROPRIETÀ di un oggetto e ci permette di trasportarle altrove

let arrA = [1, 2, 3]
let arrB = [...arrA]

arrA.push(4)
console.log(arrB.length) // 3

// BREAK

// LOGICA CONDIZIONALE
let total = 40

const fixedShippingCost = 5
const freeShippingThreshold = 50

if (total >= freeShippingThreshold) {
  //   alert('Per te la spedizione è gratuita')
} else {
  // vado ad aggiungere le spedizioni al totale
  total = total + fixedShippingCost // 45
  //   alert('Il costo totale è' + total)
}

// TERNARY OPERATOR
// const ternaryTotal = condizione ? se sì : se no
const ternaryTotal =
  total >= freeShippingThreshold
    ? total // se sì
    : total + fixedShippingCost // se no

// le condizioni inserite in un blocco if possono essere singole (come in questo
// caso) oppure combinate: le condizioni combinate possono richiedere la veridicità
// di ogni parte coinvolta per ritornare true (es. "vado al mare se fa bel tempo
// E non ho niente da fare") oppure possono richiedere la veridicità anche di
// UNA sola delle parti coinvolte (es. "vado al cinema se è gratis O se tu vieni
// con me").

// AND -> && -> TUTTE LE CONDIZIONI COINVOLTE DEVONO ESSERE TRUE
// OR -> || -> BASTA CHE UNA CONDIZIONE COINVOLTA SIA TRUE
// NOT -> ! -> INVERTE IL RISULTATO DI UNA CONDIZIONE

let vadoAlMare
const faBelTempo = true
const hoTempoLibero = true

if (faBelTempo && hoTempoLibero) {
  vadoAlMare = true
} else {
  vadoAlMare = false
}

let vadoAlCinema
const eGratis = false
const vieniConMe = true
const seiStefano = true

if (eGratis || (vieniConMe && seiStefano)) {
  vadoAlCinema = true
} else {
  vadoAlCinema = false
}

// TRUTHY E FALSY
if (myName) {
  // ci sono entrato!
}

// TUTTI i valori in JS sono truthy a parte:
// false
// 0
// -0
// NaN
// undefined
// null
// '' <-- stringa vuota

// ---
// CICLI
// un CICLO è una struttura nella programmazione che serve a RIPETERE
// l'esecuzione di un certo blocco di codice un numero PREDETERMINATO o
// NON PREDETERMINATO di volte!

// NUMERO NON PREDETERMINATO DI VOLTE (while, do-while)
// es. WHILE

let rand = 0

let counter = 0

while (rand < 8) {
  rand = Math.floor(Math.random() * 10) // da 0 a 9
  counter++
}

console.log('CI SONO VOLUTE ' + counter + ' VOLTE')

// NUMERO PREDETERMINATO DI VOLTE (for)
// un ciclo FOR tiene traccia con un contatore del numero di esecuzioni
// del loop, ed esce automaticamente una volta raggiunto il limite prestabliito

for (let i = 0; i < 10; i++) {
  // 10 VOLTE
  // la i cambia valore ad ogni volta
  // 0
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  // 8
  // 9
  console.log('i', i)
}

const arr = ['stefano', 'giacomo', 'vittoria', 'giulia']

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

arr.forEach((element, i) => {
  // element è stefano al primo giro
  // element è giacomo al secondo giro
  // element è vittoria al terzo giro
  // element è giulia al quarto giro
  console.log('ELEMENT', element, 'i', i)
})

const objArray = [
  {
    firstName: 'Gigio',
  },
  {
    firstName: 'Sbirulino',
  },
  {
    firstName: 'Mario',
  },
]

objArray.forEach((obj, i) => {
  //   console.log('OBJ', obj, i)
  console.log(obj.firstName.toLowerCase().includes('m'))
})

objArray.forEach((obj, i) => {
  // vuoi console loggare solo gli elementi con posizione dispari
  if (i % 2 !== 0) {
    console.log(obj)
  }
})

// FUNZIONI
// una funzione è un blocco di codice riutilizzabile.

// le funzioni prima vanno dichiarate, e poi vanno utilizzate (invocate)

const bark = function () {
  // il codice inserito qui dentro verrà eseguito ogni volta che
  // la funzione verrà invocata
  let result = 0
  result = result + Math.random()
  alert(result)
}

// bark()
// bark()

// una funzione eseguirà sempre lo stesso blocco di istruzioni
const sum = function () {
  let somma = 5 + 98 // 103
  console.log('somma', somma)
}

sum()

// PARAMETRI

const specialSum = function (n1, n2 = 0) {
  let somma = n1 + n2
  console.log('SOMMA', somma)
}

specialSum(55, 100)
specialSum(155, 10)

specialSum(30)

// VALORI DI RITORNO
const sumWithReturn = function () {
  let somma = 5 + 98 // 103
  console.log('somma', somma)
  return somma
}

console.log(sumWithReturn() + 2)

const function1 = function (stringa) {
  return stringa.toUpperCase()
}

const function2 = function (stringa) {
  return 'Hello, ' + stringa
}

const str1 = 'stefano'

function1(str1)
function2(str1)

const result = function2(function1(str1)) // 'Hello, STEFANO'
console.log(result)

const result2 = function1(function2(str1)) // 'HELLO, STEFANO'

// FUNZIONI FRECCIA
const gigio = (str1) => {
  return str1.toUpperCase()
}

// una funzione freccia che semplicemente ritorna un valore, può fare a meno
// contemporanemente la parola return e le graffe

const gigio2 = (str1) => str1.toUpperCase()

// gigio e gigio2 sono identiche nel funzionamento
gigio2('stefano') // 'STEFANO'

// la parola "this" all'interno di una funzione freccia potreste ottenere
// un risultato diverso dalla parola "this" in una normale funzione anonima
