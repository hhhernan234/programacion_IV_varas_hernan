fun main() {
    val expedientes = mutableListOf("EXP-2026-001", "EXP-2026-002", "EXP-2026-003")
    var option: Int

    do {
        println("\nArchivo de expedientes de Hernan Varas")
        println("1. Agregar Expediente")
        println("2. Mostrar Expedientes")
        println("3. Modificar Expediente")
        println("4. Eliminar Expediente")
        println("5. Exit")
        print("Seleccione una opcion: ")

        option = readln().toInt()

        when (option) {
            1 -> {
                print("Número del nuevo expediente: ")
                val nombre = readln()
                expedientes.add(nombre)
                println("Expediente incluido")
            }
            2 -> {
                println("Expedientes:")
                for ((i, expediente) in expedientes.withIndex()) {
                    println("[$i] Expediente: $expediente")
                }
            }
            3 -> {
                println("Actualizar")
                print("Indice a modificar: ")
                val indice = readln().toInt()
                if (indice in expedientes.indices) {
                    print("Nuevo número: ")
                    val nuevoNombre = readln()
                    expedientes[indice] = nuevoNombre
                    println("Expediente actualizado")
                } else {
                    println("Indice no valido")
                }
            }
            4 -> {
                println("Eliminar")
                print("Indice a eliminar: ")
                val indice = readln().toInt()
                if (indice in expedientes.indices) {
                    expedientes.removeAt(indice)
                    println("Expediente eliminado")
                } else {
                    println("Indice no valido")
                }
            }
            5 -> println("Saliendo del archivo...")
            else -> println("Opcion no valida")
        }
    } while (option != 5)
}
