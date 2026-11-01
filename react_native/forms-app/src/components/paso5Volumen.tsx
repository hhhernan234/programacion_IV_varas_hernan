import { useState } from 'react'
import type { ReactNode } from 'react'
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

type CamposFormulario = {
  largo: string
  ancho: string
  alto: string
}

type ErroresFormulario = {
  largo: string | null
  ancho: string | null
  alto: string | null
}

function validar(campos: CamposFormulario): ErroresFormulario {
  const errores: ErroresFormulario = { largo: null, ancho: null, alto: null }

  for (const campo of Object.keys(campos) as (keyof CamposFormulario)[]) {
    const valor = campos[campo].trim()
    const numero = Number(valor)

    if (valor.length === 0) {
      errores[campo] = 'Este campo es obligatorio'
    } else if (!Number.isFinite(numero) || numero <= 0) {
      errores[campo] = 'Ingresa un número mayor que cero'
    }
  }

  return errores
}

function hayErrores(errores: ErroresFormulario): boolean {
  return Object.values(errores).some((error) => error !== null)
}

function CampoConError({
  etiqueta,
  children,
  error,
}: {
  etiqueta: string
  children: ReactNode
  error: string | null
}) {
  return (
    <View style={styles5.campoWrapper}>
      <Text style={styles5.etiqueta}>{etiqueta}</Text>
      {children}
      {error !== null && <Text style={styles5.textoError}>{error}</Text>}
    </View>
  )
}

export function Paso5Volumen() {
  const [campos, setCampos] = useState<CamposFormulario>({
    largo: '',
    ancho: '',
    alto: '',
  })
  const [errores, setErrores] = useState<ErroresFormulario>({
    largo: null,
    ancho: null,
    alto: null,
  })
  const [volumen, setVolumen] = useState<number | null>(null)

  function actualizarCampo(campo: keyof CamposFormulario, valor: string) {
    setCampos((prev) => ({ ...prev, [campo]: valor }))
    setVolumen(null)
    if (errores[campo] !== null) {
      setErrores((prev) => ({ ...prev, [campo]: null }))
    }
  }

  function onSubmit() {
    const nuevosErrores = validar(campos)
    setErrores(nuevosErrores)
    if (hayErrores(nuevosErrores)) {
      setVolumen(null)
      return
    }

    setVolumen(
      Number(campos.largo) * Number(campos.ancho) * Number(campos.alto)
    )
  }

  return (
    <SafeAreaView style={styles5.contenedor}>
      <ScrollView
        contentContainerStyle={styles5.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles5.titulo}>Calcular volumen</Text>
        <Text style={styles5.subtitulo}>
          Ingresa las tres medidas para calcular el volumen
        </Text>

        <CampoConError etiqueta="Largo *" error={errores.largo}>
          <TextInput
            style={[styles5.campo, errores.largo !== null && styles5.campoError]}
            value={campos.largo}
            onChangeText={(valor) => actualizarCampo('largo', valor)}
            placeholder="Ingresa el largo"
            keyboardType="decimal-pad"
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="Ancho *" error={errores.ancho}>
          <TextInput
            style={[styles5.campo, errores.ancho !== null && styles5.campoError]}
            value={campos.ancho}
            onChangeText={(valor) => actualizarCampo('ancho', valor)}
            placeholder="Ingresa el ancho"
            keyboardType="decimal-pad"
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="Alto *" error={errores.alto}>
          <TextInput
            style={[styles5.campo, errores.alto !== null && styles5.campoError]}
            value={campos.alto}
            onChangeText={(valor) => actualizarCampo('alto', valor)}
            placeholder="Ingresa el alto"
            keyboardType="decimal-pad"
            returnKeyType="done"
            onSubmitEditing={onSubmit}
          />
        </CampoConError>

        <Pressable
          style={({ pressed }) => [
            styles5.botonEnviar,
            pressed && styles5.botonEnviarPresionado,
          ]}
          onPress={onSubmit}
        >
          <Text style={styles5.textoBoton}>Calcular volumen</Text>
        </Pressable>

        {volumen !== null && (
          <View style={styles5.resultado}>
            <Text style={styles5.textoResultado}>
              Volumen: {volumen} unidades³
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles5 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  scroll: { padding: 20, paddingBottom: 40 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#1565c0', marginBottom: 4 },
  subtitulo: { fontSize: 12, color: '#888', marginBottom: 20 },
  campoWrapper: { marginBottom: 16 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1a1a1a',
  },
  campoError: {
    borderColor: '#e53935',
    backgroundColor: '#fff8f8',
  },
  textoError: {
    fontSize: 12,
    color: '#e53935',
    marginTop: 4,
  },
  botonEnviar: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  botonEnviarPresionado: { backgroundColor: '#0d47a1' },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 16 },
  resultado: {
    marginTop: 16,
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
    padding: 12,
  },
  textoResultado: {
    fontFamily: 'monospace',
    fontSize: 15,
    color: '#a8ff78',
  },
})
