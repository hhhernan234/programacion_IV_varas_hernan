let memoriaDroide = 1024;
let memoriaDroideUsada = 2048;
while (memoriaDroide < memoriaDroideUsada) {
  console.log(`Memoria del droide: ${memoriaDroide}MB`);
  memoriaDroide += 256;
}

let nivel = 1;
while (nivel <= 10) {
  console.log(`Nivel de droide: ${nivel}`);
  nivel++;
}

let disparos = 0;
let aciertos= 0;
while (disparos < 10) {
  disparos++;
  let acierto = Math.random() < 0.5; // Simula un acierto con una probabilidad del 50%
  if (acierto) {
    aciertos++;
    console.log(`Disparo ${disparos}: ¡Acierto! Total de aciertos: ${aciertos}`);
  } else {
    console.log(`Disparo ${disparos}: Fallo. Total de aciertos: ${aciertos}`);
  }
}

let guerras = 0;
do {
    guerras++;
    console.log(`Guerras numero: ${guerras}`);
} while (guerras < 5);

interface Nave {
  nombre: string;
  tipo: string;
  velocidad: number;
}

const navesEscaneadas: Nave[] = [
  { nombre: "X-Wing", tipo: "Caza estelar", velocidad: 1550 },
  { nombre: "TIE Fighter", tipo: "Caza estelar", velocidad: 1200 },
  { nombre: "Millennium Falcon", tipo: "Carguero ligero", velocidad: 1050 },
  { nombre: "Star Destroyer", tipo: "Destructor estelar", velocidad: 975 },
];

let indice = 0;
while (indice < navesEscaneadas.length) {
  const nave = navesEscaneadas[indice];
  if(nave?.tipo === "Caza estelar") {
    indice++;
    continue;
  }

  if(nave?.velocidad > 1000) {
    break;
  }
  console.log(`Nave: ${nave.nombre}, Tipo: ${nave.tipo}, Velocidad: ${nave.velocidad}`);
  indice++;
}