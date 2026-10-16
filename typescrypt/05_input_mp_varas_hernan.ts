export {};

let delito = prompt("Ingrese el tipo de delito (Robo, Homicidio, Fraude, Cibercrimen, Secuestro):");
let edad = Number(prompt("Ingrese la edad del sospechoso:"));
let evidencias = Number(prompt("Ingrese el nivel de evidencia del expediente (0-100):"));

if (delito === "Robo" || delito === "Homicidio" || delito === "Fraude" || delito === "Cibercrimen" || delito === "Secuestro") {
  if (evidencias >= 0 && evidencias <= 100) {
    if (edad >= 18 && evidencias >= 50) {
      console.log(`Expediente de Hernan Varas: ${delito}, sospechoso de ${edad} años, evidencia: ${evidencias}. Se puede solicitar captura.`);
    } else {
      console.log(`Sospechoso menor de edad o evidencia insuficiente para el delito de ${delito}.`);
    }
  } else {
    console.log("El nivel de evidencia debe estar entre 0 y 100.");
  }
} else {
  console.log("Delito desconocido.");
}