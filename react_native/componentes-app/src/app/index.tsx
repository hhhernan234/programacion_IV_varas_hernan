// app/index.tsx
import { StyleSheet, Text, View } from 'react-native'
import { Paso1_mp } from './paso1_mp_varas_hernan'
import { Paso2_mp } from './paso2_mp_varas_hernan'
import Paso3_mp from './paso3_mp_varas_hernan'
import { Paso4_mp } from './paso4_mp_varas_hernan'
import { Paso5_mp } from './paso5_mp_varas_hernan'
import { Paso6_mp } from './paso6_mp_varas_hernan'

// ┌──────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos. │
// │  1  Paso 1  Props tipadas — TarjetaExpediente                   │
// │  2  Paso 2  children y composición — Card reutilizable          │
// │  3  Paso 3  Props opcionales y BadgeEstado                      │
// │  4  Paso 4  ScrollView y SafeAreaView                           │
// │  5  Paso 5  Modal de confirmación                               │
// │  6  Paso 6  Pantalla completa — detalle de expediente           │
// └──────────────────────────────────────────────────────────────────┘
const PASO: number = 6

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1_mp />
    case 2:
      return <Paso2_mp />
    case 3:
      return <Paso3_mp />
    case 4:
      return <Paso4_mp />
    case 5:
      return <Paso5_mp />
    case 6:
      return <Paso6_mp />
    default:
      return (
        <View style={styles.centrado}>
          <Text>Paso {PASO}: crea el componente primero</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  centrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
