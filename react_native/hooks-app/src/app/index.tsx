// app/index.tsx
import { Text, View } from 'react-native'
import { Paso1_mp } from './paso1_mp_varas_hernan'
import { Paso2_mp } from './paso2_mp_varas_hernan'
import { Paso3_mp } from './paso3_mp_varas_hernan'
import { Paso3Sumar_mp } from './paso3Sumar_mp_varas_hernan'
import { Paso4_mp } from './paso4_mp_varas_hernan'

// ┌──────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos. │
// │  1   Paso 1  useState — contador de intentos de contacto        │
// │  2   Paso 2  useEffect — monitor de radio con setInterval       │
// │  3   Paso 3  useRef — foco en TextInput y contador sin re-render│
// │  33  Paso 3  Sumar evidencias (useRef)                          │
// │  4   Paso 4  Hooks nativos de RN — dimensiones, esquema de color│
// └──────────────────────────────────────────────────────────────────┘
const PASO: number = 4

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1_mp />
    case 2:
      return <Paso2_mp />
    case 3:
      return <Paso3_mp />
    case 33:
      return <Paso3Sumar_mp />
    case 4:
      return <Paso4_mp />
    default:
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}
