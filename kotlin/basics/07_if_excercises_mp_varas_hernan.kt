data class Patrulla(
    val combustible:Int,
    val activa: Boolean
    )

data class Oficial(
    val nombre:String,
    val energia: Int
    )

data class Operativo(
    val recursos:Int,
    val equipoListo: Boolean,
    val ordenJudicial: Boolean
    )

fun main(){
    val patrulla= Patrulla(80,true)
    if(patrulla.combustible >= 50 && patrulla.activa){
        println("Hernan Varas puede salir a patrullar")
    }

    val gravedades = arrayOf(20,45,85,30,60)
    if (gravedades[2] > 70){
        println("¡Peligro! Caso de alta gravedad")
    }else{
        println("Gravedad moderada")
    }

    val pruebas = arrayOf(80, 65, 90)
    val suma = pruebas[0]+pruebas[1]+pruebas[2]
    val promedio = suma /3.0
    println("Promedio $promedio")
    if (promedio >= 70){
        println("Expediente sólido")
    }else{
        println("Expediente débil")
    }

    val oficial= Oficial("Oficial Ramirez", 65)
    if (oficial.energia >= 80){
        println("Rendimiento optimo")
    }else if (oficial.energia>= 50){
        println("Rendimiento normal")
    }else if (oficial.energia >=20){
        println("Energia baja")
    }else{
        println("Estado critico")
    }

    val operativo = Operativo(120, true, false)
    if(operativo.recursos >= 100){
        if(operativo.equipoListo){
            if(operativo.ordenJudicial){
                println("Operativo autorizado")
            }else{
                println("Falta la orden judicial")
            }
        }
    }else{
        println("Recursos insuficientes")
    }
}
