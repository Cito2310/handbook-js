
# autoboot - nodejs

Esta es una guía rápida para poder crear programar de node.js que se ejecutan automáticamente al iniciar la computadora.
## Paso a Paso
### 1. Crear la aplicación que deseas ejecutar
Primero debes crear la aplicación que deseas ejecutar.

```javascript
appExample.js
```
    
### 2. En el package.json añadir los scripts
En el archivo package.json debes añadir el script a ejecutar automáticamente, normalmente el "start".

```javascript
"scripts": {
  "start": "node appExample.js"
}
```
    
### 3. Creamos el script para iniciar .bat
Creamos un archivo .bat que se ejecutara al iniciar la computadora. Dentro del archivo añadiremos el siguiente código:

```batch
TIMEOUT 3

cd C:\Users\NameUser\Desktop\Projects\autoboot-nodejs // cambiar por la ruta de la aplicación
npm run start 

cmd /k
```
    
### 4. Copiar el script iniciador a la carpeta Startup
El archivo creado con anterioridad, lo copiaremos en la siguiente carpeta:
Creamos un archivo .bat que se ejecutara al iniciar la computadora. Dentro del archivo añadiremos el siguiente código:

```batch
C:\Users\NameUser\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup
```

### 5. Configurar en el administrador de tareas
En el administrador de tareas se puede ver el script insertado en la carpeta Startup, seguramente este habilitado, pero si no lo esta allí se puede controlar.
