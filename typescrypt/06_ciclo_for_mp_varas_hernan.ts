export {};

// ciclo for ascendente
for (let i = 0; i <= 20; i += 5) {
  console.log(`Patrullaje del inspector Hernan Varas: ${i} minutos`);
}

// ciclo for descendente
for (let i = 40; i > 0; i -= 10) {
  console.log(`Cuenta regresiva del operativo: ${i}`);
}

// break y continue
for (let i = 40; i > 0; i -= 5) {
  if (i === 30) {
    console.log("Interrogatorio interrumpido");
    continue;
  }
  if (i === 20) {
    console.log("Interrogatorio terminado");
    break;
  }
  console.log(`Interrogatorio al sospechoso: ${i} minutos restantes`);
}