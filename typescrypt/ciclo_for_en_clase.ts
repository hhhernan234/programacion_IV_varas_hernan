const distancias: Record<string, number> = {
  "Tatooine": 1000,
  "Hoth": 500,
  "Endor": 800
}


for (const distancia in distancias) {
  console.log(`Distancia: ${distancia}, Distancia: ${distancias[distancia]}`);
}

