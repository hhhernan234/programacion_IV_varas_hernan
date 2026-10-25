import type { ComponentRef } from 'react'
import { useEffect, useRef, useState } from 'react'
import { Pressable, TextInput as RNTextInput, StyleSheet, Text, TextInput, View } from 'react-native'

export function Paso3Sumar_mp() {
  const inputNumero1Ref = useRef<ComponentRef<typeof RNTextInput>>(null)
  const inputNumero2Ref = useRef<ComponentRef<typeof RNTextInput>>(null)

  const [numero1, setNumero1] = useState<string>('')
  const [numero2, setNumero2] = useState<string>('')


  useEffect(() => {
    inputNumero1Ref.current?.focus()
  }, [])
  const intentosSilenciosRef = useRef<number>(0)
  const [ultimoResultado, setUltimoResultado] = useState<string>('—')

  function sumarEvidencias() {
    intentosSilenciosRef.current += 1
    setUltimoResultado(
      `${Number(numero1 || 0) + Number(numero2 || 0)} evidencias — suma #${intentosSilenciosRef.current}`
    )
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Sumar evidencias — Hernan Varas</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Evidencias en la escena A</Text>
        <TextInput
          ref={inputNumero1Ref}
          style={styles.input}
          value={numero1}
          onChangeText={setNumero1}
          placeholder="0"
          placeholderTextColor="#aaa"
          returnKeyType="next"
          onSubmitEditing={() => inputNumero2Ref.current?.focus()}
        />

        <Text style={styles.etiqueta}>Evidencias en la escena B</Text>
        <TextInput
          ref={inputNumero2Ref}
          style={styles.input}
          value={numero2}
          onChangeText={setNumero2}
          placeholder="0"
          placeholderTextColor="#aaa"
          keyboardType="number-pad"
          returnKeyType="done"
        />
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, styles.botonActivo, pressed && { opacity: 0.75 }]}
        onPress={sumarEvidencias}
      >
        <Text style={styles.textoBoton}>Sumar</Text>
      </Pressable>

      <Text style={styles.detalle}>Último resultado: {ultimoResultado}</Text>
      <Text style={styles.detalle}>
        (las sumas silenciosas no causan re-renders)
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
