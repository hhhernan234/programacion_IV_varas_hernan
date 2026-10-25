import { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type EstadoEnlace = 'transmitiendo' | 'ok' | 'perdido' | 'inactivo'

export function Paso2_mp() {
  const [latencia, setLatencia] = useState<number | null>(null)
  const [estado, setEstado] = useState<EstadoEnlace>('inactivo')
  const [activo, setActivo] = useState<boolean>(false)
  const [ciclos, setCiclos] = useState<number>(0)
  const [senalesPerdidas, setSenalesPerdidas] = useState<number>(0)

  useEffect(() => {
    if (!activo) return   // no arrancar el intervalo si el monitoreo está detenido

    const intervalo = setInterval(() => {
      setEstado('transmitiendo')

      // Simula latencia de radio: número aleatorio entre 10 ms y 200 ms
      // con un 15 % de probabilidad de perder la señal
      setTimeout(() => {
        const falla = Math.random() < 0.15
        if (falla) {
          setLatencia(null)
          setEstado('perdido')
          setSenalesPerdidas(p => p + 1)
        } else {
          const ms = Math.floor(Math.random() * 190) + 10
          setLatencia(ms)
          setEstado('ok')
        }
        setCiclos(c => c + 1)
      }, 400)
    }, 500)

    // ← función de limpieza: cancela el intervalo
    return () => clearInterval(intervalo)
  }, [activo])   // se re-ejecuta cuando 'activo' cambia

  const colorEstado: Record<EstadoEnlace, string> = {
    transmitiendo: '#1565c0',
    ok:            '#2e7d32',
    perdido:       '#c62828',
    inactivo:      '#757575',
  }

  const porcentajePerdidas = ciclos > 0
    ? (senalesPerdidas / ciclos * 100).toFixed(1) + '%'
    : '0.0%'

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Monitor de radio — Unidad 07</Text>

      <View style={styles.tarjeta}>
        <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>
          {estado.toUpperCase()}
        </Text>
        <Text style={styles.latencia}>
          {latencia !== null ? `${latencia} ms` : '— ms'}
        </Text>
        <Text style={styles.ciclos}>Ciclos completados: {ciclos}</Text>
        <Text style={styles.ciclos}>
          Señales perdidas: {porcentajePerdidas}
        </Text>
        <Text style={styles.detalle}>Inspector Hernan Varas · Canal 4 · Comisaría Centro</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          activo ? styles.botonDetener : styles.botonIniciar,
          pressed && { opacity: 0.75 },
        ]}
        onPress={() => setActivo(a => !a)}
      >
        <Text style={styles.textoBoton}>
          {activo ? 'Detener monitoreo' : 'Iniciar monitoreo'}
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    marginBottom: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tarjeta: {
    alignItems: 'center',
    padding: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
  },
  etiqueta: {
    marginBottom: 12,
    fontSize: 18,
    fontWeight: 'bold',
  },
  latencia: {
    marginBottom: 10,
    fontSize: 36,
    fontWeight: 'bold',
  },
  ciclos: {
    marginBottom: 8,
    fontSize: 14,
  },
  detalle: {
    color: '#757575',
    fontSize: 13,
  },
  boton: {
    alignItems: 'center',
    marginTop: 20,
    padding: 16,
    borderRadius: 8,
  },
  botonIniciar: {
    backgroundColor: '#2e7d32',
  },
  botonDetener: {
    backgroundColor: '#c62828',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
