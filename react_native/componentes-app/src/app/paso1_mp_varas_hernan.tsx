// ─── Paso 1 — Props tipadas ──────────────────────────────────────────
import { StyleSheet, Text, View } from 'react-native'

interface TarjetaExpedienteProps {
  caso: string
  numero: string
  delito: string
  evidencias: number
  comisaria?: string
}

function TarjetaExpediente({ caso, numero, delito, evidencias, comisaria }: TarjetaExpedienteProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombreServidor}>{caso}</Text>
      <Text style={styles.datoDireccion}>{numero} · {evidencias} evidencias</Text>
      <Text style={styles.datoSistema}>{delito}</Text>
      <Text style={styles.datoRegion}>{comisaria ?? 'Sin comisaría'}</Text>
    </View>
  )
}

export function Paso1() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Expedientes del inspector Hernan Varas</Text>
      <TarjetaExpediente
        caso="Caso Banco Central"
        numero="EXP-2026-001"
        delito="Robo agravado"
        evidencias={12}
        comisaria="Comisaría Centro"
      />
      <TarjetaExpediente
        caso="Caso Calle Norte"
        numero="EXP-2026-002"
        delito="Homicidio"
        evidencias={25}
        comisaria="Comisaría Norte"
      />
      <TarjetaExpediente
        caso="Caso Transferencias"
        numero="EXP-2026-003"
        delito="Fraude"
        evidencias={4}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
    paddingTop: 60,
    gap: 12,
  },
  centrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  encabezado: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: 4,
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 4,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  nombreServidor: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  datoDireccion: {
    fontSize: 13,
    color: '#1565c0',
    fontFamily: 'monospace',
  },
  datoSistema: {
    fontSize: 12,
    color: '#757575',
  },
  datoRegion: {
    fontSize: 12,
    color: '#757575',
  },
})
