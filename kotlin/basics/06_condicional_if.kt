fun main(){
    println("Condicional If")
    println("Condicional Simple o un camino")
    var energia = 80
    if (energia>=50){
        println("Rick puede abrir el portal")
    }
    println("Condicional if-else o dos camino")
    energia = 30
    if (energia>=50){
        println("Rick puede abrir el portal")
    } else {
        println("Energia insuficiente")
    }

    println("Condicional multiple")
    energia = 70
    if (energia>=100){
        println("Rick puede abrir el portal")
    } else if (energia >= 50){
        println("Energia suficiente")
    } else {
        println("Energia insuficiente")
    }

    println("Condicional enlazada")
    energia = 70
    val motorActivo = true
    if (energia>=100){
        println("Rick puede abrir el portal")
        if (motorActivo){
            println("puede despegar")
        }
    } else if (energia >= 50){
        println("Energia suficiente")
        if (motorActivo){
            println("puede despegar")
        }
    } else {
        println("Energia insuficiente")
    }
}