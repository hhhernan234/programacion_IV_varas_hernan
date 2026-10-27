// app/index.tsx — añade debajo de styles3
import { useState } from 'react'
import { View, TextInput, StyleSheet, Text, SafeAreaView } from 'react-native'

export function Paso4Volumen() {
  const [largo, setLargo] = useState('')
  const [ancho, setAncho] = useState('')
  const [alto, setAlto] = useState('')

  const volumen =
    largo !== '' && ancho !== '' && alto !== ''
      ? Number(largo) * Number(ancho) * Number(alto)
      : null

  return (
    <SafeAreaView style={styles4.contenedor}>
      <Text style={styles4.titulo}>Calcular volumen</Text>

      <Text style={styles4.etiqueta}>Largo</Text>
      <TextInput
        style={styles4.campo}
        value={largo}
        onChangeText={setLargo}
        placeholder="Ingresa el largo"
        keyboardType="decimal-pad"
        returnKeyType="next"
      />

      <Text style={styles4.etiqueta}>Ancho</Text>
      <TextInput
        style={styles4.campo}
        value={ancho}
        onChangeText={setAncho}
        placeholder="Ingresa el ancho"
        keyboardType="decimal-pad"
        returnKeyType="next"
      />

      <Text style={styles4.etiqueta}>Alto</Text>
      <TextInput
        style={styles4.campo}
        value={alto}
        onChangeText={setAlto}
        placeholder="Ingresa el alto"
        keyboardType="decimal-pad"
        returnKeyType="done"
      />

      <View style={styles4.preview}>
        <Text style={styles4.previewTexto}>
          Volumen: {volumen === null ? 'Ingresa las tres medidas' : `${volumen} unidades³`}
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles4 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8', padding: 16 },
  titulo: { fontSize: 18, fontWeight: '700', color: '#1565c0', marginBottom: 20 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 14,
    color: '#1a1a1a',
  },
  preview: {
    marginTop: 8,
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    padding: 12,
  },
  previewTexto: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: '#a8ff78',
  },
})