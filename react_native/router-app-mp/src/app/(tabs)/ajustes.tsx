// app/(tabs)/ajustes.tsx
import { Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function TabAjustes_mp() {
  return (
    <View style={styles.contenedor}>
      <Stack.Screen options={{ title: 'Ajustes' }} />
      <Text style={styles.titulo}>Configuración</Text>
      <Text style={styles.item}>Inspector: Hernan Varas</Text>
      <Text style={styles.item}>Intervalo de actualización: 30 s</Text>
      <Text style={styles.item}>Notificaciones: activas</Text>
      <Text style={styles.item}>Zona horaria: UTC-5</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 24,
    gap: 16,
  },
  titulo: { fontSize: 20, fontWeight: '700', color: '#1a237e' },
  item:   { fontSize: 15, color: '#37474f' },
})
