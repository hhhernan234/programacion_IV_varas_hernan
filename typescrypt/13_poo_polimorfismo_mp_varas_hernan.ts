
class Policia {
    actuar(): void {
        console.log("Acción básica de patrullaje");
    }
}

class Inspector extends Policia {
    override actuar(): void {
        console.log("El inspector Hernan Varas dirige el operativo");
    }
}

class Detective extends Policia {
    override actuar(): void {
        console.log("El detective analiza las pruebas del caso");
    }
}

const equipo: Policia[] = [
    new Inspector(),
    new Detective()
];
equipo.forEach(policia => policia.actuar());