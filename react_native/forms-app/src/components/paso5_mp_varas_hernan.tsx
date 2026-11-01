import { useState } from 'react'
import type { ReactNode } from 'react'
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

// Regex para código de expediente básico (ej. EXP-2026-001)
const REGEX_EXPEDIENTE = /^EXP-\d{4}-\d{3}$/

type CamposFormulario = {
  codigo: string
  delito: string
  oficial: string
}

type ErroresFormulario = {
  codigo: string | null
  delito: string | null
  oficial: string | null
}

function validar(campos: CamposFormulario): ErroresFormulario {
  const errores: ErroresFormulario = { codigo: null, delito: null, oficial: null }

  // Código de expediente: obligatorio y con formato correcto
  if (campos.codigo.trim().length === 0) {
    errores.codigo = 'El código de expediente es obligatorio'
  } else if (!REGEX_EXPEDIENTE.test(campos.codigo.trim())) {
    errores.codigo = 'Formato inválido (ej. EXP-2026-001)'
  }

  // Delito: obligatorio, al menos 3 caracteres
  if (campos.delito.trim().length === 0) {
    errores.delito = 'El tipo de delito es obligatorio'
  } else if (campos.delito.trim().length < 3) {
    errores.delito = 'El delito debe tener al menos 3 caracteres'
  }

  // Oficial responsable: obligatorio, al menos 3 caracteres
  if (campos.oficial.trim().length === 0) {
    errores.oficial = 'El oficial a cargo es obligatorio'
  } else if (campos.oficial.trim().length < 3) {
    errores.oficial = 'El nombre del oficial debe tener al menos 3 caracteres'
  }

  return errores
}

function hayErrores(errores: ErroresFormulario): boolean {
  return Object.values(errores).some((e) => e !== null)
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

export function Paso5_mp() {
  const [campos, setCampos] = useState<CamposFormulario>({
    codigo: '',
    delito: '',
    oficial: 'Hernán Varas',
  })
  const [errores, setErrores] = useState<ErroresFormulario>({
    codigo: null,
    delito: null,
    oficial: null,
  })
  const [enviado, setEnviado] = useState(false)

  function actualizarCampo(campo: keyof CamposFormulario, valor: string) {
    setCampos((prev) => ({ ...prev, [campo]: valor }))
    if (errores[campo] !== null) {
      setErrores((prev) => ({ ...prev, [campo]: null }))
    }
  }

  function onSubmit() {
    const nuevosErrores = validar(campos)
    setErrores(nuevosErrores)
    if (hayErrores(nuevosErrores)) return

    setEnviado(true)
    Alert.alert(
      'Expediente registrado',
      `${campos.codigo} · ${campos.delito} (Oficial: ${campos.oficial})`,
      [
        {
          text: 'Agregar otro',
          onPress: () => {
            setCampos({ codigo: '', delito: '', oficial: 'Hernán Varas' })
            setErrores({ codigo: null, delito: null, oficial: null })
            setEnviado(false)
          },
        },
      ]
    )
  }

  return (
    <SafeAreaView style={styles5.contenedor}>
      <ScrollView
        contentContainerStyle={styles5.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles5.titulo}>Agregar expediente - Hernán Varas</Text>
        <Text style={styles5.subtitulo}>
          Los campos marcados con * son obligatorios
        </Text>

        <CampoConError etiqueta="Código de Expediente *" error={errores.codigo}>
          <TextInput
            style={[
              styles5.campo,
              errores.codigo !== null && styles5.campoError,
            ]}
            value={campos.codigo}
            onChangeText={(v) => actualizarCampo('codigo', v)}
            placeholder="ej. EXP-2026-001"
            autoCapitalize="characters"
            autoCorrect={false}
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="Tipo de Delito *" error={errores.delito}>
          <TextInput
            style={[
              styles5.campo,
              errores.delito !== null && styles5.campoError,
            ]}
            value={campos.delito}
            onChangeText={(v) => actualizarCampo('delito', v)}
            placeholder="ej. Robo a propiedad"
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="Oficial a Cargo *" error={errores.oficial}>
          <TextInput
            style={[
              styles5.campo,
              errores.oficial !== null && styles5.campoError,
            ]}
            value={campos.oficial}
            onChangeText={(v) => actualizarCampo('oficial', v)}
            placeholder="Hernán Varas"
            returnKeyType="done"
            onSubmitEditing={onSubmit}
          />
        </CampoConError>

        <Pressable
          style={({ pressed }) => [
            styles5.botonEnviar,
            pressed && styles5.botonEnviarPresionado,
            enviado && styles5.botonEnviarExito,
          ]}
          onPress={onSubmit}
        >
          <Text style={styles5.textoBoton}>
            {enviado ? '✓ Registrado' : 'Agregar expediente'}
          </Text>
        </Pressable>
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
  botonEnviarExito: { backgroundColor: '#2e7d32' },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 16 },
})