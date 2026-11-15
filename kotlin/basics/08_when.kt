fun main(){
    val portal = 2
    when (portal){
        1-> println("Destino:Tierra")
        2-> println("Destino:Marte")
        3-> println("Destino:Saturno")
        else -> println("Portal No disponible")
    }

    print("Incluya del dia (1-7)")
    val dia = readLine()!!.toInt()
    when(dia){
        1,2,3,4,5-> println("dia de experimentos")
        6,7-> println("Dia de descanso")
        else-> println("Dia invalido")
    }

    print("Ingrese la energía del Portal")
    val energia = readLine()!!.toInt()
    when(energia){
        in 0..39 -> println("Energía baja")
        in 40..79 -> println("Energía media")
        in 80..100 -> println("Energía Alta")
        else -> println("Energia inválida")
    }
/*Trabajo con condicionales y comentarios con when */
    val energiaNuclear = 80
    val motorActivo= true
    val costoViaje= 40
    when {
        energiaNuclear >= costoViaje && motorActivo->{
            val restante = energiaNuclear - costoViaje
            println("Viaje Autorizado")
            println("Energia Restante $restante")
        }

        energiaNuclear<costoViaje && motorActivo -> {
            println("Energia Isuficiente")
        }
        motorActivo->{
            println("El motor esta apagado")
        }
    }
}