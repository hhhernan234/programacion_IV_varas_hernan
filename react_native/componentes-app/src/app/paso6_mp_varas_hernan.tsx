import { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card, FilaInfo } from './paso2_mp_varas_hernan'
import { BadgeEstado } from './paso3_mp_varas_hernan'
import { ModalConfirm } from './paso5_mp_varas_hernan'

// ─── Paso 6 — Pantalla completa de detalle ───────────────────────────

interface AccionProps {
  etiqueta: string
  color: string
  onPress: () => void
}

function BotonAccion({ etiqueta, color, onPress }: AccionProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        estilos6.botonAccion,
        { backgroundColor: color },
        pressed && { opacity: 0.75 },
      ]}
      onPress={onPress}
    >
      <Text style={estilos6.textoBotonAccion}>{etiqueta}</Text>
    </Pressable>
  )
}

export function Paso6_mp() {
  const [modalVisible, setModalVisible] = useState(false)
  const [accionPendiente, setAccionPendiente] = useState<string>('')
  const [log, setLog] = useState<string[]>([])

  function pedirConfirmacion(accion: string) {
    setAccionPendiente(accion)
    setModalVisible(true)
  }

  function ejecutarAccion() {
    const entrada = `[${new Date().toLocaleTimeString()}] ${accionPendiente} ejecutado en EXP-2026-001`
    setLog((prev) => [entrada, ...prev])
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={estilos6.safeArea}>
      {/* Cabecera fija — fuera del scroll */}
      <View style={estilos6.cabecera}>
        <View>
          <Text style={estilos6.cabNombre}>EXP-2026-001</Text>
          <Text style={estilos6.cabIp}>Robo agravado · Inspector Hernan Varas</Text>
        </View>
        <BadgeEstado estado="abierto" mostrarIcono tamaño={12} />
      </View>

      {/* Contenido desplazable */}
      <ScrollView
        contentContainerStyle={estilos6.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {/* Card de datos del caso */}
        <Card titulo="Datos del caso" subtitulo="Última actualización: hace 30 min">
          <FilaInfo etiqueta="Inspector" valor="Hernan Varas" />
          <FilaInfo etiqueta="Delito" valor="Robo agravado" />
          <FilaInfo etiqueta="Gravedad" valor="Alta · 8/10" />
          <FilaInfo etiqueta="Evidencias" valor="12 recolectadas" />
          <FilaInfo etiqueta="Tiempo abierto" valor="8 días" />
        </Card>

        {/* Card de partes involucradas */}
        <Card titulo="Partes involucradas">
          <FilaInfo etiqueta="Denunciante" valor="Banco Central S.A." />
          <FilaInfo etiqueta="Sospechosos" valor="2 identificados" />
          <FilaInfo etiqueta="Testigos" valor="4 declaraciones" />
          <FilaInfo etiqueta="Comisaría" valor="Centro" />
          <FilaInfo etiqueta="Fiscalía" valor="Unidad de Patrimonio" />
        </Card>

        {/* Card de acciones */}
        <Card titulo="Acciones">
          <View style={estilos6.gridAcciones}>
            <BotonAccion
              etiqueta="Asignar"
              color="#1565c0"
              onPress={() => pedirConfirmacion('Asignación')}
            />
            <BotonAccion
              etiqueta="Archivar"
              color="#b71c1c"
              onPress={() => pedirConfirmacion('Archivo')}
            />
            <BotonAccion
              etiqueta="Citar testigo"
              color="#2e7d32"
              onPress={() => pedirConfirmacion('Citación de testigo')}
            />
            <BotonAccion
              etiqueta="Ver evidencias"
              color="#6a1b9a"
              onPress={() => pedirConfirmacion('Descarga de evidencias')}
            />
          </View>
        </Card>

        {/* Card de bitácora de actividad */}
        {log.length > 0 && (
          <Card titulo="Actividad reciente">
            {log.map((entrada, i) => (
              <Text key={i} style={estilos6.entradaLog}>{entrada}</Text>
            ))}
          </Card>
        )}
      </ScrollView>

      {/* Modal reutilizado del Paso 5 */}
      <ModalConfirm
        visible={modalVisible}
        titulo={`Confirmar: ${accionPendiente}`}
        mensaje={`¿Ejecutar "${accionPendiente}" en el expediente EXP-2026-001?\nEsta acción quedará registrada en el expediente.`}
        etiquetaConfirmar="Ejecutar"
        onConfirmar={ejecutarAccion}
        onCancelar={() => setModalVisible(false)}
      />
    </SafeAreaView>
  )
}

const estilos6 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  cabecera: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e7ef',
  },
  cabNombre: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a237e',
  },
  cabIp: {
    fontSize: 12,
    color: '#78909c',
    fontFamily: 'monospace',
    marginTop: 2,
  },
  scrollContenido: {
    padding: 16,
    gap: 14,
    paddingBottom: 40,
  },
  gridAcciones: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  botonAccion: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    minWidth: '45%',
    alignItems: 'center',
  },
  textoBotonAccion: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  entradaLog: {
    fontSize: 11,
    color: '#2e7d32',
    fontFamily: 'monospace',
    lineHeight: 18,
  },
})
