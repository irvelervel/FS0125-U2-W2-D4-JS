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
