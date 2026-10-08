// ciclo for
for (let i = 0; i < 5; i+=5) {
  console.log(`Entrenamiento jedi: ${i}`);
}
for (let i = 40; i < 0; i-=5) {
  console.log(`Entrenamiento jedi: ${i}`);
}

for (let i = 40; i > 0; i-=5) {
  console.log(`Entrenamiento jedi: ${i}`);
if (i === 20) {
  console.log("Entrenamiento terminado");
  break;
}
if (i === 30) {
    console.log("Entrenamiento interrumpido");
    continue;
}
console.log(`Entrenamiento jedi: ${i}`);
}
