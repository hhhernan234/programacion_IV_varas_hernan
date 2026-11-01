// app/servidores/[id].tsx — detalle de expediente
import { router, Stack, useLocalSearchParams } from 'expo-router'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

interface DetalleExpediente {
  numero:           string
  delito:           string
  comisaria:        string
  gravedad:         string
  evidencias:       string
  testigos:         string
  diligencias:      string[]
  ultimoMovimiento: string
}

const DB_EXPEDIENTES: Record<string, DetalleExpediente> = {
  '1': {
    numero: 'EXP-2026-001', delito: 'Robo agravado', comisaria: 'Comisaría Centro',
    gravedad: 'Alta · 8/10', evidencias: '12 recolectadas',
    testigos: '4 declaraciones',
    diligencias: ['Allanamiento solicitado', 'Peritaje de huellas', 'Revisión de cámaras'],
    ultimoMovimiento: 'hace 12 min',
  },
  '2': {
    numero: 'EXP-2026-002', delito: 'Homicidio', comisaria: 'Comisaría Norte',
    gravedad: 'Muy alta · 10/10', evidencias: '25 recolectadas',
    testigos: '6 declaraciones',
    diligencias: ['Autopsia', 'Balística'],
    ultimoMovimiento: 'hace 5 min',
  },
  '3': {
    numero: 'EXP-2026-003', delito: 'Secuestro', comisaria: 'Unidad Antisecuestros',
    gravedad: 'Muy alta · 9/10', evidencias: '7 recolectadas',
    testigos: '2 declaraciones',
    diligencias: ['Rastreo de llamadas', 'Vigilancia', 'Negociación'],
    ultimoMovimiento: 'hace 2 min',
  },
  '4': {
    numero: 'EXP-2026-004', delito: 'Fraude', comisaria: 'Delitos Económicos',
    gravedad: 'Media · 5/10', evidencias: '4 recolectadas',
    testigos: '1 declaración',
    diligencias: ['Rastreo de transferencias', 'Citación a sospechoso'],
    ultimoMovimiento: 'sin movimiento',
  },
  '5': {
    numero: 'EXP-2026-005', delito: 'Hurto menor', comisaria: 'Comisaría Sur',
    gravedad: 'Baja · 2/10', evidencias: '1 recolectada',
    testigos: '1 declaración',
    diligencias: ['Archivo definitivo'],
    ultimoMovimiento: 'hace 8 s',
  },
}

function FilaDetalle({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <View style={styles.fila}>
      <Text style={styles.etiqueta}>{etiqueta}</Text>
      <Text style={styles.valor}>{valor}</Text>
    </View>
  )
}

export default function DetalleExpediente_mp() {
  // useLocalSearchParams lee el segmento capturado por [id].tsx
  const { id } = useLocalSearchParams<{ id: string }>()
  const expediente = DB_EXPEDIENTES[id ?? '']

  if (!expediente) {
    return (
      <View style={styles.centrado}>
        <Stack.Screen options={{ title: 'No encontrado' }} />
        <Text style={styles.error}>Expediente "{id}" no encontrado</Text>
        <Text style={styles.enlace} onPress={() => router.back()}>
          ← Volver a la lista
        </Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.contenido}>
      <Stack.Screen options={{ title: expediente.numero }} />

      <View style={styles.encabezado}>
        <Text style={styles.nombreServidor}>{expediente.numero}</Text>
        <Text style={styles.ipServidor}>{expediente.delito}</Text>
        <Text style={styles.sistemaServidor}>{expediente.comisaria} · Inspector Hernan Varas</Text>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>DATOS DEL CASO</Text>
        <FilaDetalle etiqueta="Gravedad"   valor={expediente.gravedad} />
        <FilaDetalle etiqueta="Evidencias" valor={expediente.evidencias} />
        <FilaDetalle etiqueta="Testigos"   valor={expediente.testigos} />
      </View>

      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>DILIGENCIAS</Text>
        <FilaDetalle etiqueta="Último movimiento" valor={expediente.ultimoMovimiento} />
        {expediente.diligencias.map((d) => (
          <FilaDetalle key={d} etiqueta="Diligencia" valor={d} />
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll:      { flex: 1, backgroundColor: '#f0f4f8' },
  contenido:   { padding: 16, gap: 16 },
  centrado:    { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 },
  error:       { fontSize: 16, color: '#c62828' },
  enlace:      { fontSize: 14, color: '#1565c0' },
  encabezado: {
    backgroundColor: '#1565c0',
    borderRadius: 12,
    padding: 20,
    gap: 4,
  },
  nombreServidor: { fontSize: 22, fontWeight: '700', color: '#fff' },
  ipServidor:     { fontSize: 14, color: '#bbdefb', fontFamily: 'monospace' },
  sistemaServidor:{ fontSize: 13, color: '#90caf9' },
  seccion: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    gap: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  tituloSeccion: {
    fontSize: 11,
    fontWeight: '700',
    color: '#78909c',
    letterSpacing: 1.2,
    marginBottom: 2,
  },
  fila:     { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  etiqueta: { fontSize: 13, color: '#546e7a', fontWeight: '500' },
  valor:    { fontSize: 13, color: '#1a1a1a', fontFamily: 'monospace', flexShrink: 1, textAlign: 'right' },
})
