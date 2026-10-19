interface ParticipanteTorneo {
    nombre: string;
    nivelPoder: number;
    presentarTecnica(): void;
    transformarse(): void;
}

class Goku implements ParticipanteTorneo {
    nombre = "Goku";
    nivelPoder = 90000;

    presentarTecnica(): void {
        console.log("Goku utiliza el kamekameha");
    }

    transformarse(): void {
        console.log("Participante transformado");
    }
}

class Vegeta implements ParticipanteTorneo {
    nombre = "Vegeta";
    nivelPoder = 8500;

    presentarTecnica(): void {
        console.log("Vegetra utiliza el Final Flash");
    }

    transformarse(): void {
        console.log("Participante transformado");
    }
}