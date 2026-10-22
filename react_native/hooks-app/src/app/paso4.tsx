// app/index.tsx — agrega la función Paso4
import { StyleSheet, Text, useColorScheme, useWindowDimensions, View } from 'react-native'

export function Paso4() {
  const { width, height, scale, fontScale } = useWindowDimensions()
  const esquema = useColorScheme()   // 'light' | 'dark' | null

  // Paleta dinámica según el tema del sistema
  const colores = {
    fondo:   esquema === 'dark' ? '#0d1b2a' : '#f5f5f5',
    tarjeta: esquema === 'dark' ? '#1a2a3a' : '#ffffff',
    texto:   esquema === 'dark' ? '#e8eaed' : '#1a1a1a',
    detalle: esquema === 'dark' ? '#9aa0a6' : '#666666',
    borde:   esquema === 'dark' ? '#2d3e50' : '#e0e0e0',
  }

  // Layout adaptativo: 1 columna en pantallas angostas, 2 en anchas
  const columnas = width > 500 ? 2 : 1
  const anchoTarjeta = (width - 48 - (columnas - 1) * 12) / columnas

  const servidores = [
    { nombre: 'web-01',   ip: '10.0.2.10', estado: 'activo' },
    { nombre: 'db-01',    ip: '10.0.2.20', estado: 'activo' },
    { nombre: 'cache-01', ip: '10.0.2.30', estado: 'timeout' },
    { nombre: 'backup-01',ip: '10.0.2.40', estado: 'activo' },
  ]

  return (
    <View style={[styles.contenedor, { backgroundColor: colores.fondo }]}>
      <Text style={[styles.titulo, { color: colores.texto }]}>
        Inventario de Servidores
      </Text>

      {/* Información de pantalla */}
      <View style={[styles.tarjeta, {
        backgroundColor: colores.tarjeta,
        borderColor: colores.borde,
        width: '100%',
      }]}>
        <Text style={[styles.etiqueta, { color: colores.detalle }]}>
          Pantalla: {Math.round(width)} × {Math.round(height)} dp
          {'  '}·{'  '}escala: {scale.toFixed(1)}
          {'  '}·{'  '}tema: {esquema ?? 'sin preferencia'}
        </Text>
      </View>

      {/* Grid de servidores con columnas adaptativas */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
        {servidores.map(srv => (
          <View
            key={srv.nombre}
            style={[styles.tarjeta, {
              backgroundColor: colores.tarjeta,
              borderColor: colores.borde,
              width: anchoTarjeta,
            }]}
          >
            <Text style={[styles.nombreServidor, { color: colores.texto }]}>
              {srv.nombre}
            </Text>
            <Text style={[styles.ipServidor, { color: colores.detalle }]}>
              {srv.ip}
            </Text>
            <Text style={{
              fontSize: 12,
              fontWeight: '600',
              color: srv.estado === 'activo' ? '#2e7d32' : '#c62828',
            }}>
              {srv.estado.toUpperCase()}
            </Text>
          </View>
        ))}
      </View>

      {/* Nota sobre useSafeAreaInsets */}
      <View style={[styles.nota, { borderColor: colores.borde }]}>
        <Text style={[styles.notaTexto, { color: colores.detalle }]}>
          💡 useSafeAreaInsets() — disponible desde react-native-safe-area-context
          (ya visto en Página 2 como SafeAreaView). El hook expone los valores
          numéricos {'{'}top, bottom, left, right{'}'} para cuando necesitas
          posicionar elementos manualmente respetando el notch y la barra de inicio.
        </Text>
      </View>
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
    fontWeight: 'bold',
    color: '#757575',
    fontSize: 13
  },
   nota: {
    alignItems: 'center',
    padding: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
   }, 
  input: {
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  notaTexto: {
    marginBottom: 10,
    fontSize: 36,
    fontWeight: 'bold',
  },
  ciclos: {
    marginBottom: 8,
    fontSize: 14,
  },
  detalle: {
    
  },
  boton: {
    alignItems: 'center',
    marginTop: 20,
    padding: 16,
    borderRadius: 8,
  },
  botonActivo: {
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
  nombreServidor: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ipServidor: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  formulario: {
    padding:14
  }
})