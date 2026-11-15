fun main(){
    println("Condicional If")
    println("Condicional Simple o un camino")
    var evidencias = 80
    if (evidencias>=50){
        println("Hernan Varas puede solicitar la orden de captura")
    }
    println("Condicional if-else o dos camino")
    evidencias = 30
    if (evidencias>=50){
        println("Hernan Varas puede solicitar la orden de captura")
    } else {
        println("Evidencia insuficiente")
    }

    println("Condicional multiple")
    evidencias = 70
    if (evidencias>=100){
        println("Caso listo para Fiscalía")
    } else if (evidencias >= 50){
        println("Evidencia suficiente")
    } else {
        println("Evidencia insuficiente")
    }

    println("Condicional enlazada")
    evidencias = 70
    val testigoDisponible = true
    if (evidencias>=100){
        println("Caso listo para Fiscalía")
        if (testigoDisponible){
            println("puede allanar")
        }
    } else if (evidencias >= 50){
        println("Evidencia suficiente")
        if (testigoDisponible){
            println("puede allanar")
        }
    } else {
        println("Evidencia insuficiente")
    }
}
