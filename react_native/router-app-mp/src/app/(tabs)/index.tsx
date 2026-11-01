// app/(tabs)/index.tsx
import { Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function TabInicio_mp() {
  return (
    <View style={styles.contenedor}>
      <Stack.Screen options={{ title: 'Panel del inspector' }} />
      <Text style={styles.titulo}>Resumen de casos — Hernan Varas</Text>
      <Text style={styles.dato}>8 expedientes abiertos</Text>
      <Text style={styles.dato}>4 alertas activas</Text>
      <Text style={styles.dato}>Casos resueltos este mes: 12</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  titulo: { fontSize: 20, fontWeight: '700', color: '#1a237e' },
  dato:   { fontSize: 15, color: '#37474f' },
})
