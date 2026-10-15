class Guerrero {
    atacar(): void{
        console.log("El guerrero realiza un ataque basico")
    }
}

class Goku extends Guerrero {
    override atacar(): void {
        console.log("Goku lanza un poderoso kamehameha")
    }
}

class Vegeta extends Guerrero {
    override atacar(): void {
        console.log("Vegeta utiliza su final flash")
    }
}

const guerreros: Guerrero []=[
    new Goku(),
    new Vegeta()
]
guerreros.forEach(guerrero => guerrero.atacar())
