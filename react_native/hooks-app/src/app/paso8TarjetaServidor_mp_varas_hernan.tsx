import { useConexionSimulada } from '@/hooks/useConexionSimulada_mp_varas_hernan'
import { Pressable, StyleSheet, Text, View } from 'react-native'

interface PropsTarjeta {
  nombre: string
  hook: ReturnType<typeof useConexionSimulada>
}

export function Paso9_mp({ nombre, hook }: PropsTarjeta) {
  const { estado, intentos, latencia, reconectar, reiniciar } = hook

  const colorEstado: Record<string, string> = {
    desconectado: '#757575',
    conectando:   '#1565c0',
    conectado:    '#2e7d32',
    error:        '#c62828',
  }

  const textoBoton: Record<string, string> = {
    desconectado: 'Conectar',
    conectando:   'Conectando…',
    conectado:    'Reconectar',
    error:        'Reintentar',
  }

  return (
    <View style={[styles.tarjeta, { borderColor: colorEstado[estado], width: '100%' }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.nombreServidor}>{nombre}</Text>
        <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>
          {estado.toUpperCase()}
        </Text>
      </View>

      <Text style={styles.detalle}>
        Intentos: {intentos}
        {latencia !== null ? `  ·  Latencia: ${latencia} ms` : ''}
      </Text>

      <View style={{ flexDirection: 'row', gap: 8, marginTop: 8 }}>
        <Pressable
          style={({ pressed }) => [
            styles.boton,
            estado === 'conectando' ? styles.botonDeshabilitado : styles.botonActivo,
            pressed && { opacity: 0.75 },
            { flex: 1 },
          ]}
          onPress={reconectar}
          disabled={estado === 'conectando'}
        >
          <Text style={styles.textoBoton}>{textoBoton[estado]}</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.botonSecundario,
            pressed && { opacity: 0.75 },
          ]}
          onPress={reiniciar}
        >
          <Text style={styles.textoSecundario}>Reiniciar</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  tarjeta: {
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    backgroundColor: '#fff',
    elevation: 2,
    gap: 6,
  },
  nombreServidor: {
    color: '#1a1a1a',
    fontSize: 16,
    fontWeight: 'bold',
  },
  etiqueta: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  detalle: {
    fontSize: 13,
    color: '#546e7a',
  },
  boton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  botonActivo: {
    backgroundColor: '#2e7d32',
  },
  botonDeshabilitado: {
    backgroundColor: '#a5d6a7',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  botonSecundario: {
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1565c0',
    justifyContent: 'center',
  },
  textoSecundario: {
    color: '#1565c0',
    fontSize: 13,
    fontWeight: 'bold',
  },
})
