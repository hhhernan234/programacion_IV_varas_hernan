// app/_layout.tsx — versión actualizada
import { Stack } from 'expo-router'

export default function RootLayout_mp() {
  return (
    <Stack
      screenOptions={{
        headerStyle:      { backgroundColor: '#1565c0' },
        headerTintColor:  '#ffffff',
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      {/* Pantallas normales — no necesitan declaración explícita */}
      {/* Modal — debe declararse aquí con presentation: 'modal' */}
      <Stack.Screen
        name="(modals)/agregar"
        options={{
          presentation:  'modal',
          title:         'Agregar expediente',
          headerStyle:   { backgroundColor: '#263238' },
          headerTintColor: '#eceff1',
        }}
      />
    </Stack>
  )
}
