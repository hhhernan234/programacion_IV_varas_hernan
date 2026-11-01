import { useMemo, useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';


interface Evidencia {
  nombre: string;
  valor: number;
  cantidad: number;
}


export default function Paso6_mp() {
  const [evidencias, setEvidencias] = useState<Evidencia[]>([
    { nombre: 'Celular', valor: 250, cantidad: 2 },
    { nombre: 'Reloj', valor: 150, cantidad: 3 },
    { nombre: 'Laptop', valor: 600, cantidad: 1 },
  ]);


  const [contador, setContador] = useState<number>(0);


  // Memoriza el cálculo del valor total recuperado
  const total = useMemo(() => {
    console.log('Calculando total...');


    return evidencias.reduce(
      (acumulado, evidencia) =>
        acumulado + evidencia.valor * evidencia.cantidad,
      0
    );
  }, [evidencias]);


  function agregarEvidencia() {
    setEvidencias((actuales) => [
      ...actuales,
      { nombre: 'Cámara', valor: 80, cantidad: 1 },
    ]);
    console.log(evidencias)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Evidencias EXP-2026-001 — Hernan Varas
      </Text>


      <Text>Evidencias: {evidencias.length}</Text>


      <Text style={styles.total}>
        Valor recuperado: ${total.toFixed(2)}
      </Text>


      <Button
        title="Registrar inspección"
        onPress={() => setContador((c) => c + 1)}
      />


      <Text>Inspecciones: {contador}</Text>


      <Button
        title="Agregar cámara"
        onPress={agregarEvidencia}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    gap: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
