fun main(){
    val comisaria = 2
    when (comisaria){
        1-> println("Destino: Comisaría Norte")
        2-> println("Destino: Comisaría Centro")
        3-> println("Destino: Comisaría Sur")
        else -> println("Comisaría No disponible")
    }

    println("Ingrese el dia (1-7)")
    val dia = readln().toInt()
    when(dia){
        1,2,3,4,5-> println("dia de investigación")
        6,7-> println("Dia de descanso")
        else-> println("Dia invalido")
    }

    println("Ingrese el nivel de evidencia (0-100)")
    val evidencia = readln().toInt()
    when(evidencia){
        in 0..39 -> println("Evidencia baja")
        in 40..79 -> println("Evidencia media")
        in 80..100 -> println("Evidencia Alta")
        else -> println("Evidencia inválida")
    }
/*Trabajo con condicionales y comentarios con when */
    val recursos = 80
    val equipoListo = true
    val costoOperativo = 40
    when {
        recursos >= costoOperativo && equipoListo->{
            val restante = recursos - costoOperativo
            println("Operativo Autorizado")
            println("Recursos Restantes $restante")
        }

        recursos<costoOperativo && equipoListo -> {
            println("Recursos Insuficientes")
        }
        !equipoListo->{
            println("El equipo no está listo")
        }
    }
}
