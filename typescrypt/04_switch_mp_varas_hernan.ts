type Delito =
  | "Robo"
  | "Homicidio"
  | "Fraude"
  | "Cibercrimen"
  | "Secuestro";

let delito: Delito = "Fraude";

switch (delito) {
  case "Robo":
    console.log("Robo: pasa a Delitos contra la Propiedad");
    break;
  case "Homicidio":
    console.log("Homicidio: pasa a la Unidad de Homicidios");
    break;
  case "Fraude":
    console.log("Fraude: pasa a Delitos Económicos");
    break;
  case "Cibercrimen":
    console.log("Cibercrimen: pasa a Delitos Informáticos");
    break;
  case "Secuestro":
    console.log("Secuestro: pasa a la Unidad Antisecuestros");
    break;
  default:
    console.log("Delito desconocido");
}


type Oficiales = "Varas" | "Ramirez" | "Torres";

let oficial: Oficiales = "Varas";
let aniosServicio: number = 100;
let tieneOrdenJudicial: boolean = true;

switch (oficial) {
  case 'Varas':
    if (aniosServicio > 80 && tieneOrdenJudicial) {
      console.log("El inspector Varas puede dirigir el allanamiento");
    } else {
      console.log("El inspector Varas no puede dirigir el allanamiento");
    }
    break;
  case 'Ramirez':
    if (aniosServicio > 70 && tieneOrdenJudicial) {
      console.log("El oficial Ramirez puede dirigir el allanamiento");
    } else {
      console.log("El oficial Ramirez no puede dirigir el allanamiento");
    }
    break;
  case 'Torres':
    if (aniosServicio > 90 && tieneOrdenJudicial) {
      console.log("El oficial Torres puede dirigir el allanamiento");
    } else {
      console.log("El oficial Torres no puede dirigir el allanamiento");
    }
    break;
  default:
    console.log("Oficial desconocido");
}