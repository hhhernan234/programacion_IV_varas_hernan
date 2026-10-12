//Funciones simples
//Devolviendo un valor
function sumarCreditos(credito1: number, credito2: number): number {
  return credito1 + credito2;
}

const totalCreditos = sumarCreditos(100, 200);
console.log(`Total de créditos: ${totalCreditos}`);

//sin devolver un valor
function mostrarCentroDeEntrenamiento(nombre: string): void {
  console.log(`Centro de entrenamiento Jedi: ${nombre}`);
  const naves: string[] = ["X-Wing", "TIE Fighter", "Millennium Falcon", "Star Destroyer"];
  for (const nave of naves) {
    console.log(`Nave disponible: ${nave}`);
  }
}

mostrarCentroDeEntrenamiento("Templo Jedi");

//Funciones con parámetros opcionales
function entrenarJedi(nombre: string, nivelFuerza?: number): void {
  if (nivelFuerza) {
    console.log(`Entrenando a ${nombre} con nivel de fuerza ${nivelFuerza}`);
  } else {
    console.log(`Entrenando a ${nombre} sin especificar nivel de fuerza`);
    nivelFuerza=1;
    console.log(`Nivel de fuerza por defecto ${nivelFuerza}`);
  }
}

entrenarJedi("Luke Skywalker", 90);
entrenarJedi("Leia Organa");

function entrenarJedi2(nombre: string, nivelFuerza: number=1): void {
    console.log(`Entrenando a ${nombre} con nivel de fuerza ${nivelFuerza}`);
}

entrenarJedi2("Luke Skywalker", 90);
entrenarJedi2("Leia Organa");

//funciones flecha
function potenciarFuerza(fuerza: number): number {
  return fuerza * 2;
}

const potenciarFuerzaFlecha = (fuerza: number): number => fuerza * 2;

const fuerzaOriginal = 50;
const fuerzaPotenciada = potenciarFuerza(fuerzaOriginal);
console.log(`Fuerza original: ${fuerzaOriginal}, Fuerza potenciada: ${fuerzaPotenciada}`);

const fuerzaPotenciadaFlecha = potenciarFuerzaFlecha(fuerzaOriginal);
console.log(`Fuerza original: ${fuerzaOriginal}, Fuerza potenciada (flecha): ${fuerzaPotenciadaFlecha}`);