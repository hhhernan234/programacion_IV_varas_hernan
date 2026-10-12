// ciclo for
for (let i = 0; i < 5; i+=5) {
  console.log(`Entrenamiento jedi: ${i}`);
}
for (let i = 40; i < 0; i-=5) {
  console.log(`Entrenamiento jedi: ${i}`);
}

for (let i = 40; i > 0; i-=5) {
  console.log(`Entrenamiento jedi: ${i}`);
if (i === 20) {
  console.log("Entrenamiento terminado");
  break;
}
if (i === 30) {
    console.log("Entrenamiento interrumpido");
    continue;
}
console.log(`Entrenamiento jedi: ${i}`);
}


// for of

const personajes:string[] = ["Luke Skywalker", "Darth Vader", "Leia Organa", "Han Solo", "Yoda"];
for(let i=0; i < personajes.length; i++) {
  console.log(`Personaje: ${personajes[i]}`);
}

for (const personaje of personajes) {
  console.log(`Personaje: ${personaje}`);
}

const cineMovie: string = "Star Wars: A New Hope";
for (const letra of cineMovie) {
  console.log(`Letra: ${letra}`);
}
interface Jedi {
  nombre: string;
  nivelFuerza: number;
  tieneSable: boolean;
}

const jedis: Jedi[] = [
  { nombre: "Luke Skywalker", nivelFuerza: 90, tieneSable: true },
  { nombre: "Darth Vader", nivelFuerza: 95, tieneSable: true },
  { nombre: "Leia Organa", nivelFuerza: 80, tieneSable: false },
  { nombre: "Han Solo", nivelFuerza: 70, tieneSable: false },
  { nombre: "Yoda", nivelFuerza: 100, tieneSable: true },
];

for (const jedi of jedis) {
  console.log(`Nombre: ${jedi.nombre}, Nivel de Fuerza: ${jedi.nivelFuerza}, Tiene Sable: ${jedi.tieneSable}`);
}

interface Nave {
  nombre: string;
  tipo: string;
  velocidadMaxima: number;
}

const naves: Nave[] = [
  { nombre: "X-Wing", tipo: "Caza estelar", velocidadMaxima: 1050 },
  { nombre: "TIE Fighter", tipo: "Caza estelar", velocidadMaxima: 1200 },
  { nombre: "Millennium Falcon", tipo: "Carguero ligero", velocidadMaxima: 1050 },
  { nombre: "Star Destroyer", tipo: "Destructor estelar", velocidadMaxima: 975 },
];

for (const nave of naves) {
  console.log(`Nombre: ${nave.nombre}, Tipo: ${nave.tipo}, Velocidad Máxima: ${nave.velocidadMaxima}`);
}

const planetas: Record<string, number>= {
  "Tatooine": 1000,
  "Hoth": 500,
  "Endor": 800
}

for (const planeta in planetas) {
  console.log(`Planeta: ${planeta}, Población: ${planetas[planeta]}`);
}


const criaturasStarWars:string[] = ["Wampa", "Tauntaun", "Rancor", "Sarlacc", "Ewok"];
criaturasStarWars.forEach((criatura, index) => {
  console.log(`Criatura: ${index+1} - ${criatura}`);
});

criaturasStarWars.map((criatura, index) => {
  console.log(`Criatura: ${index+1} - ${criatura}`);
  return criatura;
});