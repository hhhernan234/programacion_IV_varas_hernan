import type { ComponentRef } from 'react'
import { useEffect, useRef, useState } from 'react'
import {
  Pressable, TextInput as RNTextInput,
  StyleSheet, Text, TextInput, View
} from 'react-native'

export function Paso3_mp() {
  // ── Uso 1: referencia a un TextInput para foco programático ─────────
  const inputNombreRef = useRef<ComponentRef<typeof RNTextInput>>(null)
  const inputTelefonoRef = useRef<ComponentRef<typeof RNTextInput>>(null)

  const [nombre, setNombre] = useState<string>('')
  const [telefono, setTelefono] = useState<string>('')

  // Foco automático al montar la pantalla
  useEffect(() => {
    inputNombreRef.current?.focus()
  }, [])

  // ── Uso 2: contador de intentos silencioso (sin re-render) ───────────
  const intentosSilenciosRef = useRef<number>(0)
  const [ultimoRegistro, setUltimoRegistro] = useState<string>('—')

  function registrarTestigo() {
    intentosSilenciosRef.current += 1   // muta sin re-render
    // Solo actualizamos el estado (y disparamos re-render) al registrar
    setUltimoRegistro(
      `${nombre || 'testigo'} (tel. ${telefono || 'sin teléfono'}) — intento #${intentosSilenciosRef.current}`
    )
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Registrar testigo — Hernan Varas</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Nombre del testigo</Text>
        <TextInput
          ref={inputNombreRef}
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Carlos Pérez"
          placeholderTextColor="#aaa"
          autoCapitalize="words"
          returnKeyType="next"
          onSubmitEditing={() => inputTelefonoRef.current?.focus()}
        />

        <Text style={styles.etiqueta}>Teléfono</Text>
        <TextInput
          ref={inputTelefonoRef}
          style={styles.input}
          value={telefono}
          onChangeText={setTelefono}
          placeholder="0991234567"
          placeholderTextColor="#aaa"
          keyboardType="number-pad"
          returnKeyType="done"
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
        onPress={registrarTestigo}
      >
        <Text style={styles.textoBoton}>Registrar</Text>
      </Pressable>

      <Text style={styles.detalle}>Último registro: {ultimoRegistro}</Text>
      <Text style={styles.detalle}>
        (los reintentos silenciosos no causan re-renders)
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    marginBottom: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tarjeta: {
    alignItems: 'center',
    padding: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
  },
  etiqueta: {
    marginBottom: 12,
    fontWeight: 'bold',
    color: '#757575',
    fontSize: 13
  },
  input: {
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  latencia: {
    marginBottom: 10,
    fontSize: 36,
    fontWeight: 'bold',
  },
  ciclos: {
    marginBottom: 8,
    fontSize: 14,
  },
  detalle: {

  },
  boton: {
    alignItems: 'center',
    marginTop: 20,
    padding: 16,
    borderRadius: 8,
  },
  botonActivo: {
    backgroundColor: '#2e7d32',
  },
  botonDetener: {
    backgroundColor: '#c62828',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  formulario: {
    padding: 14
  }
})
