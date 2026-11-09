fun main(){
println("Operadores - Inspector Hernan Varas")
println("Operadores Aritméticos")
var numero1: Double = 10.50
var numero2: Double = 5.50
var suma: Double = numero1 + numero2

println("Suma + : $numero1 + $numero2 = ${numero1+numero2}")
println("Suma + : $numero1 + $numero2 = ${suma}")
println("Resta - : $numero1 - $numero2 = ${numero1-numero2}")
println("Multiplicación * : $numero1 * $numero2 = ${numero1*numero2}")
println("Division / : $numero1 / $numero2 = ${numero1/numero2}")
println("Residuo % : $numero1 % $numero2 = ${numero1%numero2}")

println("Prioridades en operadores Aritméticos")
println("1()")
println("2 *, /, %")
println("3 +, -")
val evidencias = 10+3*5+5
println("Evidencias $evidencias")
val patrullas = 3/5*5
println("Patrullas $patrullas")
val combustible = 100+20/4*3-10%3
println("Combustible $combustible")

println("Operadores de Comparación")
println("Igual a == ${10==10}")
println("Igual a == ${10==15}")
println("Diferente de != ${5!=10}")
println("Diferente de != ${10!=10}")
println("Mayor que > ${5>10}")
println("Mayor que > ${15>10}")
println("Menor que < ${5<10}")
println("Menor que < ${15<10}")
println("Mayor igual >= ${10>=10}")
println("Mayor igual >= ${15>=10}")
println("Mayor igual >= ${5>=10}")
println("Menor igual <= ${10<=10}")
println("Menor igual <= ${15<=10}")
println("Menor igual <= ${5<=10}")
}
