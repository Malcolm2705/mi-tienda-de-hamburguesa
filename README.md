# BurgerDelicia - Versión Estática

Este es un sitio web estático para un restaurante de hamburguesas llamado "BurgerDelicia". Esta versión está diseñada para ser fácilmente desplegada en GitHub Pages u otros servicios de hosting estático.

## Estructura del Proyecto

```
static/
  ├── index.html         # Página principal
  ├── css/
  │   └── styles.css     # Estilos CSS
  ├── js/
  │   └── main.js        # JavaScript para funcionalidades básicas
  └── images/            # Directorio para imágenes (vacío, se usan URLs externas)
```

## Características

- Diseño responsivo adaptado a dispositivos móviles y de escritorio
- Menú interactivo con categorías filtrables
- Formulario de contacto
- Animaciones y transiciones suaves
- Compatibilidad con navegadores modernos

## Cómo Usar

1. Clona este repositorio o descarga los archivos
2. Abre el archivo `index.html` en tu navegador para ver el sitio localmente

## Despliegue en GitHub Pages

Para desplegar este sitio en GitHub Pages:

1. Sube todos los archivos de la carpeta `static` a tu repositorio de GitHub
2. Ve a la configuración de tu repositorio (Settings)
3. Navega a la sección "Pages"
4. Selecciona la rama donde subiste los archivos (normalmente 'main' o 'master')
5. Guarda los cambios y espera unos minutos para que se despliegue

Tu sitio estará disponible en: `https://[tu-usuario].github.io/[nombre-del-repositorio]`

## Personalización

Puedes personalizar este sitio de las siguientes maneras:

- Modifica los colores en el archivo CSS (variables en `:root`)
- Actualiza las imágenes (actualmente se usan URLs de Unsplash)
- Cambia el texto y la información de contacto en el HTML
- Añade o elimina secciones según sea necesario

## Notas Importantes

- Las imágenes se cargan desde Unsplash. Para un sitio en producción, es recomendable descargar las imágenes y alojarlas localmente en la carpeta `images/`
- El formulario de contacto no tiene funcionalidad de envío. Para hacerlo funcional, necesitarás añadir código de backend o un servicio de formularios como Formspree

## Créditos

- Font Awesome para iconos
- Google Fonts para la tipografía Inter
- Unsplash para las imágenes

## Licencia

Este proyecto está disponible para uso libre. 