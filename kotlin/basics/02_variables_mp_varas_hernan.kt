const val MAX_EXPEDIENTES = 20
fun main(){
    var energia = 100
    println(energia)
    println("Autor: Hernan Varas")
    energia = 80
    println("Energia del oficial")
    println(energia)
    println("Tipos de Variables en kotlin")
    println("Tipo Integer o Entero")
    var edad : Int = 30
    var expedientes : Int = 10
    println("edad: $edad")
    println("expedientes: $expedientes")
    println("Tipo Long")
    var registrosArchivo : Long = 9000000000L
    println("Registros en el archivo: $registrosArchivo")
    println("Tipo Float")
    var combustible : Float = 45.5f
    println("Combustible de la patrulla: $combustible")
    println("Tipo Double")
    var distancia : Double = 1250.55
    println("Distancia recorrida: $distancia")
    println("Tipo Char un Caracter")
    var codigo : Char = 'A'
    println("Codigo de prioridad: $codigo")
    println("Tipo String")
    var nombre : String = "Hernan Varas"
    var delito : String = "Robo agravado"
    println("Nombre: $nombre, delito: $delito")
    println("Tipo Boolean")
    var casoAbierto : Boolean = true
    println("Caso abierto: $casoAbierto")

    println("VAL CONST VAR")
    val inspector = "Hernan Varas"
    val evidenciasDisponibles = 5
    println("Nombre del inspector: $inspector")
    println("Evidencias disponibles: $evidenciasDisponibles")
    println("constante Limite: $MAX_EXPEDIENTES")
}
