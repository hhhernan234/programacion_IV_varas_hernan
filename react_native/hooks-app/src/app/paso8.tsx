// app/index.tsx — agrega la función Paso5
// (en un proyecto real importarías desde '@/hooks/useConexionSimulada')
import { useConexionSimulada } from '@/hooks/useConexionSimulada'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Paso9 } from './paso8TarjetaServidor'


// Para este tutorial pegamos el hook inline arriba del componente:
// (copia aquí el código del archivo hooks/useConexionSimulada.ts)

export function Paso8() {
  const webHook   = useConexionSimulada('web-02')
  const cacheHook = useConexionSimulada('cache-02')

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Estado de Servicios</Text>

      <Paso9 nombre="web-02" hook={webHook} />
      <Paso9 nombre="cache-02" hook={cacheHook} />
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
   detalle: {
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
  textoBoton: {
    marginBottom: 10,
    fontSize: 36,
    fontWeight: 'bold',
  },
  ciclos: {
    marginBottom: 8,
    fontSize: 14,
  },
  botonDeshabilitado: {
    alignItems: 'center',
    marginTop: 20,
    padding: 16,
    borderRadius: 8,
  },
  botonActivo: {
    alignItems: 'center',
    marginTop: 20,
    padding: 16,
    borderRadius: 8,
  },
  boton: {
    backgroundColor: '#2e7d32',
  },
  botonDetener: {
    backgroundColor: '#c62828',
  },
  botonSecundario: {
    backgroundColor: '#4cb3ad',
  },
  textoSecundario: {
    color: '#381818',
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