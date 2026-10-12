//constantes
const PI: number = 3.1435;
const IVA: number = 15;
const SERVICIO_API: string= "apiService";
const ACTIVE: boolean = true;
console.log("PI:", PI);
console.log("I.V.A:", IVA);
console.log("NOMBRE_DEL_SERVICIO:", SERVICIO_API);
console.log("PRODUCTO_ACTIVO:", ACTIVE);

//variables
// let

let contador: number=0;
console.log(contador);
contador=5;
console.log(contador);
contador++;
console.log(contador);
contador+=5;
console.log(contador);
contador= contador+3;
console.log(contador);
let alumno:string="Pedro Perez";
let caducado: boolean= false;
console.log(alumno);
console.log(caducado);

contador="hffh";

let equipo: string[]=["PIKACHU","CHARMANDER","BULBABSUR"];
console.log(equipo);

let pokemonCapturado: string | null = null;
let pokemonInicial: string | undefined = undefined; 

let experienciaAcumulada: bigint= 98723982737392n;

//tipo symbol
let pokemon1: symbol= Symbol("PIKACHU");
console.log(pokemon1.description);
let pokemon2: symbol= Symbol("PIKACHU");
console.log(pokemon2.description);
console.log(pokemon1 === pokemon2);

let pikachu:{
    nombre: string;
    nivel: number;
    vida: number;
    esLegendario: boolean;
}={
    nombre: "Pikachu",
    nivel: 5,
    vida: 35,
    esLegendario: false
}
console.log(pikachu);