
type ID = string | number;
type apellido = string;
type Coordenadas = [number, number];
type Punto = {
    x: number;
    y: number;
}

const origen: Punto = { x: 0, y: 0 };
const id: ID = 2026001;
const id2: ID = "exp-001";
const apellidoOficial: apellido = "Varas";
const escenaDelCrimen: Coordenadas = [-0.1807, -78.4678];

type EscenaDelCrimen = Punto & {
    z: number; // piso del edificio
}

const escena: EscenaDelCrimen = { x: 10, y: 25, z: 3 };

interface Persona {
    readonly id: number;
    nombre: string;
    email: string;
    foto?: string;
}

interface Detective extends Persona {
    cargo: string;
}

const p: Persona = {
    id: 1,
    nombre: "Carlos Pérez",
    email: "carlos@gmail.com"
};

const p2: Persona = {
    id: 2,
    nombre: "Luis Gómez",
    email: "luis@gmail.com",
    foto: "luis.png"
}

console.log(p);
console.log(p2);

const inspector: Detective = {
    id: 3,
    nombre: "Hernan Varas",
    email: "hernan.varas@policia.gob",
    cargo: "Inspector jefe de homicidios"
}

console.log(inspector);
console.log(`Apellido: ${apellidoOficial}, expediente: ${id} / ${id2}`);
console.log(`Origen:`, origen, `Escena:`, escena, `Coordenadas:`, escenaDelCrimen);