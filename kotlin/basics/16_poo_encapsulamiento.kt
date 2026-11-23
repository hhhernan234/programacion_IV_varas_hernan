class NaveEncapuslada{
    private var energia = 100

    fun recargar(cantidad: Int){
        if(cantidad > 0){
            energia += cantidad
        }else{
            println("Cantidad no valida")
        }
    }

    fun mostrarEnergia(){
        println("Energia actual: $energia")
    }
    fun asignarEnergia(cantidad: Int){
        energia = cantidad
    }
}

fun main() {
    val naveEncapuslada = NaveEncapuslada()
    naveEncapuslada.mostrarEnergia()
    naveEncapuslada.recargar(50)
    naveEncapuslada.mostrarEnergia()
    naveEncapuslada.asignarEnergia(200)
    naveEncapuslada.mostrarEnergia()
}