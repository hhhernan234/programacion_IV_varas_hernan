// app/index.tsx
import { Paso1 } from '@/components/paso1'
import { Paso2 } from '@/components/paso2'
import { Paso3 } from '@/components/paso3'
import { Paso4 } from '@/components/paso4'
import { Paso4Volumen } from '@/components/paso4Volumen'
import { Paso5Volumen } from '@/components/paso5Volumen'
import { StyleSheet, Text, View } from 'react-native'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos.     │
// │  1  FlatList básica — servidores con nombre/IP/estado               │
// │  2  FlatList avanzada — separadores, vacío, refresh, paginación     │
// │  3  SectionList — servidores agrupados por datacenter               │
// │  4  TextInput tipado — campo de IP con teclado controlado           │
// │  5  Formulario con validación — calcular volumen                    │
// │  6  KeyboardAvoidingView — formulario sin tapado de teclado         │
// └──────────────────────────────────────────────────────────────────────┘
const PASO: number = 5

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso2 />
    case 3:
      return <Paso3 />   
    case 4:
      return <Paso4Volumen />         
    case 5:
      return <Paso5Volumen />  
  
    default:
      return (
        <View style={styles.centrado}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  centrado: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})

// Los componentes Paso1…Paso6 se añaden en cada sección del tutorial.