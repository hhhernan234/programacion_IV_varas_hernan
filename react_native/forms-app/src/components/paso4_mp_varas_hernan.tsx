import { useRef, useState, type ComponentRef } from 'react'
import { View, TextInput, StyleSheet, Text, Pressable, SafeAreaView } from 'react-native'

export function Paso4_mp() {
  const [codigo, setCodigo] = useState('')
  const [delito, setDelito] = useState('')
  const [agente, setAgente] = useState('')
  const [claveAcceso, setClaveAcceso] = useState('')
  const [mostrarPass, setMostrarPass] = useState(false)

  const refDelito = useRef<ComponentRef<typeof TextInput>>(null)
  const refAgente = useRef<ComponentRef<typeof TextInput>>(null)
  const refClave = useRef<ComponentRef<typeof TextInput>>(null)

  return (
    <SafeAreaView style={styles4.contenedor}>
      <Text style={styles4.titulo}>Registro de Expediente - Hernán Varas</Text>

      {/* Código de expediente */}
      <Text style={styles4.etiqueta}>Código de Expediente</Text>
      <TextInput
        style={styles4.campo}
        value={codigo}
        onChangeText={setCodigo}
        placeholder="ej. EXP-2026-001"
        autoCapitalize="characters"
        autoCorrect={false}
        returnKeyType="next"
        onSubmitEditing={() => refDelito.current?.focus()}
      />

      {/* Tipo de delito */}
      <Text style={styles4.etiqueta}>Tipo de Delito</Text>
      <TextInput
        ref={refDelito}
        style={styles4.campo}
        value={delito}
        onChangeText={setDelito}
        placeholder="ej. Robo a propiedad"
        returnKeyType="next"
        onSubmitEditing={() => refAgente.current?.focus()}
      />

      {/* Agente a cargo */}
      <Text style={styles4.etiqueta}>Agente a Cargo</Text>
      <TextInput
        ref={refAgente}
        style={styles4.campo}
        value={agente}
        onChangeText={setAgente}
        placeholder="Hernán Varas"
        returnKeyType="next"
        onSubmitEditing={() => refClave.current?.focus()}
      />

      {/* Clave de confidencialidad */}
      <Text style={styles4.etiqueta}>Clave de Confidencialidad</Text>
      <View style={styles4.campoConIcono}>
        <TextInput
          ref={refClave}
          style={[styles4.campo, { flex: 1, marginBottom: 0 }]}
          value={claveAcceso}
          onChangeText={setClaveAcceso}
          placeholder="••••••••"
          secureTextEntry={!mostrarPass}
          returnKeyType="done"
          autoCapitalize="none"
        />
        <Pressable
          onPress={() => setMostrarPass((v) => !v)}
          style={styles4.togglePass}
        >
          <Text style={styles4.togglePassTexto}>
            {mostrarPass ? 'Ocultar' : 'Ver'}
          </Text>
        </Pressable>
      </View>

      {/* Vista previa */}
      <View style={styles4.preview}>
        <Text style={styles4.previewTexto}>
          [EXP] {codigo || '<código>'} | {delito || '<delito>'} | Agente: {agente || 'Hernán Varas'}
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
  campoConIcono: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  togglePass: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
  },
  togglePassTexto: { fontSize: 13, color: '#1565c0', fontWeight: '600' },
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