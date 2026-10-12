// Variables con tipos explícitos
const oficial: string = "Hernan Varas";
const rango: string = "Inspector";
let numeroExpediente: number = 2026001;
let delito: string = "Robo agravado";
let esUrgente: boolean = true;
let cantidadEvidencias: number = 4;

// Arreglos y objeto
const sospechosos: string[] = ["Carlos Pérez", "Luis Gómez"];

interface Expediente {
  numero: number;
  oficial: string;
  delito: string;
  abierto: boolean;
}

const expediente: Expediente = {
  numero: numeroExpediente,
  oficial: oficial,
  delito: delito,
  abierto: true,
};

console.log(`Oficial a cargo: ${rango} ${oficial}`);
console.log(`Expediente N° ${numeroExpediente} - ${delito}`);
console.log(`¿Es urgente?: ${esUrgente}`);
console.log(`Evidencias recolectadas: ${cantidadEvidencias}`);
console.log(`Sospechosos: ${sospechosos.join(", ")}`);
console.log("Objeto expediente:", expediente);

// Modificar variables
cantidadEvidencias = cantidadEvidencias + 2;
console.log(`Evidencias actualizadas: ${cantidadEvidencias}`);