# Incidencias

## Error de hidratacion en Next.js

### Sintoma

La consola mostraba el siguiente error:

> A tree hydrated but some attributes of the server rendered HTML didn't match the client properties.

El conflicto aparecia en `app/[lang]/page.tsx`, donde el servidor renderizaba un script JSON-LD y el cliente esperaba el script de tema.

### Causa

Las paginas `app/page.tsx` y `app/[lang]/page.tsx` incluian etiquetas `<head>` dentro del contenido de la pagina. En Next.js App Router, el `<head>` debe gestionarse desde el layout o mediante la Metadata API.

Next.js mezclaba el contenido de esos `<head>` con el `<head>` de `app/layout.tsx`. Como resultado, el orden y los atributos de los scripts no coincidian entre el HTML generado en el servidor y el renderizado del cliente.

### Correcciones aplicadas

#### 1. Eliminacion de `<head>` anidados

Se eliminaron los `<head>` de `app/page.tsx` y `app/[lang]/page.tsx`. Esto evita que Next.js mezcle manualmente varios bloques de cabecera durante la hidratacion.

#### 2. Movimiento de `preconnect` al layout raiz

Los enlaces `preconnect` de Google Fonts se movieron a `app/layout.tsx` porque son recursos globales y deben declararse una sola vez para todas las rutas.

#### 3. Reubicacion del JSON-LD

El JSON-LD se dejo como un elemento `<script type="application/ld+json">` dentro del contenido de cada pagina, fuera de un `<head>` manual. Los buscadores siguen pudiendo leer los datos estructurados y React ya no confunde este script con el script de inicializacion del tema.

#### 4. Aplicacion en todas las rutas

La correccion se aplico tanto a la ruta raiz `/` como a las rutas localizadas `/en/` y `/es/`, ya que todas compartian el mismo patron.

### Verificacion

Se ejecuto:

```bash
bun run build
```

La compilacion y exportacion estatica finalizaron correctamente para `/`, `/en/` y `/es/`.

## Error por locale invalido

### Sintoma

La consola mostraba `Cannot read properties of undefined (reading 'nav.about')` desde la funcion `t()` y tambien errores relacionados con la generacion de rutas estaticas para `/[lang]`.

### Causa

La ruta dinamica `[lang]` podia recibir valores que no eran idiomas soportados, como una peticion automatica a `/favicon.ico`. La funcion `t()` intentaba acceder directamente a `translations[locale]`, que no existia para esos valores.

### Correcciones aplicadas

- `t()` ahora usa el idioma por defecto si el locale recibido no tiene traducciones.
- La ruta `[lang]` valida que el locale sea `en` o `es`.
- Los locales invalidos terminan en `notFound()` en lugar de romper el renderizado.
- Metadata y contenido usan el locale validado.

### Verificacion

`bun run build` finaliza correctamente y genera las rutas estaticas `/en/` y `/es/`.
