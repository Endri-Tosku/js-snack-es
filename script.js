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


let benzina = cars.filter(cars => cars.alimentazione === "benzina")

console.log(benzina);


