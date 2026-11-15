fun calcularGastos(gastos: List<Int>): Int {
    var total = 0
    for (gasto in gastos) {
        total += gasto
        if (gasto > 50) {
            println("Gasto elevado")
        }
    }
    return total
}

fun main() {
    val comisarias = listOf("Norte", "Centro", "Sur")
    for (comisaria in comisarias) {
        println("Comisaría: $comisaria")
    }
    val gastos = listOf(100, 154, 200, 99, 120)
    val total = calcularGastos(gastos)
    println("Gasto total del operativo de Hernan Varas: $total")
}
