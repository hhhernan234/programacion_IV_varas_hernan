import { StyleSheet, Text, View } from 'react-native'

export function Paso2ListaVacia_mp() {
  return (
    <View style={styles2.vacio}>
      <Text style={styles2.vacioTexto}>Sin expedientes registrados</Text>
      <Text style={styles2.vacioSub}>Agrega uno nuevo con el botón +</Text>
    </View>
  )
}

const styles2 = StyleSheet.create({
  vacio: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  vacioTexto: { fontSize: 16, fontWeight: '600', color: '#555' },
  vacioSub: { fontSize: 13, color: '#999', marginTop: 6 },
})