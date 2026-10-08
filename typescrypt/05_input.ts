let personaje = prompt("Ingrese el nombre del personaje (Luke, Vader, Organa, Han Solo, Yoda):");
let edad= Number(prompt("Ingrese la edad del personaje:"));
let fuerza= Number(prompt("Ingrese el nivel de fuerza del personaje (1-100):"));

if (personaje === "Luke"|| personaje === "Vader" || personaje === "Organa" || personaje === "Han Solo" || personaje === "Yoda") {
  if (edad >= 18 && fuerza >= 50) {
    if (fuerza >= 0 && fuerza <= 100) {
      console.log(`${personaje}, ${edad} años, fuerza: ${fuerza}.`);
    }else {
      console.log("El nivel de fuerza debe estar entre 0 y 100.");
    }
  } else {
    console.log(`Edad inválida o nivel de fuerza insuficiente para ${personaje}.`);
  }
} else {
  console.log("Personaje desconocido.");
}