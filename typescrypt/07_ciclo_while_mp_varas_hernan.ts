
// while
let archivoUsado = 100;
let capacidadArchivo = 200;
while (archivoUsado < capacidadArchivo) {
  console.log(`Archivo de expedientes de Hernan Varas: ${archivoUsado} registros`);
  archivoUsado += 25;
}

let nivel = 1;
while (nivel <= 10) {
  console.log(`Nivel de investigación: ${nivel}`);
  nivel++;
}

let intentos = 0;
let contactados = 0;
while (intentos < 10) {
  intentos++;
  let contacto = Math.random() < 0.5; // Simula contactar al testigo con una probabilidad del 50%
  if (contacto) {
    contactados++;
    console.log(`Llamada ${intentos}: ¡Testigo contactado! Total de testigos: ${contactados}`);
  } else {
    console.log(`Llamada ${intentos}: Sin respuesta. Total de testigos: ${contactados}`);
  }
}

// do while
let rondas = 0;
do {
  rondas++;
  console.log(`Ronda de patrullaje numero: ${rondas}`);
} while (rondas < 5);

interface ExpedienteRevisado {
  numero: number;
  tipo: string;
  gravedad: number;
}

const expedientes: ExpedienteRevisado[] = [
  { numero: 2026001, tipo: "Falta", gravedad: 20 },
  { numero: 2026002, tipo: "Robo", gravedad: 55 },
  { numero: 2026003, tipo: "Homicidio", gravedad: 95 },
  { numero: 2026004, tipo: "Fraude", gravedad: 60 },
];

let indice = 0;
while (indice < expedientes.length) {
  const expediente = expedientes[indice];
  if (!expediente) break;

  if (expediente.tipo === "Falta") {
    indice++;
    continue;
  }

  if (expediente.gravedad > 90) {
    console.log(`Expediente ${expediente.numero} es crítico: se detiene la revisión`);
    break;
  }
  console.log(`Expediente: ${expediente.numero}, Tipo: ${expediente.tipo}, Gravedad: ${expediente.gravedad}`);
  indice++;
}