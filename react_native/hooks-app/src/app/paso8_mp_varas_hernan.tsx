// app/index.tsx — función Paso8_mp
import { useConexionSimulada } from '@/hooks/useConexionSimulada'
import { StyleSheet, Text, View } from 'react-native'
import { Paso9_mp } from './paso8TarjetaServidor_mp_varas_hernan'

export function Paso8_mp() {
  const fiscaliaHook = useConexionSimulada('fiscalia')
  const laboratorioHook = useConexionSimulada('laboratorio')

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Enlaces del inspector Hernan Varas</Text>

      <Paso9_mp nombre="Fiscalía" hook={fiscaliaHook} />
      <Paso9_mp nombre="Laboratorio forense" hook={laboratorioHook} />
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    gap: 16,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    marginBottom: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
