//condicionales
let nivel: number= 5;
if(nivel<5){
    console.log("El charmander puede evolucionar a Charmeleon");
} 

// condicionales dobles o dos caminos
if (nivel>=16){
    console.log("El charmander puede evolucionar a Charizard");
} else {
    console.log("El charmander no puede evolucionar a Charizard");
}

// condicionales multiples o varios caminos
if (nivel>=16){
    console.log("El charmander puede evolucionar a Charizard");
} else if(nivel>=5){
    console.log("El charmander puede evolucionar a Charmeleon");
} else {
    console.log("El charmander no puede evolucionar");
}

//condicionales anidados
if (nivel>=5){
    console.log("El charmander puede evolucionar a Charmeleon");

    }else{
        if(nivel>=16){
            console.log("El charmander puede evolucionar a Charizard");
        }else{
            console.log("El charmander no puede evolucionar");
        }
    }

//condicional con operadores logicos
nivel = -20;
let poder : number= 25;
if(nivel>=8 && nivel<16 && poder>=20){
    console.log("El charmander puede evolucionar a Charmeleon");
}else if(nivel>=16){
    console.log("El charmander puede evolucionar a Charizard");
}else{
    console.log("El charmander no puede evolucionar");
}

//condicional con operador logico OR

if (nivel>=8 || poder>=20){
    console.log("El charmander puede evolucionar a Charmeleon");
}else if(nivel>=16){
    console.log("El charmander puede evolucionar a Charizard");
}else{
    console.log("El charmander no puede evolucionar");
}


/*Desarrolla un programa en TypeScript que determine si un entrenador puede participar en la Liga Pokémon. 
Para ingresar, debe tener al menos 8 medallas, ser mayor o igual a 12 años y no estar suspendido. 
Si cumple estos requisitos, verifica mediante condicionales anidados que su Pokémon tenga nivel mínimo 40,
vida mayor a 0 y sea de tipo Fuego, Agua o Eléctrico. Finalmente, clasifica al Pokémon como Maestro 
(nivel ≥ 80, ataque ≥ 90 y vida ≥ 100), Élite (nivel ≥ 60 y ataque ≥ 75 o defensa ≥ 80) o Avanzado 
(nivel ≥ 40, ataque ≥ 50 y vida > 0). Utiliza if, else if, else y operadores &&, || y !, 
mostrando un mensaje cuando no se cumplan los requisitos.*/

type TipoPokemon = "Fuego" | "Agua" | "Planta" | "Eléctrico";


interface Entrenador {
  nombre: string;
  edad: number;
  medallas: number;
  suspendido: boolean;
}


interface Pokemon {
  nombre: string;
  tipo: TipoPokemon;
  nivel: number;
  vida: number;
  ataque: number;
  defensa: number;
}


const entrenador: Entrenador = {
  nombre: "Ash",
  edad: 15,
  medallas: 8,
  suspendido: false
};


const pokemon: Pokemon = {
  nombre: "Charizard",
  tipo: "Fuego",
  nivel: 85,
  vida: 120,
  ataque: 95,
  defensa: 78
};


// Primer IF: Validar entrenador
if (
  entrenador.medallas >= 8 &&
  entrenador.edad >= 12 &&
  !entrenador.suspendido
) {
  console.log("Entrenador autorizado");


  // Segundo IF: Validar Pokémon
  if (
    pokemon.nivel >= 40 &&
    pokemon.vida > 0 &&
    (
      pokemon.tipo === "Fuego" ||
      pokemon.tipo === "Agua" ||
      pokemon.tipo === "Eléctrico"
    )
  ) {
    console.log("Pokémon autorizado");


    // Tercer IF: Clasificar Pokémon
    if (
      pokemon.nivel >= 80 &&
      pokemon.ataque >= 90 &&
      pokemon.vida >= 100
    ) {
      console.log("Categoría Maestro");


    } else if (
      pokemon.nivel >= 60 &&
      (
        pokemon.ataque >= 75 ||
        pokemon.defensa >= 80
      )
    ) {
      console.log("Categoría Élite");


    } else if (
      pokemon.nivel >= 40 &&
      pokemon.ataque >= 50 &&
      pokemon.vida > 0
    ) {
      console.log("Categoría Avanzado");


    } else {
      console.log("Sin categoría asignada");
    }


  } else {
    console.log("El Pokémon no cumple los requisitos");
  }


} else {
  console.log("Entrenador no autorizado");
}
