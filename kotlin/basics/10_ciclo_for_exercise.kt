data class Portal(
    val nombre: String,
    val energia: Int
)

fun main() {
    var presupuestoTotal = 0.0
    println("Presupuesto de Expedicion")

    for (viaje in 1..4) {
        val costoOriginal = viaje * 25
        var descuento = 0.0

        if (costoOriginal >= 100) {
            descuento = costoOriginal * 0.20
        }

        val costoFinal = costoOriginal - descuento
        println("Viaje $viaje")
        println("Costo Original $costoOriginal")
        println("Descuento aplicado $descuento")
        println("Costo Final $costoFinal")
        presupuestoTotal += costoFinal
    }

    println("Presupuesto Total de la Expedicion: $presupuestoTotal")

    val portales = arrayOf(
        Portal("Tierra", 30),
        Portal("Marte", 65),
        Portal("Saturno", 95),
        Portal("Jupiter", 130),
        Portal("Neptuno", 45),
        Portal("Hernán", 89),
        Portal("Varas", 75)
    )

    val costoViaje = 50

    for (portal in portales) {
        println("Portal: ${portal.nombre}")
        println("Energia: ${portal.energia}")

        when {
            portal.energia < 50 -> {
                println("Estado: Inactivo")
                println("No se puede viajar a este portal")
            }
            portal.energia < 80 -> {
                println("Estado: Operativo")
            }
            portal.energia < 120 -> {
                println("Estado: Estable")
            }
            else -> {
                println("Estado: Sobrecargado")
            }
        }

        if (portal.energia >= costoViaje) {
            val restanteEnergia = portal.energia - costoViaje
            println("Viaje autorizado")
            println("Energia restante: $restanteEnergia")
        }
    }
}
