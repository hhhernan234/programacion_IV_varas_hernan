// app/index.tsx — función Paso4_mp
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native'

// Función utilitaria que devuelve el estilo de sombra correcto según plataforma
function sombra(nivel: 1 | 2 | 3): object {
  return Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: nivel },
      shadowOpacity: 0.08 + nivel * 0.04,
      shadowRadius: nivel * 2,
    },
    android: {
      elevation: nivel * 3,
    },
    // En web usamos boxShadow para que la sombra también se vea en el navegador
    default: {
      boxShadow: `0px ${nivel}px ${nivel * 4}px rgba(0, 0, 0, 0.18)`,
    },
  }) ?? {}
}

type EstadoExpediente = 'abierto' | 'urgente' | 'archivado'

export function Paso4_mp() {
  const plataforma = Platform.OS

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f5f7fa' }}
      contentContainerStyle={{ padding: 16, gap: 16 }}
    >
      <View style={estilosPaso4.cabecera}>
        <Text style={estilosPaso4.plataforma}>
          Plataforma detectada: {plataforma} · Inspector Hernan Varas
        </Text>
      </View>

      {/* ── Tarjeta con sombra nivel 1 ──────────────────────────── */}
      <TarjetaSombreada nivel={1} titulo="EXP-2026-001" estado="abierto" delito="Robo agravado" />

      {/* ── Tarjeta con sombra nivel 2 ──────────────────────────── */}
      <TarjetaSombreada nivel={2} titulo="EXP-2026-002" estado="urgente" delito="Homicidio" />

      {/* ── Tarjeta con sombra nivel 3 ──────────────────────────── */}
      <TarjetaSombreada nivel={3} titulo="EXP-2026-003" estado="archivado" delito="Hurto menor" />

      {/* ── Comparativa visual del código ──────────────────────── */}
      <View style={estilosPaso4.bloque}>
        <Text style={estilosPaso4.bloqueTexto}>
          {Platform.OS === 'ios'
            ? 'iOS: usando shadowColor + shadowOffset + shadowOpacity + shadowRadius'
            : Platform.OS === 'android'
              ? 'Android: usando elevation'
              : 'Web: usando boxShadow'}
        </Text>
      </View>

    </ScrollView>
  )
}

function TarjetaSombreada({
  nivel,
  titulo,
  estado,
  delito,
}: {
  nivel: 1 | 2 | 3
  titulo: string
  estado: EstadoExpediente
  delito: string
}) {
  const coloresEstado: Record<EstadoExpediente, string> = {
    abierto:   '#2e7d32',
    urgente:   '#e65100',
    archivado: '#6b7280',
  }

  return (
    <View style={[estilosPaso4.tarjeta, sombra(nivel)]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={estilosPaso4.titulo}>{titulo}</Text>
        <View style={[estilosPaso4.badge, { backgroundColor: coloresEstado[estado] }]}>
          <Text style={estilosPaso4.badgeTexto}>{estado}</Text>
        </View>
      </View>
      <Text style={estilosPaso4.delito}>{delito}</Text>
      <Text style={estilosPaso4.nivelTexto}>Sombra nivel {nivel}</Text>
    </View>
  )
}

const estilosPaso4 = StyleSheet.create({
  cabecera: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    padding: 12,
  },
  plataforma: { color: '#fff', fontWeight: '700', fontSize: 14 },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    gap: 6,
  },
  titulo:     { fontSize: 15, fontWeight: '700', color: '#1a1a2e' },
  delito:     { fontSize: 12, color: '#6b7280' },
  nivelTexto: { fontSize: 11, color: '#9ca3af', marginTop: 4 },
  badge: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 999,
  },
  badgeTexto: { color: '#fff', fontSize: 11, fontWeight: '600' },
  bloque: {
    backgroundColor: '#fef3c7',
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#f59e0b',
  },
  bloqueTexto: { fontSize: 13, color: '#92400e' },
})
