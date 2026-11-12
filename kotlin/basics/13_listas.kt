fun calcularCostos(costos: List<Int>): Int {
    var total = 0
    for (costo in costos) {
        total += costo
        if (costo > 50) {
            println("Herramienta costosa")
        }
    }
    return total
}

fun main() {
    val destinos = listOf("Tierra", "Marte", "Saturno")
    val interaccion: Int = 1
    for (destino in destinos) {
        println("Destino Interacción: $destino")
    }
    val costos = listOf(100, 154, 200, 99, 120)
    val total = calcularCostos(costos)
    println("Costo total de herramientas de Francisco Higuera: $total")
}