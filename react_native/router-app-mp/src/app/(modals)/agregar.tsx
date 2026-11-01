// app/(modals)/agregar.tsx
import { router } from 'expo-router'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

export default function ModalAgregarExpediente_mp() {
  const [numero, setNumero] = useState('')
  const [delito, setDelito] = useState('')

  function guardar() {
    if (!numero.trim() || !delito.trim()) return
    // En una app real: persistes en el store o llamas a la API
    console.log('Nuevo expediente:', { numero, delito, inspector: 'Hernan Varas' })
    router.back()   // cierra el modal
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.instruccion}>
        Ingresa los datos del nuevo expediente del inspector Hernan Varas.
      </Text>

      <View style={styles.grupo}>
        <Text style={styles.etiqueta}>Número de expediente</Text>
        <TextInput
          style={styles.input}
          value={numero}
          onChangeText={setNumero}
          placeholder="ej. EXP-2026-009"
          placeholderTextColor="#90a4ae"
          autoCapitalize="characters"
        />
      </View>

      <View style={styles.grupo}>
        <Text style={styles.etiqueta}>Delito</Text>
        <TextInput
          style={styles.input}
          value={delito}
          onChangeText={setDelito}
          placeholder="ej. Robo agravado"
          placeholderTextColor="#90a4ae"
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, pressed && styles.botonPresionado]}
        onPress={guardar}
      >
        <Text style={styles.botonTexto}>Registrar expediente</Text>
      </Pressable>

      <Pressable onPress={() => router.back()}>
        <Text style={styles.cancelar}>Cancelar</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#263238',
    padding: 24,
    gap: 20,
  },
  instruccion: { fontSize: 14, color: '#90a4ae', lineHeight: 20 },
  grupo:       { gap: 6 },
  etiqueta:    { fontSize: 13, color: '#b0bec5', fontWeight: '500' },
  input: {
    backgroundColor: '#37474f',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    color: '#eceff1',
    fontFamily: 'monospace',
    borderWidth: 1,
    borderColor: '#546e7a',
  },
  boton: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  botonPresionado: { backgroundColor: '#0d47a1' },
  botonTexto:      { color: '#fff', fontWeight: '700', fontSize: 16 },
  cancelar:        { textAlign: 'center', color: '#78909c', fontSize: 14, padding: 8 },
})
