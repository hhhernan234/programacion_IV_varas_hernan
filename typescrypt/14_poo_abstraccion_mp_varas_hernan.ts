
abstract class Funcionario {
    abstract investigar(): void;
    descansar(): void {
        console.log("El funcionario recupera energía");
    }
}

class Inspector extends Funcionario {
    investigar(): void {
        console.log("El inspector Hernan Varas interroga a los testigos");
    }
}

class Detective extends Funcionario {
    investigar(): void {
        console.log("El detective revisa las cámaras de seguridad");
    }
}

const funcionarios: Funcionario[] = [
    new Inspector(),
    new Detective(),
];

console.log(funcionarios);
funcionarios.forEach(funcionario => funcionario.investigar());
funcionarios.forEach(funcionario => funcionario.descansar());


abstract class Delito {
    abstract clasificar(): void;
    detectarGravedad(): void {
        console.log("Detectando el nivel de gravedad del delito");
    }
}

class Robo extends Delito {
    clasificar(): void {
        console.log("Robo clasificado como delito contra la propiedad");
    }
}

class Homicidio extends Delito {
    clasificar(): void {
        console.log("Homicidio clasificado como delito contra la vida");
    }
}

const delitos: Delito[] = [
    new Robo(),
    new Homicidio(),
];

console.log(delitos);
delitos.forEach(delito => delito.clasificar());
delitos.forEach(delito => delito.detectarGravedad());