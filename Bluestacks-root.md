### 4. Habilitar ADB (Android Debug Bridge)
- Abre el App Player.
- Ve a **Configuración > Avanzado > Puente de depuración de Android**.
- Activa la opción para permitir ADB desde el host.

![ADB Setting](https://github.com/user-attachments/assets/32190d5a-cc12-4f0c-9ddb-6094ce8ced82)

### 5. Habilitar Root en BlueStacks
1. Ve a la carpeta: `C:\ProgramData\BlueStacks_nxt`
2. Edita el archivo `bluestacks.conf`
3. Cambia estos valores de `0` a `1`:
   ```
   bst.instance.Pie64.enable_root_access="1"
   bst.instance.Rvc64.enable_root_access="1"
   bst.feature.rooting="1"
   ```
4. Guarda y cierra.
5. Reinicia BlueStacks completamente.

### 6. Verificar Root
1. Usa el botón de instalación de APK en BlueStacks.
2. Instala el APK `Verificadorderoot.apk` (incluido en el repositorio).
3. Abre la app. Si ves "¡Root access granted!", el dispositivo está correctamente rooteado.
