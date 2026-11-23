class Nave{
    var nombre = ""
    var energia = 0
}

class Pistola(var tipo: String, var disparos: Int=0){
    fun disparar(){
        println("Disparando para ir a otro universo")
    }

    fun varasPuedeDespegar(energia: Int=0){
        var combustible: Int= energia * disparos
        if (combustible >=0){
            println("pistola $tipo tiene potencia para despegar")
        }else{
            println("pistola $tipo no tiene potencia para despegar")
        }
    }
}

fun main() {
    val nave1 = Nave()
    nave1.nombre = "Nave 1"
    nave1.energia = 100

    val nave2 = Nave()
    nave2.nombre = "Nave 2"
    nave2.energia = 200

    println("Nombre de la nave: ${nave1.nombre}, Energía: ${nave1.energia}")
    println("Nombre de la nave: ${nave2.nombre}, Energía: ${nave2.energia}")

    val pistola1 = Pistola("Láser", 10)
    val pistola2 = Pistola("Plasma", 5)
    pistola1.disparar()
    pistola2.disparar()
    println("${pistola1.tipo}")
    println("${pistola2.tipo}")
    pistola1.varasPuedeDespegar(4)
    pistola2.varasPuedeDespegar(-3)
}