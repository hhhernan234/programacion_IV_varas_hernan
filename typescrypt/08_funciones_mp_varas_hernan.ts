
// Funciones simples
// Devolviendo un valor
function sumarEvidencias(evidencia1: number, evidencia2: number): number {
  return evidencia1 + evidencia2;
}

const totalEvidencias = sumarEvidencias(10, 20);
console.log(`Total de evidencias: ${totalEvidencias}`);

// sin devolver un valor
function mostrarComisaria(nombre: string): void {
  console.log(`Comisaría a cargo del inspector Hernan Varas: ${nombre}`);
  const patrullas: string[] = ["Patrulla 01", "Patrulla 02", "Motocicleta 03", "Camioneta 04"];
  for (const patrulla of patrullas) {
    console.log(`Unidad disponible: ${patrulla}`);
  }
}

mostrarComisaria("Comisaría Centro");

// Funciones con parámetros opcionales
function asignarOficial(nombre: string, aniosServicio?: number): void {
  if (aniosServicio) {
    console.log(`Asignando a ${nombre} con ${aniosServicio} años de servicio`);
  } else {
    console.log(`Asignando a ${nombre} sin especificar años de servicio`);
    aniosServicio = 1;
    console.log(`Años de servicio por defecto ${aniosServicio}`);
  }
}

asignarOficial("Hernan Varas", 9);
asignarOficial("Oficial Ramirez");

function asignarOficial2(nombre: string, aniosServicio: number = 1): void {
  console.log(`Asignando a ${nombre} con ${aniosServicio} años de servicio`);
}

asignarOficial2("Hernan Varas", 9);
asignarOficial2("Oficial Ramirez");

// funciones flecha
function elevarPrioridad(prioridad: number): number {
  return prioridad * 2;
}

const elevarPrioridadFlecha = (prioridad: number): number => prioridad * 2;

const prioridadOriginal = 30;
const prioridadElevada = elevarPrioridad(prioridadOriginal);
console.log(`Prioridad original: ${prioridadOriginal}, Prioridad elevada: ${prioridadElevada}`);

const prioridadElevadaFlecha = elevarPrioridadFlecha(prioridadOriginal);
console.log(`Prioridad original: ${prioridadOriginal}, Prioridad elevada (flecha): ${prioridadElevadaFlecha}`);

// FUNCIONES OVERLOADS

function formatear(valor: number): string;
function formatear(valor: string): string;
function formatear(valor: boolean): string;
function formatear(valor: number | string | boolean): string {
  if (typeof valor === "number") {
    return valor.toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  if (typeof valor === "boolean") {
    return valor ? "Si" : "No";
  }
  return `${valor}`;
}

console.log(formatear(123456.789)); // monto de la fianza: "123,456.79"
console.log(formatear(true));       // "Si"
console.log(formatear("activo"));   // "activo"

// Closures

function crearContador(inicio: number = 0) {
  let cuenta = inicio;
  return {
    incrementar: () => ++cuenta,
    decrementar: () => --cuenta,
    valor: () => cuenta,
    resetear: () => { cuenta = inicio; }
  };
}

const evidenciasCaso1 = crearContador();
const evidenciasCaso2 = crearContador(10);

evidenciasCaso1.incrementar();
evidenciasCaso1.incrementar();
evidenciasCaso1.incrementar();
evidenciasCaso2.incrementar();

console.log(`Evidencias caso 1: ${evidenciasCaso1.valor()}`);
console.log(`Evidencias caso 2: ${evidenciasCaso2.valor()}`);

evidenciasCaso1.resetear();
console.log(`Evidencias caso 1 tras resetear: ${evidenciasCaso1.valor()}`);