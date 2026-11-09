const val MAX_PORTALES=0
fun main(){
    var energia = 100
    println(energia)
    println("Autor: Hernan Varas")
    energia = 80
    println("Energia")
    println(energia)
    println("Tipos de Variables en kotlin")
    println("Tipo Integer o Entero")
    var edad : Int = 14
    var portales : Int = 10
    print("edad: $edad")
    print("portales: $portales")
    println("Tipo Long")
    var particulas : Long = 9000000000L
    print("Particulas: $particulas")
    println("Tipo Float")
    var combustible : Float = 45.5f
    print("Combustible: $combustible")
    println("Tipo Double")
    var distancia : Double = 1250.55
    print("Distancia: $distancia")
    println("Tipo Char un Caracter")
    var codigo : Char = 'c'
    print("Codigo: $codigo")
    println("Tipo String")
    var nombre : String = "Rick Smith"
    var dimension : String = "C-137"
    print("Nombre: $nombre, dimension: $dimension")
    println("Tipo Boolean")
    var portalActivo : Boolean = true
    print("Portal Activo: $portalActivo")

    println("VAL CONST VAR")
    val cientifico = "Rick Sanchez"
    val portablesDisponibles=5
    println("Nombre del cientifico: $cientifico")
    println("Portables disponibles: $portablesDisponibles")
    println("constante Limite: $MAX_PORTALES")


}