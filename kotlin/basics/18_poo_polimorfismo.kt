open class RobotGeneral{
    open fun ejecutarMision(){
        println("Ejecutando misión general del robot")
    }
}

class RobotCombate: RobotGeneral(){
    override fun ejecutarMision(){
        println("Ejecutando misión de combate del robot")
    }
}

class RobotExplorador: RobotGeneral(){
    override fun ejecutarMision(){
        println("Ejecutando misión de exploracion del robot")
    }
}

fun main(){
    val robot1 = RobotCombate()
    val robot2 = RobotExplorador()
    robot1.ejecutarMision()
    robot2.ejecutarMision()
}