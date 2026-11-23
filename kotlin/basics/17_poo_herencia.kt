open class Vehiculo(val nombre: String){
    fun mostrarNombre(){
        println("Vehiculo : $nombre")
    }
}

class NaveEspacial(nombre: String, val energia: Int):
    Vehiculo(nombre){
    fun mostrarEnergia(){
        println("Energia de la nave: $energia")
    }
}

fun main(){
    val nave = NaveEspacial("Nave Espacial", 100)
    nave.mostrarNombre()
    nave.mostrarEnergia()
}