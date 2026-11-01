// app/index.tsx — función Paso1
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export function Paso1() {
  return (
    <ScrollView style={estilosPaso1.pantalla} contentContainerStyle={{ gap: 24, padding: 16 }}>

      {/* ── Columna (por defecto) ───────────────────────────────── */}
      <Text style={estilosPaso1.etiqueta}>Los Picapiedras(por defecto)</Text>
      <View style={estilosPaso1.columna}>
        <View style={[estilosPaso1.caja, { backgroundColor: '#1565c0' }]}>
          <Text style={estilosPaso1.textoCaja}>Pedro Picapiedras</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#1976d2' }]}>
          <Text style={estilosPaso1.textoCaja}>Bilma</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#1e88e5' }]}>
          <Text style={estilosPaso1.textoCaja}></Text>
        </View>
      </View>

      {/* ── Fila con justifyContent: 'space-between' ───────────── */}
      <Text style={estilosPaso1.etiqueta}>
        PERSONAJES
      </Text>
      <View style={estilosPaso1.fila}>
        <View style={[estilosPaso1.caja, { backgroundColor: '#332e7d' }]}>
          <Text style={estilosPaso1.textoCaja}>Dino</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#2632a0' }]}>
          <Text style={estilosPaso1.textoCaja}>Pablo Marmol</Text>
        </View>
        <View style={[estilosPaso1.caja, { backgroundColor: '#5068b6' }]}>
          <Text style={estilosPaso1.textoCaja}>Betty Mármol </Text>
        </View>
      </View>

      {/* ── flex: 1 proporcional ───────────────────────────────── */}
      <Text style={estilosPaso1.etiqueta}>Personajes secundarios </Text>
      <View style={estilosPaso1.filaFlex}>
        <View style={{ flex: 2, backgroundColor: '#dfcf43', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1.textoCaja}>prod-db (flex: 2)</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#dac937', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1.textoCaja}>backup</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#d9db3e', padding: 8, borderRadius: 6 }}>
          <Text style={estilosPaso1.textoCaja}>logs</Text>
        </View>
      </View>

      {/* ── flexWrap + gap ──────────────────────────────────────── */}
      <Text style={estilosPaso1.etiqueta}>Familia Picapiedra</Text>
      <View style={estilosPaso1.rejilla}>
        {['Señor Rajuela', 'La señora Traka', 'Gran Gazú', 'Capitán Cavernícola'].map((nombre) => (
          <View key={nombre} style={estilosPaso1.chip}>
            <Text style={estilosPaso1.textoChip}>{nombre}</Text>
          </View>
        ))}
      </View>

    </ScrollView>
  )
}

const estilosPaso1 = StyleSheet.create({
  pantalla:   { flex: 1, backgroundColor: '#f5f7fa' },
  etiqueta:   { fontSize: 12, color: '#6b7280', fontFamily: 'monospace' },
  columna: {
    flexDirection: 'column', // explícito para que sea visible
    gap: 8,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filaFlex: {
    flexDirection: 'row',
    gap: 6,
  },
  caja: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoCaja: { color: '#fff', fontWeight: '600', fontSize: 13 },
  rejilla: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    backgroundColor: '#1565c0',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  textoChip: { color: '#fff', fontSize: 13 },
})