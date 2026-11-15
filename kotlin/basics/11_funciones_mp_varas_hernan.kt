fun iniciarOperativo(){
    println("Iniciando operativo policial")
    println("Conteo regresivo")
    println("3")
    println("2")
    println("1")
    println("Hernan Varas inició el operativo")
}

fun patrullar(zona:String, rondas:Int, costo:Int, consumo:Int){
    println("Patrullando la zona $zona")
    val total = rondas * consumo
    println("Costo: $costo")
    println("Consumo: $total")
}

fun calcularMulta(monto: Double): Double {
    var descuento: Double = 0.0
    if (monto >= 100) {
        descuento = monto * 0.15
    }
    return monto - descuento
}

fun calcularGravedadTotal(gravedades:Array<Int>):Int{
    var total = 0
    for(gravedad in gravedades){
        total += gravedad
        if(gravedad<50){
            println("Caso de baja gravedad: $gravedad")
        }
    }
    return total
}

fun main(){
    iniciarOperativo()
    iniciarOperativo()
    patrullar("Centro", 2, 10, 5)
    patrullar("Norte", 1, 15, 10)
    val multaFinal = calcularMulta(150.0)
    println("Multa final: $multaFinal")
    val gravedadTotal = calcularGravedadTotal(arrayOf(60, 40, 80, 30))
    println("Gravedad total: $gravedadTotal")
}
