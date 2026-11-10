
fun main() {
var presupuestoTotal = 0.0
println("Presupuesto de Expedicion")
for (viaje in 1..4){
    val costoOriginal = viaje * 25
    var descuento = 0.0
    if (costoOriginal >= 100){
        descuento = costoOriginal * 0.20
    }
    val costoFinal = costoOriginal - descuento
    println("Viaje $viaje")
    println("Costo Original $costoOriginal")
    println("Descuento aplicado $descuento")
    println("Costo Final $costoFinal")
    presupuestoTotal+= costoFinal
}
println("Presupuesto Total de la Expedicion creditos".format(presupuestoTotal))
}