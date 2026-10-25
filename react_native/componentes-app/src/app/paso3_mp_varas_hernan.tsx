import { Pressable, StyleSheet, Text, View } from 'react-native'

// ─── Paso 3 — Props opcionales ───────────────────────────────────────

type EstadoExpediente = 'abierto' | 'investigando' | 'archivado' | 'urgente' | 'revision'

interface BadgeEstadoProps {
  estado: EstadoExpediente
  tamaño?: number
  mostrarIcono?: boolean
}

const COLOR_ESTADO: Record<EstadoExpediente, { fondo: string; texto: string }> = {
  abierto:      { fondo: '#e8f5e9', texto: '#2e7d32' },
  investigando: { fondo: '#fff8e1', texto: '#f57f17' },
  archivado:    { fondo: '#f5f5f5', texto: '#616161' },
  urgente:      { fondo: '#fce4ec', texto: '#c62828' },
  revision:     { fondo: '#e1f5fe', texto: '#0288d1' },
}

const ICONO_ESTADO: Record<EstadoExpediente, string> = {
  abierto:      '●',
  investigando: '◐',
  archivado:    '○',
  urgente:      '✕',
  revision:     '🔍',
}

export function BadgeEstado({
  estado,
  tamaño = 12,
  mostrarIcono = false,
}: BadgeEstadoProps) {
  const colores = COLOR_ESTADO[estado]
  return (
    <View style={[estilos3.badge, { backgroundColor: colores.fondo }]}>
      {mostrarIcono && (
        <Text style={[estilos3.icono, { color: colores.texto, fontSize: tamaño }]}>
          {ICONO_ESTADO[estado]}{' '}
        </Text>
      )}
      <Text style={[estilos3.textoBadge, { color: colores.texto, fontSize: tamaño }]}>
        {estado.toUpperCase()}
      </Text>
    </View>
  )
}

interface FilaExpedienteProps {
  caso: string
  numero: string
  estado: EstadoExpediente
  diasAbierto?: number     // días — opcional
  onPress?: () => void
}

function FilaExpediente({ caso, numero, estado, diasAbierto, onPress }: FilaExpedienteProps) {
  return (
    <Pressable onPress={onPress} style={estilos3.fila}>
      <View style={estilos3.infoIzq}>
        <Text style={estilos3.nombreServidor}>{caso}</Text>
        <Text style={estilos3.ipTexto}>{numero}</Text>
      </View>
      <View style={estilos3.infoDer}>
        {diasAbierto !== undefined && (
          <Text style={estilos3.latencia}>{diasAbierto} días</Text>
        )}
        <BadgeEstado estado={estado} mostrarIcono={false} tamaño={11} />
      </View>
    </Pressable>
  )
}

export default function Paso3_mp() {
  return (
    <View style={estilos3.fondo}>
      <Text style={estilos3.titulo}>Expedientes de Hernan Varas</Text>
      <FilaExpediente caso="Robo agravado"  numero="EXP-2026-001" estado="abierto"      diasAbierto={8}   />
      <FilaExpediente caso="Homicidio"      numero="EXP-2026-002" estado="abierto"      diasAbierto={2}   />
      <FilaExpediente caso="Fraude"         numero="EXP-2026-003" estado="investigando" diasAbierto={340} />
      <FilaExpediente caso="Secuestro"      numero="EXP-2026-004" estado="urgente"      />
      <FilaExpediente caso="Hurto menor"    numero="EXP-2026-005" estado="archivado"    />
      <FilaExpediente caso="Cibercrimen"    numero="EXP-2026-006" estado="revision"     />
    </View>
  )
}

const estilos3 = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 8,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 8,
  },
  fila: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  infoIzq: { gap: 2 },
  infoDer: { alignItems: 'flex-end', gap: 4 },
  nombreServidor: { fontSize: 14, fontWeight: '600', color: '#1a1a1a' },
  ipTexto: { fontSize: 12, color: '#90a4ae', fontFamily: 'monospace' },
  latencia: { fontSize: 11, color: '#546e7a' },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  icono: { fontWeight: '700' },
  textoBadge: { fontWeight: '600' },
})
