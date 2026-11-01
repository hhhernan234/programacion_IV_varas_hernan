import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import { Paso1FilaExpediente_mp } from './paso1FilaExpediente_mp_varas_hernan'

export type Expediente = {
  id: string
  codigo: string
  delito: string
  abierto: boolean
}

export const EXPEDIENTES: Expediente[] = [
  { id: '1', codigo: 'EXP-2026-001', delito: 'Robo a propiedad', abierto: true  },
  { id: '2', codigo: 'EXP-2026-002', delito: 'Fraude financiero', abierto: true  },
  { id: '3', codigo: 'EXP-2026-003', delito: 'Ciberdelito',       abierto: true  },
  { id: '4', codigo: 'EXP-2026-004', delito: 'Contrabando',       abierto: false },
  { id: '5', codigo: 'EXP-2026-005', delito: 'Hurto menor',       abierto: true  },
  { id: '6', codigo: 'EXP-2026-006', delito: 'Vandalismo',        abierto: false },
  { id: '7', codigo: 'EXP-2026-007', delito: 'Extorsión',         abierto: true  },
  { id: '8', codigo: 'EXP-2026-008', delito: 'Falsificación',     abierto: true  },
]

export function Paso1_mp() {
  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>Expedientes Policiales - Hernán Varas</Text>
      <FlatList<Expediente>
        data={EXPEDIENTES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaExpediente_mp expediente={item} />}
      />
    </SafeAreaView>
  )
}

export default Paso1_mp

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