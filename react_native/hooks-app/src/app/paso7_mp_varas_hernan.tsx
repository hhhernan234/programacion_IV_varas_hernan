import {
  useState,
  useCallback,
  memo,
} from 'react';


import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';


interface Evidencia {
  id: number;
  nombre: string;
  cantidad: number;
}


interface EvidenciaItemProps {
  evidencia: Evidencia;
  onEliminar: (id: number) => void;
}


// Componente memorizado
const EvidenciaItem = memo(
  ({ evidencia, onEliminar }: EvidenciaItemProps) => {
    console.log('Renderizando:', evidencia.nombre);


    return (
      <View style={styles.evidencia}>
        <Text>
          {evidencia.nombre} - x{evidencia.cantidad}
        </Text>


        <Button
          title="Eliminar"
          onPress={() => onEliminar(evidencia.id)}
        />
      </View>
    );
  }
);


export default function Paso7_mp() {
  const [evidencias, setEvidencias] = useState<Evidencia[]>([
    { id: 1, nombre: 'Huellas dactilares', cantidad: 3 },
    { id: 2, nombre: 'Cámara de seguridad', cantidad: 1 },
  ]);


  const [contador, setContador] = useState(0);


  // Función memorizada para eliminar evidencias
  const eliminarEvidencia = useCallback((id: number) => {
    setEvidencias((actuales) =>
      actuales.filter((evidencia) => evidencia.id !== id)
    );
  }, []);


  // Función memorizada para agregar evidencias
  const agregarEvidencia = useCallback(() => {
    setEvidencias((actuales) => [
      ...actuales,
      {
        id: Date.now(),
        nombre: 'Arma recuperada',
        cantidad: 1,
      },
    ]);
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Evidencias — Inspector Hernan Varas
      </Text>


      <Text>Contador: {contador}</Text>


      <Button
        title="Incrementar contador"
        onPress={() => setContador((c) => c + 1)}
      />


      <Button
        title="Agregar arma recuperada"
        onPress={agregarEvidencia}
      />


      <FlatList
        data={evidencias}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <EvidenciaItem
            evidencia={item}
            onEliminar={eliminarEvidencia}
          />
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    gap: 12,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  evidencia: {
    padding: 12,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    gap: 8,
  },
});
