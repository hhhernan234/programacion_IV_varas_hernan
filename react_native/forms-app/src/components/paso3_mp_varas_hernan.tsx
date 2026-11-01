import { SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native'
import { Expediente } from './paso1_mp_varas_hernan'
import { Paso1FilaExpediente_mp } from './paso1FilaExpediente_mp_varas_hernan'
import { Paso3EncabezadoSeccion_mp } from './paso3EncabezadoSeccion_mp_varas_hernan'

type SeccionDistrito = {
  title: string
  region: string
  data: Expediente[]
}

const SECCIONES: SeccionDistrito[] = [
  {
    title: 'Distrito Central (Hernán Varas)',
    region: 'DIST-01',
    data: [
      { id: 's1', codigo: 'EXP-2026-101', delito: 'Robo con fuerza',    abierto: true  },
      { id: 's2', codigo: 'EXP-2026-102', delito: 'Hurto agravado',    abierto: true  },
      { id: 's3', codigo: 'EXP-2026-103', delito: 'Estafas varias',    abierto: true  },
    ],
  },
  {
    title: 'Distrito Norte',
    region: 'DIST-02',
    data: [
      { id: 's4', codigo: 'EXP-2026-201', delito: 'Daño a propiedad',  abierto: true  },
      { id: 's5', codigo: 'EXP-2026-202', delito: 'Usurpación',       abierto: false },
    ],
  },
  {
    title: 'Distrito Sur',
    region: 'DIST-03',
    data: [
      { id: 's6', codigo: 'EXP-2026-301', delito: 'Delito informático', abierto: true  },
      { id: 's7', codigo: 'EXP-2026-302', delito: 'Falsedad documental', abierto: false },
      { id: 's8', codigo: 'EXP-2026-303', delito: 'Contrabando',        abierto: true  },
    ],
  },
]

export function Paso3_mp() {
  return (
    <SafeAreaView style={styles3.contenedor}>
      <Text style={styles3.tituloPantalla}>Expedientes por Distrito - Hernán Varas</Text>
      <SectionList<Expediente, SeccionDistrito>
        sections={SECCIONES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaExpediente_mp expediente={item} />}
        renderSectionHeader={({ section }) => (
          <Paso3EncabezadoSeccion_mp titulo={section.title} region={section.region} />
        )}
        stickySectionHeadersEnabled
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: '#e0e0e0', marginHorizontal: 12 }} />
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </SafeAreaView>
  )
}

const styles3 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  tituloPantalla: {
    fontSize: 20,
    fontWeight: '700',
    padding: 16,
    backgroundColor: '#1565c0',
    color: '#fff',
  },
})