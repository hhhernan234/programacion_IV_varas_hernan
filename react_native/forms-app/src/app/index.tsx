// app/index.tsx
import { Paso1 } from '@/components/paso1'
import { StyleSheet, Text, View } from 'react-native'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos.     │
// │  1  FlatList básica — servidores con nombre/IP/estado               │
// │  2  FlatList avanzada — separadores, vacío, refresh, paginación     │
// │  3  SectionList — servidores agrupados por datacenter               │
// │  4  TextInput tipado — campo de IP con teclado controlado           │
// │  5  Formulario con validación — agregar servidor                    │
// │  6  KeyboardAvoidingView — formulario sin tapado de teclado         │
// └──────────────────────────────────────────────────────────────────────┘
const PASO = 1

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
  
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