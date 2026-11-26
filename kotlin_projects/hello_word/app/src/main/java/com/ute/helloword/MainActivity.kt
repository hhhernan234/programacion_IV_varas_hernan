// MainActivity.kt
package com.ute.helloword

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent          // ← extensión de Compose
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Column
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // setContent reemplaza a setContentView(R.layout.activity_main)
        // Todo lo que esté dentro es Compose — no hay XML
        setContent {
            MaterialTheme {          // aplica el tema (colores, tipografía, formas)
                MiApp()              // composable raíz — aquí arranca el árbol de UI
            }
        }
    }
}

@Composable                          // ← esta anotación lo convierte en composable
fun MiApp() {
    Column {
        Text("¡Hola, Compose!")
        ChequearEnergia(150)
        EjemploHelloWorld()
        EjemploLayouts()
    }
    // dibuja texto en pantalla
}

@Composable
fun ChequearEnergia(energia: Number) {
    Text(text = "Energia, $energia!")
}

@Composable
fun EjemploLayouts() {
    Column(
        modifier            = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(20.dp)  // espacio uniforme entre hijos
    ) {
        Text("Ejemplo 2 · Layouts y Modifier",
            style = MaterialTheme.typography.titleLarge)

        // ── COLUMN ─────────────────────────────────────────────────────────
        Text("Column — apila verticalmente:",
            style = MaterialTheme.typography.labelLarge,
            color = MaterialTheme.colorScheme.primary)

        Column(
            modifier            = Modifier
                .fillMaxWidth()
                .border(1.dp, Color.Gray, RoundedCornerShape(8.dp))
                .padding(8.dp),
            verticalArrangement = Arrangement.spacedBy(4.dp)
        ) {
            CeldaColoreada("Elemento 1", Color(0xFF90CAF9))
            CeldaColoreada("Elemento 2", Color(0xFF64B5F6))
            CeldaColoreada("Elemento 3", Color(0xFF42A5F5))
        }

        // ── ROW ────────────────────────────────────────────────────────────
        Text("Row — alinea horizontalmente (weight 1:2:1):",
            style = MaterialTheme.typography.labelLarge,
            color = MaterialTheme.colorScheme.primary)

        // weight distribuye el espacio disponible en proporciones
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .height(48.dp)
                .clip(RoundedCornerShape(8.dp))
        ) {
            Box(Modifier.weight(1f).fillMaxHeight().background(Color(0xFFCE93D8)),
                contentAlignment = Alignment.Center) { Text("1") }
            Box(Modifier.weight(2f).fillMaxHeight().background(Color(0xFFBA68C8)),
                contentAlignment = Alignment.Center) { Text("2") }
            Box(Modifier.weight(1f).fillMaxHeight().background(Color(0xFFAB47BC)),
                contentAlignment = Alignment.Center) { Text("1") }
        }

        // ── BOX ────────────────────────────────────────────────────────────
        Text("Box — superpone en capas (z-order):",
            style = MaterialTheme.typography.labelLarge,
            color = MaterialTheme.colorScheme.primary)

        Box(
            modifier         = Modifier
                .fillMaxWidth()
                .height(80.dp)
                .clip(RoundedCornerShape(12.dp))
                .background(Color(0xFF1565C0)),      // capa de fondo azul
            contentAlignment = Alignment.Center
        ) {
            // Capa 2: caja pequeña en la esquina superior
            Box(
                modifier = Modifier
                    .size(40.dp)
                    .background(Color(0xFF42A5F5))
                    .align(Alignment.TopStart)
            )
            // Capa 3: texto sobre todo
            Text("Texto en capa superior", color = Color.White,
                style = MaterialTheme.typography.labelLarge)
        }

        // ── MODIFIER: el orden importa ──────────────────────────────────────
        Text("Modifier — clip ANTES vs DESPUÉS de background:",
            style = MaterialTheme.typography.labelLarge,
            color = MaterialTheme.colorScheme.primary)

        Row(horizontalArrangement = Arrangement.spacedBy(16.dp)) {
            // ✅ clip antes de background → fondo respeta la forma
            Box(
                modifier = Modifier
                    .size(90.dp)
                    .clip(RoundedCornerShape(16.dp))                       // 1° recorta
                    .background(MaterialTheme.colorScheme.primaryContainer), // 2° pinta
                contentAlignment = Alignment.Center
            ) {
                Text("✅ clip\nantes",
                    style = MaterialTheme.typography.labelSmall)
            }

            // ❌ background antes de clip → fondo NO se recorta
            Box(
                modifier = Modifier
                    .size(90.dp)
                    .background(Color(0xFFFFCDD2))        // 1° pinta sin recorte
                    .clip(RoundedCornerShape(16.dp)),     // 2° tarde — el bg ya se pintó
                contentAlignment = Alignment.Center
            ) {
                Text("❌ bg\nantes",
                    style = MaterialTheme.typography.labelSmall)
            }
        }
    }
}

// Composable auxiliar — reutilizable dentro del mismo archivo
@Composable
private fun CeldaColoreada(texto: String, color: Color) {
    Box(
        modifier         = Modifier
            .fillMaxWidth()
            .height(36.dp)
            .clip(RoundedCornerShape(4.dp))
            .background(color),
        contentAlignment = Alignment.Center
    ) {
        Text(texto, style = MaterialTheme.typography.labelMedium)
    }
}

@Composable
fun EjemploHelloWorld() {
    // 'by remember' delega la lectura/escritura al objeto MutableState
    // 'mutableStateOf' crea estado observable: cuando cambia, Compose recompone
    var mensaje  by remember { mutableStateOf("¡Hola, Hernán Varas Compose!") }
    var contador by remember { mutableStateOf(0) }

    // Column apila sus hijos verticalmente
    Column(
        modifier            = Modifier
            .fillMaxWidth()          // ocupa todo el ancho y alto disponible
            .padding(24.dp),        // margen interior de 24dp en todos los lados
        verticalArrangement = Arrangement.Top,           // centra verticalmente
        horizontalAlignment = Alignment.CenterHorizontally  // centra horizontalmente
    ) {
        // Text muestra una cadena de texto en pantalla
        Text(
            text  = mensaje,
            style = MaterialTheme.typography.headlineMedium
        )

        Spacer(Modifier.height(16.dp))   // espacio vacío vertical

        Text(
            text  = "Botón presionado: $contador veces",
            style = MaterialTheme.typography.bodyLarge
        )

        Spacer(Modifier.height(24.dp))

        // Button ejecuta 'onClick' cuando el usuario lo presiona
        Button(onClick = {
            contador++
            mensaje = "¡Presionado $contador ${if (contador == 1) "vez" else "veces"}!"
        }) {
            Text("Presióname")
        }

        Spacer(Modifier.height(8.dp))

        // OutlinedButton: variante con borde, sin relleno
        OutlinedButton(onClick = {
            contador = 0
            mensaje  = "¡Hola, Hernan Varas desde Compose!"
        }) {
            Text("Reiniciar")
        }
    }
}

@Preview(showBackground = true)      // ← visualiza en el editor sin ejecutar
@Composable
fun MiAppPreview() {
    MaterialTheme {
        MiApp()
    }
}