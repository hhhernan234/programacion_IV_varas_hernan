// app/index.tsx
import { Text, View } from 'react-native'
import { Paso1_mp } from './paso1_mp_varas_hernan'
import { Paso2_mp } from './paso2_mp_varas_hernan'

// ┌──────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos. │
// │  1  Paso 1  Texto y vistas básicas                               │
// │  2  Paso 2  Imágenes y botones                                   │
// └──────────────────────────────────────────────────────────────────┘
const PASO: number = 2

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1_mp />
    case 2:
      return <Paso2_mp />
    default:
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}
