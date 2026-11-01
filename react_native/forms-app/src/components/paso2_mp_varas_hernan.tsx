import { StyleSheet, ActivityIndicator, SafeAreaView, FlatList, Text } from 'react-native'
import { useState, useCallback } from 'react'
import { Expediente, EXPEDIENTES } from './paso1_mp_varas_hernan'
import { Paso2Separador_mp } from './paso2Separador_mp_varas_hernan'
import { Paso2ListaVacia_mp } from './paso2ListaVacia_mp_varas_hernan'
import { Paso1FilaExpediente_mp } from './paso1FilaExpediente_mp_varas_hernan'

const PAGINA_2: Expediente[] = [
  { id: '9',  codigo: 'EXP-2026-009', delito: 'Tráfico ilícito',  abierto: true  },
  { id: '10', codigo: 'EXP-2026-010', delito: 'Suplantación',    abierto: false },
]

export function Paso2_mp() {
  const [datos, setDatos] = useState<Expediente[]>(EXPEDIENTES)
  const [refrescando, setRefrescando] = useState(false)
  const [cargandoMas, setCargandoMas] = useState(false)
  const [paginaActual, setPaginaActual] = useState(1)

  const onRefresh = useCallback(() => {
    setRefrescando(true)
    setTimeout(() => {
      setDatos(EXPEDIENTES)
      setPaginaActual(1)
      setRefrescando(false)
    }, 1000)
  }, [])

  const onEndReached = useCallback(() => {
    if (cargandoMas || paginaActual >= 2) return
    setCargandoMas(true)
    setTimeout(() => {
      setDatos((prev) => [...prev, ...PAGINA_2])
      setPaginaActual(2)
      setCargandoMas(false)
    }, 800)
  }, [cargandoMas, paginaActual])

  return (
    <SafeAreaView style={styles2.contenedor}>
      <Text style={styles2.titulo}>Expedientes · Hernán Varas · p.{paginaActual}</Text>
      <FlatList<Expediente>
        data={datos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaExpediente_mp expediente={item} />}
        ItemSeparatorComponent={Paso2Separador_mp}
        ListEmptyComponent={<Paso2ListaVacia_mp />}
        refreshing={refrescando}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.3}
        ListFooterComponent={() =>
          cargandoMas ? (
            <ActivityIndicator style={{ margin: 16 }} color="#1565c0" />
          ) : null
        }
      />
    </SafeAreaView>
  )
}

const styles2 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
  Paso2Separador: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 12,
  },
  vacio: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  vacioTexto: { fontSize: 16, fontWeight: '600', color: '#555' },
  vacioSub: { fontSize: 13, color: '#999', marginTop: 6 },
})