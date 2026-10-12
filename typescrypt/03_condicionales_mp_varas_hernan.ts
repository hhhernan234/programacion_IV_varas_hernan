// condicionales simples
let gravedad: number = 5;
if (gravedad < 5) {
    console.log("El expediente de Hernan Varas es de prioridad baja");
}

// condicionales dobles o dos caminos
if (gravedad >= 16) {
    console.log("El expediente se deriva a Fiscalía");
} else {
    console.log("El expediente no se deriva a Fiscalía");
}

// condicionales multiples o varios caminos
if (gravedad >= 16) {
    console.log("El expediente se deriva a Fiscalía");
} else if (gravedad >= 5) {
    console.log("El expediente pasa a investigación");
} else {
    console.log("El expediente queda en archivo temporal");
}

// condicionales anidados
if (gravedad >= 5) {
    console.log("El expediente pasa a investigación");
    if (gravedad >= 16) {
        console.log("El expediente se deriva a Fiscalía");
    } else {
        console.log("El expediente sigue en la comisaría");
    }
} else {
    console.log("El expediente queda en archivo temporal");
}

// condicional con operador lógico AND
gravedad = 12;
let evidencias: number = 25;
if (gravedad >= 8 && gravedad < 16 && evidencias >= 20) {
    console.log("El inspector Hernan Varas puede pedir orden de allanamiento");
} else if (gravedad >= 16) {
    console.log("El expediente se deriva a Fiscalía");
} else {
    console.log("No hay mérito para pedir orden de allanamiento");
}

// condicional con operador lógico OR
if (gravedad >= 8 || evidencias >= 20) {
    console.log("El expediente puede avanzar a investigación formal");
} else {
    console.log("El expediente no puede avanzar");
}


/* Desarrolla un programa en TypeScript que determine si un oficial puede liderar un operativo especial.
Para ingresar, debe tener al menos 8 casos resueltos, ser mayor o igual a 21 años y no estar suspendido.
Si cumple estos requisitos, verifica mediante condicionales anidados que el expediente tenga gravedad mínima 40,
testigos mayor a 0 y sea de tipo Robo, Homicidio o Fraude. Finalmente, clasifica el expediente como
Prioridad Máxima (gravedad ≥ 80, evidencias ≥ 90 y testigos ≥ 3), Prioridad Media (gravedad ≥ 60 y
evidencias ≥ 75 o sospechosos ≥ 2) o Prioridad Baja (gravedad ≥ 40, evidencias ≥ 50 y testigos > 0).
Utiliza if, else if, else y operadores &&, || y !, mostrando un mensaje cuando no se cumplan los requisitos. */

type TipoDelito = "Robo" | "Homicidio" | "Fraude" | "Cibercrimen";

interface Oficial {
  nombre: string;
  edad: number;
  casosResueltos: number;
  suspendido: boolean;
}

interface Expediente {
  numero: number;
  delito: TipoDelito;
  gravedad: number;
  testigos: number;
  evidencias: number;
  sospechosos: number;
}

const oficial: Oficial = {
  nombre: "Hernan Varas",
  edad: 30,
  casosResueltos: 12,
  suspendido: false
};

const expediente: Expediente = {
  numero: 2026001,
  delito: "Homicidio",
  gravedad: 85,
  testigos: 4,
  evidencias: 95,
  sospechosos: 2
};

// Primer IF: Validar oficial
if (
  oficial.casosResueltos >= 8 &&
  oficial.edad >= 21 &&
  !oficial.suspendido
) {
  console.log(`Oficial ${oficial.nombre} autorizado`);

  // Segundo IF: Validar expediente
  if (
    expediente.gravedad >= 40 &&
    expediente.testigos > 0 &&
    (
      expediente.delito === "Robo" ||
      expediente.delito === "Homicidio" ||
      expediente.delito === "Fraude"
    )
  ) {
    console.log("Expediente autorizado");

    // Tercer IF: Clasificar expediente
    if (
      expediente.gravedad >= 80 &&
      expediente.evidencias >= 90 &&
      expediente.testigos >= 3
    ) {
      console.log("Prioridad Máxima");

    } else if (
      expediente.gravedad >= 60 &&
      (
        expediente.evidencias >= 75 ||
        expediente.sospechosos >= 2
      )
    ) {
      console.log("Prioridad Media");

    } else if (
      expediente.gravedad >= 40 &&
      expediente.evidencias >= 50 &&
      expediente.testigos > 0
    ) {
      console.log("Prioridad Baja");

    } else {
      console.log("Sin prioridad asignada");
    }

  } else {
    console.log("El expediente no cumple los requisitos");
  }

} else {
  console.log("Oficial no autorizado");
}