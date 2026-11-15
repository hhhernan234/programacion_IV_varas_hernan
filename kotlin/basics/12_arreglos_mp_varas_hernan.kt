fun main(){
    val evidencias = arrayOf(30,50,80,100,60)
    println(evidencias[0])
    println(evidencias[2])
    println(evidencias[4])
    evidencias[4]=150 //modifica
    println(evidencias[4])
    for (evidencia in evidencias){
        println("Evidencia")
        val evidenciaDoble = evidencia *2
        println("Evidencia Doble $evidenciaDoble")
        if (evidenciaDoble >= 150){
            val evidenciaReducida = evidenciaDoble -70
            println("Evidencia Reducida: $evidenciaReducida")

        }
    }
}
