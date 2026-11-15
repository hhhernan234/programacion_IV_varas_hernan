data class PistolaLaser(
    val energia: Int,
    val activa: Boolean
)

fun main(){
    for (i in 1..5){
        println("Visitando dimension $i")
    }

    for (i in 10 downTo(1)){
        println("Visitando dimension $i")
    }

    for (i in 1..20 step 2){
        println("Visitando dimension $i")
    }

    for (i in 1..10 ){
        val resultado = 3*1
        println("3 * $i = $resultado")
        println("3 * $i = ${i*3}")
    }
}