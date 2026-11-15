fun main(){
    println("Operativo policial - Inspector Hernan Varas")
    println("¿Nombre del oficial?")
    val nombre = readlnOrNull()
    println("Cantidad de patrullas:")
    val patrullas = readln().toInt()
    println("Costo por patrulla:")
    val costo = readln().toDouble()
    println("Presupuesto disponible:")
    val presupuesto = readln().toDouble()
    val costoTotal = patrullas * costo
    val saldo = presupuesto - costoTotal
    println("Reporte")
    println("Oficial: $nombre")
    println("Costo total: $costoTotal")
    println("Saldo: $saldo")
}
