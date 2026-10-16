
class Policia {
    patrullar(): void {
        console.log("Patrullaje básico");
    }
}

class Inspector extends Policia {
    interrogar(): void {
        console.log("El inspector Hernan Varas interroga al sospechoso");
    }
}

class Detective extends Policia {
    investigarEscena(): void {
        console.log("El detective recolecta huellas en la escena del crimen");
    }
}

const varas = new Inspector();
varas.patrullar();
varas.interrogar();
const detective = new Detective();
detective.patrullar();
detective.investigarEscena();


class Delito {
    registrar(): void {
        console.log("Delito registrado en el expediente");
    }
}

class Robo extends Delito {
    reportarBotin(): void {
        console.log("Se reporta el botín robado en el expediente de Hernan Varas");
    }
}

class Fraude extends Delito {
    rastrearTransferencia(): void {
        console.log("Se rastrea la transferencia bancaria sospechosa");
    }
}

const robo = new Robo();
robo.registrar();
robo.reportarBotin();
const fraude = new Fraude();
fraude.registrar();
fraude.rastrearTransferencia();