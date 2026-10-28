# Spacio Dental — Landing page de demostración

Propuesta de landing page estática para presentar como muestra de trabajo a Spacio Dental, clínica ubicada en Delicias, Chihuahua.

## Incluye
- Diseño responsive para móvil, tablet y escritorio.
- Secciones de presentación, servicios, enfoque de atención, FAQ y contacto.
- Navegación móvil y preguntas frecuentes expandibles.
- Accesos preparados para WhatsApp, llamada, Instagram y reseñas de Google.
- HTML, CSS y JavaScript sin framework ni proceso de compilación.
- Configuración lista para Netlify.

## Importante antes de compartir o publicar como sitio oficial
Este repositorio es un **prototipo de portafolio**, no un sitio oficial verificado. El nombre y la ubicación proceden del anuncio del proyecto. Los textos de servicios son una propuesta y deben aprobarse con el cliente. Las fotografías son imágenes de referencia remotas de Unsplash; reemplazarlas por las fotos autorizadas de la clínica. No se inventaron testimonios de pacientes, teléfono, dirección exacta, horarios ni perfiles sociales.

En `script.js`, completar el objeto `clinic` con:
- `whatsapp`: número internacional sin `+`, espacios ni guiones.
- `phone`: teléfono internacional.
- `instagram`: URL oficial de Instagram.
- `googleReviews`: enlace directo al perfil/reseñas de Google.
- `googleMaps`: enlace del pin real de Google Maps (si se decide insertar el mapa, usar el enlace confirmado en el HTML).

En `index.html`, revisar servicios, equipo, horarios, dirección, SEO y aviso de demostración antes de entregar la versión final.

## Ver localmente
Abrir `index.html` en un navegador. No hay dependencias ni build.

## Publicar en Netlify
1. Crear un repositorio GitHub y subir el contenido de esta carpeta.
2. En Netlify, elegir **Add new site → Import an existing project**.
3. Conectar GitHub y elegir el repositorio.
4. Build command: dejar vacío.
5. Publish directory: `.` (raíz del repositorio).
6. Publicar. Después, cada `git push` a la rama configurada dispara una nueva publicación.

También puede usarse Netlify Drop para una demo rápida, arrastrando la carpeta del sitio, aunque para mantenerlo actualizado conviene conectar GitHub.

## Estructura
- `index.html` — contenido y estructura.
- `styles.css` — estilos responsive.
- `script.js` — navegación móvil y configuración de enlaces.
- `netlify.toml` — ajustes de publicación y cabeceras básicas.
