export {};

interface ParticipanteOperativo {
    nombre: string;
    nivelExperiencia: number;
    presentarInforme(): void;
    asignarMision(): void;
}

class InspectorVaras implements ParticipanteOperativo {
    nombre = "Hernan Varas";
    nivelExperiencia = 90;

    presentarInforme(): void {
        console.log(`${this.nombre} presenta el informe del expediente`);
    }

    asignarMision(): void {
        console.log(`${this.nombre} dirige el operativo de allanamiento`);
    }
}

class DetectiveRamirez implements ParticipanteOperativo {
    nombre = "Detective Ramirez";
    nivelExperiencia = 85;

    presentarInforme(): void {
        console.log(`${this.nombre} presenta el análisis de las huellas`);
    }

    asignarMision(): void {
        console.log(`${this.nombre} vigila al sospechoso`);
    }
}

const equipo: ParticipanteOperativo[] = [
    new InspectorVaras(),
    new DetectiveRamirez(),
];

equipo.forEach(participante => {
    console.log(`Participante: ${participante.nombre}, Experiencia: ${participante.nivelExperiencia}`);
    participante.presentarInforme();
    participante.asignarMision();
});