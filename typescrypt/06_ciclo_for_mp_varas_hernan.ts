
// ciclo for
for (let i = 0; i <= 20; i += 5) {
  console.log(`Patrullaje del inspector Hernan Varas: ${i} minutos`);
}
for (let i = 40; i > 0; i -= 10) {
  console.log(`Cuenta regresiva del operativo: ${i}`);
}

for (let i = 40; i > 0; i -= 5) {
  if (i === 30) {
    console.log("Interrogatorio interrumpido");
    continue;
  }
  if (i === 20) {
    console.log("Interrogatorio terminado");
    break;
  }
  console.log(`Interrogatorio al sospechoso: ${i} minutos restantes`);
}


// for of

const sospechosos: string[] = ["Carlos Pérez", "Luis Gómez", "Ana Torres", "Mario Ríos", "Elena Cruz"];
for (let i = 0; i < sospechosos.length; i++) {
  console.log(`Sospechoso: ${sospechosos[i]}`);
}

for (const sospechoso of sospechosos) {
  console.log(`Sospechoso: ${sospechoso}`);
}

const delitoPrincipal: string = "Robo agravado";
for (const letra of delitoPrincipal) {
  console.log(`Letra: ${letra}`);
}

interface Detenido {
  nombre: string;
  nivelPeligrosidad: number;
  tieneAntecedentes: boolean;
}

const detenidos: Detenido[] = [
  { nombre: "Carlos Pérez", nivelPeligrosidad: 90, tieneAntecedentes: true },
  { nombre: "Luis Gómez", nivelPeligrosidad: 95, tieneAntecedentes: true },
  { nombre: "Ana Torres", nivelPeligrosidad: 80, tieneAntecedentes: false },
  { nombre: "Mario Ríos", nivelPeligrosidad: 70, tieneAntecedentes: false },
  { nombre: "Elena Cruz", nivelPeligrosidad: 100, tieneAntecedentes: true },
];

for (const detenido of detenidos) {
  console.log(`Nombre: ${detenido.nombre}, Peligrosidad: ${detenido.nivelPeligrosidad}, Antecedentes: ${detenido.tieneAntecedentes}`);
}

interface Vehiculo {
  placa: string;
  tipo: string;
  velocidadMaxima: number;
}

const vehiculos: Vehiculo[] = [
  { placa: "PBA-1234", tipo: "Patrulla", velocidadMaxima: 180 },
  { placa: "PCD-5678", tipo: "Motocicleta", velocidadMaxima: 200 },
  { placa: "PEF-9012", tipo: "Camioneta", velocidadMaxima: 160 },
  { placa: "PGH-3456", tipo: "Camión blindado", velocidadMaxima: 110 },
];

for (const vehiculo of vehiculos) {
  console.log(`Placa: ${vehiculo.placa}, Tipo: ${vehiculo.tipo}, Velocidad Máxima: ${vehiculo.velocidadMaxima}`);
}

const casosPorComisaria: Record<string, number> = {
  "Comisaría Norte": 120,
  "Comisaría Centro": 250,
  "Comisaría Sur": 80,
};

for (const comisaria in casosPorComisaria) {
  console.log(`Comisaría: ${comisaria}, Casos abiertos: ${casosPorComisaria[comisaria]}`);
}


const delitos: string[] = ["Robo", "Homicidio", "Fraude", "Cibercrimen", "Secuestro"];
delitos.forEach((delito, index) => {
  console.log(`Delito: ${index + 1} - ${delito}`);
});

delitos.map((delito, index) => {
  console.log(`Delito: ${index + 1} - ${delito}`);
  return delito;
});