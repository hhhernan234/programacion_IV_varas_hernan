// app/index.tsx — lista de expedientes
import { Link, router } from 'expo-router'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

interface Expediente {
  id: string
  numero: string
  delito: string
  estado: 'abierto' | 'investigando' | 'urgente'
}

const EXPEDIENTES: Expediente[] = [
  { id: '1', numero: 'EXP-2026-001', delito: 'Robo agravado', estado: 'abierto'      },
  { id: '2', numero: 'EXP-2026-002', delito: 'Homicidio',     estado: 'abierto'      },
  { id: '3', numero: 'EXP-2026-003', delito: 'Secuestro',     estado: 'investigando' },
  { id: '4', numero: 'EXP-2026-004', delito: 'Fraude',        estado: 'urgente'      },
  { id: '5', numero: 'EXP-2026-005', delito: 'Hurto menor',   estado: 'abierto'      },
]

const COLOR_ESTADO: Record<Expediente['estado'], string> = {
  abierto:      '#2e7d32',
  investigando: '#e65100',
  urgente:      '#c62828',
}

export default function ListaExpedientes_mp() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.inspector}>Inspector Hernan Varas</Text>
      <FlatList
        data={EXPEDIENTES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [styles.tarjeta, pressed && styles.tarjetaPresionada]}
            onPress={() => router.push(`/servidores/${item.id}`)}
          >
            <View style={styles.fila}>
              <Text style={styles.nombre}>{item.numero}</Text>
              <View style={[styles.badge, { backgroundColor: COLOR_ESTADO[item.estado] }]}>
                <Text style={styles.badgeTexto}>{item.estado.toUpperCase()}</Text>
              </View>
            </View>
            <Text style={styles.ip}>{item.delito}</Text>
          </Pressable>
        )}
      />

      {/* Alternativa declarativa — un Link que lleva al primer expediente */}
      <Link href="/servidores/1" style={styles.enlaceDirecto}>
        Ir directo a EXP-2026-001 (Link declarativo)
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  inspector:  { fontSize: 13, color: '#546e7a', paddingHorizontal: 16, paddingTop: 12 },
  lista:      { padding: 16, gap: 10 },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 6,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  tarjetaPresionada: { backgroundColor: '#e3f2fd' },
  fila:       { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  nombre:     { fontSize: 16, fontWeight: '600', color: '#1a1a1a' },
  ip:         { fontSize: 13, color: '#1565c0', fontFamily: 'monospace' },
  badge: {
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeTexto:      { color: '#fff', fontSize: 11, fontWeight: '700' },
  enlaceDirecto: {
    textAlign: 'center',
    padding: 12,
    color: '#1565c0',
    fontSize: 14,
  },
})
