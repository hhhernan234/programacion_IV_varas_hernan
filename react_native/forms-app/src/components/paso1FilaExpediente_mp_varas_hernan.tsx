import { StyleSheet, Text, View } from 'react-native'
import { Expediente } from './paso1_mp_varas_hernan'

export function Paso1FilaExpediente_mp({ expediente }: { expediente: Expediente }) {
  return (
    <View style={styles1.fila}>
      <View style={styles1.info}>
        <Text style={styles1.codigo}>{expediente.codigo}</Text>
        <Text style={styles1.delito}>{expediente.delito}</Text>
      </View>
      <View
        style={[
          styles1.estado,
          expediente.abierto ? styles1.estadoAbierto : styles1.estadoCerrado,
        ]}
      >
        <Text style={styles1.textoEstado}>
          {expediente.abierto ? 'EN PROCESO' : 'ARCHIVADO'}
        </Text>
      </View>
    </View>
  )
}

const styles1 = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginTop: 8,
    borderRadius: 8,
    padding: 12,
  },
  info: { flex: 1 },
  codigo: { fontSize: 15, fontWeight: '600', color: '#1a1a1a' },
  delito: { fontSize: 12, color: '#666', marginTop: 2 },
  estado: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  estadoAbierto: { backgroundColor: '#e8f5e9' },
  estadoCerrado: { backgroundColor: '#ffebee' },
  textoEstado: { fontSize: 11, fontWeight: '700' },
})