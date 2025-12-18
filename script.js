/* 
Crea un array composto da 10 automobili. 
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano). 
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto. 
Infine stampa separatamente i 3 array. 
*/
const cars = [
    { marca: "Fiat", modello: "Panda", alimentazione: "benzina" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "diesel" },
    { marca: "BMW", modello: "Serie 3", alimentazione: "diesel" },
    { marca: "Audi", modello: "A4", alimentazione: "benzina" },
    { marca: "Mercedes", modello: "Classe C", alimentazione: "diesel" },
    { marca: "Toyota", modello: "Yaris", alimentazione: "ibrido" },
    { marca: "Ford", modello: "Focus", alimentazione: "gpl" },
    { marca: "Peugeot", modello: "208", alimentazione: "benzina" },
    { marca: "Tesla", modello: "Model 3", alimentazione: "elettrico" },
    { marca: "Volkswagen", modello: "Up!", alimentazione: "metano" }
];

// BENZINA
let benzina = cars.filter(cars => cars.alimentazione === "benzina")

console.log(benzina);


// DIESEL
let diesel = cars.filter(cars => cars.alimentazione === "diesel")

console.log(diesel);


// TUTTE LE ALTRE AUTO
let otherCars = cars.filter(cars => cars.alimentazione !== "diesel" && cars.alimentazione !== "benzina")

console.log(otherCars);








/* 
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
['pippo', 'PLUTO', 'Paperino']; 
*/
const names = ['pippo', 'PLUTO', 'Paperino'];

let capitalizedStrings = names.map((name) => {
    const firstLetter = name[0].toUpperCase();
    const otherLetter = name.substring(1).toLowerCase();
    return firstLetter + otherLetter
})

console.log(capitalizedStrings);

const capitalizedStrings2 = names.map((name) => {
    const minuscolo = name.toLowerCase();
    const maiuscola = minuscolo.charAt(0).toUpperCase() + minuscolo.slice(1);
    return maiuscola;
});

console.log(capitalizedStrings2);







/* 
Crea un array di oggetti che rappresentano delle persone. 
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età. 
*/
const persone = [
    { nome: "Luca", cognome: "Rossi", eta: 18 },
    { nome: "Giulia", cognome: "Bianchi", eta: 34 },
    { nome: "Marco", cognome: "Verdi", eta: 27 },
    { nome: "Sara", cognome: "Neri", eta: 15 },
    { nome: "Francesca", cognome: "Ferrari", eta: 30 },
    { nome: "Paolo", cognome: "Gialli", eta: 27 },
    { nome: "Elena", cognome: "Romano", eta: 11 },
    { nome: "Alessandro", cognome: "Costa", eta: 29 },
    { nome: "Martina", cognome: "Ricci", eta: 26 },
    { nome: "Davide", cognome: "Conti", eta: 13 }
];


const personeGuidatori = persone.map((persona) => {
    return {
        nome: persona.nome,
        cognome: persona.cognome,
        puoGuidare: persona.eta >= 18 ? true : false
    };
}); 
console.log(personeGuidatori);

//ALTRO METODO//
const personeGuidatori2 = persone.map((persona) => {
const {nome, cognome, eta} = persona
const puoGuidare = eta>= 18 ? "può" : "non può"
return `${nome} ${cognome} ${puoGuidare} guidare`
});
console.table(personeGuidatori2);

