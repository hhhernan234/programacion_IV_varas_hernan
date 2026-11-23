abstract class Dispositivo{
    abstract fun activar()
}

class PortalInterdimensional: Dispositivo(){
    override fun activar(){
        println("Abriendo portal interdimensional")
    }
}

class Escudo: Dispositivo(){
    override fun activar(){
        println("Activando escudo de energia")
    }
}

fun main(){
    val portal = PortalInterdimensional()
    val escudo = Escudo()
    portal.activar()
    escudo.activar()
}