fun main(){
    println("Inputs en terminal ReadLine - Inspector Hernan Varas")
    println("¿Nombre del denunciante?")
    val nombre = readlnOrNull()
    println("Bienvenido a la comisaría: $nombre")
    println("Evidencias de la escena A:")
    val evidenciasA = readln().toInt()
    println("Evidencias de la escena B:")
    val evidenciasB = readln().toInt()
    val total = evidenciasA+evidenciasB
    println("Total de evidencias: $total")
    println("Calculadora de Combustible")
    println("Combustible inicial de la patrulla:")
    val combustibleInicial = readln().toInt()
    println("Combustible consumido:")
    val combustibleConsumido = readln().toInt()
    val combustibleRestante = combustibleInicial-combustibleConsumido
    println("Combustible restante: $combustibleRestante")
}
