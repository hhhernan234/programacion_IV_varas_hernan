abstract class Boxeador {
    abstract atacar():void;
    decansar() :void{
        console.log("El boxeador recupera energia");
    }
}   

class Rocky extends Boxeador{
    atacar():void{
        console.log("Rocky lanza con velocidad")
    }
}

class Apollo extends Boxeador {
    atacar(): void {
        console.log("Apollo lanza un uper");
    }
}

const boxeadores: Boxeador []=[
    new Rocky(),
    new Apollo(),
]

console.log(boxeadores);
boxeadores.forEach(boxeador => boxeador.atacar());

abstract class Saiyajin {
    abstract transformarse():void;
    detectarKi() :void{
        console.log("Detectando el nivel de energia del enemigo");
    }
}   

class Goku extends Saiyajin{
    detectarKi():void{
        console.log("Goku se transforma en Super Saiyajin Blue")
    }
}

class Vegeta extends Saiyajin {
    transformarse(): void {
        console.log("Vegeta alcanza el ultra ego");
    }
}

const saiyajines: Saiyajin []=[
    new Goku(),
    new Vegeta(),
]

console.log(saiyajines);
saiyajines.forEach(saiyajin => saiyajin.transformarse());