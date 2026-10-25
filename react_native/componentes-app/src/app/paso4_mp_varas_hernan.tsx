import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

// ─── Paso 4 — ScrollView y SafeAreaView ──────────────────────────────

const EXPEDIENTES_DEMO = [
  { id: '1',  caso: 'Banco Central',     numero: 'EXP-2026-001', delito: 'Robo agravado',    gravedad: 48, urgencia: 62 },
  { id: '2',  caso: 'Calle Norte',       numero: 'EXP-2026-002', delito: 'Homicidio',        gravedad: 92, urgencia: 88 },
  { id: '3',  caso: 'Transferencias',    numero: 'EXP-2026-003', delito: 'Fraude',           gravedad: 35, urgencia: 40 },
  { id: '4',  caso: 'Joyería Sur',       numero: 'EXP-2026-004', delito: 'Robo',             gravedad: 40, urgencia: 45 },
  { id: '5',  caso: 'Mercado Central',   numero: 'EXP-2026-005', delito: 'Hurto',            gravedad: 10, urgencia: 18 },
  { id: '6',  caso: 'Hijo del alcalde',  numero: 'EXP-2026-006', delito: 'Secuestro',        gravedad: 89, urgencia: 95 },
  { id: '7',  caso: 'Red de estafas',    numero: 'EXP-2026-007', delito: 'Cibercrimen',      gravedad: 70, urgencia: 66 },
  { id: '8',  caso: 'Bodega 12',         numero: 'EXP-2026-008', delito: 'Contrabando',      gravedad: 55, urgencia: 30 },
  { id: '9',  caso: 'Plaza Mayor',       numero: 'EXP-2026-009', delito: 'Disturbios',       gravedad: 25, urgencia: 12 },
  { id: '10', caso: 'Falsificación',     numero: 'EXP-2026-010', delito: 'Documentos falsos', gravedad: 38, urgencia: 22 },
  { id: '11', caso: 'Archivo 2024',      numero: 'EXP-2026-011', delito: 'Hurto menor',      gravedad: 5,  urgencia: 8 },
  { id: '12', caso: 'Puerto Norte',      numero: 'EXP-2026-012', delito: 'Narcotráfico',     gravedad: 80, urgencia: 73 },
]

interface BarraUsoProps {
  porcentaje: number
  etiqueta: string
}

function BarraUso({ porcentaje, etiqueta }: BarraUsoProps) {
  const color = porcentaje > 85 ? '#c62828'
    : porcentaje > 60 ? '#f57f17'
    : '#2e7d32'
  return (
    <View style={estilos4.barraFila}>
      <Text style={estilos4.barraEtiqueta}>{etiqueta}</Text>
      <View style={estilos4.barraFondo}>
        <View style={[estilos4.barraRelleno, { width: `${porcentaje}%` as any, backgroundColor: color }]} />
      </View>
      <Text style={[estilos4.barraPct, { color }]}>{porcentaje}%</Text>
    </View>
  )
}

function TarjetaCaso({ caso, numero, delito, gravedad, urgencia }: typeof EXPEDIENTES_DEMO[0]) {
  return (
    <View style={estilos4.nodo}>
      <View style={estilos4.nodoEncabezado}>
        <Text style={estilos4.nodoNombre}>{caso}</Text>
        <Text style={estilos4.nodoIp}>{numero}</Text>
      </View>
      <Text style={estilos4.nodoOs}>{delito}</Text>
      <BarraUso porcentaje={gravedad} etiqueta="GRV" />
      <BarraUso porcentaje={urgencia} etiqueta="URG" />
    </View>
  )
}

export function Paso4_mp() {
  return (
    <SafeAreaView style={estilos4.safeArea}>
      <View style={estilos4.header}>
        <Text style={estilos4.headerTitulo}>Casos del inspector Hernan Varas</Text>
        <Text style={estilos4.headerSub}>{EXPEDIENTES_DEMO.length} expedientes</Text>
      </View>
      <ScrollView
        style={estilos4.scroll}
        contentContainerStyle={estilos4.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {EXPEDIENTES_DEMO.map((exp) => (
          <TarjetaCaso key={exp.id} {...exp} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const estilos4 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d1b2a',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1c2e40',
  },
  headerTitulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  headerSub: {
    fontSize: 12,
    color: '#78909c',
    marginTop: 2,
  },
  scroll: { flex: 1 },
  scrollContenido: {
    padding: 16,
    gap: 10,
    paddingBottom: 40,
  },
  nodo: {
    backgroundColor: '#132232',
    borderRadius: 10,
    padding: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: '#1c3548',
  },
  nodoEncabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  nodoNombre: {
    fontSize: 14,
    fontWeight: '700',
    color: '#e3f2fd',
  },
  nodoIp: {
    fontSize: 12,
    color: '#4fc3f7',
    fontFamily: 'monospace',
  },
  nodoOs: {
    fontSize: 11,
    color: '#546e7a',
    marginBottom: 2,
  },
  barraFila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  barraEtiqueta: {
    fontSize: 11,
    color: '#78909c',
    width: 28,
  },
  barraFondo: {
    flex: 1,
    height: 4,
    backgroundColor: '#1c3548',
    borderRadius: 2,
    overflow: 'hidden',
  },
  barraRelleno: {
    height: '100%',
    borderRadius: 2,
  },
  barraPct: {
    fontSize: 11,
    fontWeight: '600',
    width: 34,
    textAlign: 'right',
  },
})
