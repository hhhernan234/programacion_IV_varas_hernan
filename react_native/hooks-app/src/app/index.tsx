// app/index.tsx
import { Text, View } from 'react-native'
import { Paso1_mp } from './paso1_mp_varas_hernan'
import { Paso2_mp } from './paso2_mp_varas_hernan'
import { Paso3_mp } from './paso3_mp_varas_hernan'
import { Paso3Sumar_mp } from './paso3Sumar_mp_varas_hernan'
import { Paso4_mp } from './paso4_mp_varas_hernan'
import Paso5 from './paso5'
import Paso6 from './paso6'
import Paso7 from './paso7'
import { Paso8 } from './paso8'
import { Paso9, TarjetaServidor } from './paso8TarjetaServidor'

// ┌──────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos. │
// │  1   Paso 1  useState — contador de intentos de contacto        │
// │  2   Paso 2  useEffect — monitor de radio con setInterval       │
// │  3   Paso 3  useRef — foco en TextInput y contador sin re-render│
// │  33  Paso 3  Sumar evidencias (useRef)                          │
// │  4   Paso 4  Hooks nativos de RN — dimensiones, esquema de color│
// └──────────────────────────────────────────────────────────────────┘
const PASO: number = 9

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
    case 5:
      return <Paso5 />
    case 6:
      return <Paso6 />  
    case 7:
      return <Paso7 />  
    case 8:
      return <Paso8 />    
    case 9:
      return <Paso9 />     
    default:
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}
