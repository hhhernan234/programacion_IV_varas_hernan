import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import { Paso1FilaServidor } from './paso1FilaServidor'

export type Servidor = {
  id: string
  nombre: string
  ip: string
  activo: boolean
}

export const SERVIDORES: Servidor[] = [
  { id: '1', nombre: 'web-01',   ip: '10.0.2.10', activo: true  },
  { id: '2', nombre: 'web-02',   ip: '10.0.2.11', activo: true  },
  { id: '3', nombre: 'db-primario', ip: '10.0.3.20', activo: true  },
  { id: '4', nombre: 'db-replica',  ip: '10.0.3.21', activo: false },
  { id: '5', nombre: 'cache-01',    ip: '10.0.4.10', activo: true  },
  { id: '6', nombre: 'cache-02',    ip: '10.0.4.11', activo: false },
  { id: '7', nombre: 'lb-01',       ip: '10.0.1.1',  activo: true  },
  { id: '8', nombre: 'bastion',     ip: '203.0.113.5', activo: true },
]

export function Paso1() {
  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>Servidores</Text>
      <FlatList<Servidor>
        data={SERVIDORES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaServidor servidor={item} />}
      />
    </SafeAreaView>
  )
}

export default Paso1

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
})