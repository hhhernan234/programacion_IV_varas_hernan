data class Expediente(
    val nombre: String,
    val gravedad: Int
)

fun main() {
    var presupuestoTotal = 0.0
    println("Presupuesto del Operativo - Inspector Hernan Varas")

    for (operativo in 1..4) {
        val costoOriginal = operativo * 25
        var descuento = 0.0

        if (costoOriginal >= 100) {
            descuento = costoOriginal * 0.20
        }

        val costoFinal = costoOriginal - descuento
        println("Operativo $operativo")
        println("Costo Original $costoOriginal")
        println("Descuento aplicado $descuento")
        println("Costo Final $costoFinal")
        presupuestoTotal += costoFinal
    }

    println("Presupuesto Total del Operativo: $presupuestoTotal")

    val expedientes = arrayOf(
        Expediente("Hurto", 30),
        Expediente("Robo", 65),
        Expediente("Fraude", 95),
        Expediente("Secuestro", 130),
        Expediente("Cibercrimen", 45),
        Expediente("Caso Hernan", 89),
        Expediente("Caso Varas", 75)
    )

    val umbralOperativo = 50

    for (expediente in expedientes) {
        println("Expediente: ${expediente.nombre}")
        println("Gravedad: ${expediente.gravedad}")

        when {
            expediente.gravedad < 50 -> {
                println("Estado: Baja prioridad")
                println("No se requiere operativo")
            }
            expediente.gravedad < 80 -> {
                println("Estado: Prioridad media")
            }
            expediente.gravedad < 120 -> {
                println("Estado: Prioridad alta")
            }
            else -> {
                println("Estado: Crítico")
            }
        }

        if (expediente.gravedad >= umbralOperativo) {
            val sobreUmbral = expediente.gravedad - umbralOperativo
            println("Operativo autorizado")
            println("Gravedad sobre el umbral: $sobreUmbral")
        }
    }
}
