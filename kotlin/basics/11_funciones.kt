fun activarPortal(){
    println("Activando portal interdimensional")
    println("Conteo regresivo")
    println("3")
    println("2")
    println("1")
    println("Francisco Higuera activó el Portal")
}

fun viajar(dimension:String, viajes:Int, costo:Int, consumo:Int){
    println("Viajando a la dimensión $dimension")
    val total = viajes * consumo
    println("Costo: $costo")
    println("Consumo: $total")
}

fun calcularPrecio(precio: Double): Double {
    var descuento: Double = 0.0
    if (precio >= 100) {
        descuento = precio * 0.15
    }
    return precio - descuento
}

fun calcularEnergia(energias:Array<Int>):Int{
    var totalEnergia = 0
    for(energia in energias){
        totalEnergia += energia
        if(energia<50){
            println("Sobre Energia: $energia")
        }
    }
    return totalEnergia
}

fun main(){
    activarPortal()
    activarPortal()
    viajar("Marte", 2, 10, 5)
    viajar("Jupiter", 1, 15, 10)
    val precioFinal = calcularPrecio(150.0)
    println("Precio final: $precioFinal")
    val energiaTotal = calcularEnergia(arrayOf(60, 40, 80, 30))
    println("Energía total: $energiaTotal")
}