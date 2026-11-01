// app/index.tsx — función Paso3_mp
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

type Expediente = {
  id: string
  nombre: string
  delito: string
  estado: 'abierto' | 'urgente' | 'archivado'
  urgencia: number
}

const EXPEDIENTES: Expediente[] = [
  { id: '1', nombre: 'EXP-2026-001', delito: 'Robo agravado',    estado: 'abierto',   urgencia: 42 },
  { id: '2', nombre: 'EXP-2026-002', delito: 'Fraude',           estado: 'abierto',   urgencia: 38 },
  { id: '3', nombre: 'EXP-2026-003', delito: 'Homicidio',        estado: 'urgente',   urgencia: 91 },
  { id: '4', nombre: 'EXP-2026-004', delito: 'Cibercrimen',      estado: 'abierto',   urgencia: 55 },
  { id: '5', nombre: 'EXP-2026-005', delito: 'Hurto',            estado: 'abierto',   urgencia: 12 },
  { id: '6', nombre: 'EXP-2026-006', delito: 'Hurto menor',      estado: 'archivado', urgencia: 0  },
  { id: '7', nombre: 'EXP-2026-007', delito: 'Disturbios',       estado: 'abierto',   urgencia: 7  },
  { id: '8', nombre: 'EXP-2026-008', delito: 'Secuestro',        estado: 'urgente',   urgencia: 78 },
]

const COLOR_ESTADO: Record<Expediente['estado'], string> = {
  abierto:   '#2e7d32',
  urgente:   '#e65100',
  archivado: '#6b7280',
}

export function Paso3_mp() {
  const { width } = useWindowDimensions()

  // Grid responsivo: 2 columnas en teléfono (< 600dp), 4 en tablet (≥ 600dp)
  const columnas = width >= 600 ? 4 : 2
  const GAP = 12
  const anchoTarjeta = (width - 32 - GAP * (columnas - 1)) / columnas

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f5f7fa' }}
      contentContainerStyle={{ padding: 16, gap: GAP }}
    >
      <Text style={estilosPaso3.cabecera}>
        Inspector Hernan Varas · {width}dp · {columnas} col
      </Text>

      <View style={[estilosPaso3.rejilla, { gap: GAP }]}>
        {EXPEDIENTES.map((exp) => (
          <TarjetaExpediente
            key={exp.id}
            expediente={exp}
            ancho={anchoTarjeta}
          />
        ))}
      </View>
    </ScrollView>
  )
}

function TarjetaExpediente({
  expediente,
  ancho,
}: {
  expediente: Expediente
  ancho: number
}) {
  const colorEstado = COLOR_ESTADO[expediente.estado]

  return (
    <View style={[estilosPaso3.tarjeta, { width: ancho }]}>
      {/* Indicador de estado */}
      <View style={[estilosPaso3.indicadorEstado, { backgroundColor: colorEstado }]} />

      <Text style={estilosPaso3.nombreExpediente} numberOfLines={1}>
        {expediente.nombre}
      </Text>
      <Text style={estilosPaso3.delito}>{expediente.delito}</Text>

      {/* Barra de urgencia */}
      <View style={estilosPaso3.barraFondo}>
        <View
          style={[
            estilosPaso3.barraRelleno,
            {
              width: `${expediente.urgencia}%`,
              backgroundColor: expediente.urgencia > 80 ? '#c62828' : '#1565c0',
            },
          ]}
        />
      </View>
      <Text style={estilosPaso3.urgencia}>Urgencia: {expediente.urgencia}%</Text>
    </View>
  )
}

const estilosPaso3 = StyleSheet.create({
  cabecera: {
    fontSize: 13,
    color: '#6b7280',
    fontFamily: 'monospace',
    marginBottom: 4,
  },
  rejilla: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 12,
    gap: 4,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  indicadorEstado: {
    width: 8,
    height: 8,
    borderRadius: 4,
    alignSelf: 'flex-end',
    marginBottom: 4,
  },
  nombreExpediente: { fontSize: 13, fontWeight: '700', color: '#1a1a2e' },
  delito:           { fontSize: 11, color: '#6b7280' },
  barraFondo: {
    height: 6,
    backgroundColor: '#e2e8f0',
    borderRadius: 3,
    marginTop: 6,
    overflow: 'hidden',
  },
  barraRelleno: { height: 6, borderRadius: 3 },
  urgencia:     { fontSize: 11, color: '#6b7280' },
})
