# Práctica de Laboratorio: Buscador de Películas 🎬

Este es mi proyecto para la práctica de laboratorio donde construí un buscador de películas consumiendo la API de OMDb. 

El objetivo principal de la actividad era aprender a usar **Vue 3** (Composition API) y practicar cómo se comunican los componentes entre sí mediante eventos personalizados (`emit`).

## ¿Qué tecnologías usé?
- **Vue 3** con Composition API.
- **Vuetify 3** para los estilos y la interfaz (usé el tema oscuro).
- **Axios** para hacer las peticiones HTTP a la API.
- **Vite** para inicializar el proyecto rápido.
- **Vue Router** para tener un par de vistas.

## Estructura del proyecto
Dividí la app en varios componentes para manejar todo más fácil y cumplir con la rúbrica:
- `MovieSearch.vue`: Es el buscador. Emite eventos cuando le doy a buscar o limpiar resultados.
- `MovieList.vue`: Recibe la lista de películas como props y las muestra en forma de tarjetas.
- `MovieDetails.vue`: Es el modal que se abre cuando quiero ver la información completa de una peli (sinopsis, director, año, etc.).
- `LoadingSpinner.vue`: El circulito de carga para que la página no se vea congelada mientras llegan los datos.

También agregué una página de "Acerca de" (`About.vue`) y le puse un favicon de claqueta de cine al sitio.

## Ramas del repositorio
- `main`: Tiene la versión principal del proyecto usando **Axios**.
- `fetch`: Creé esta rama extra para cumplir con la última parte de la actividad, donde refactoricé el código para usar la función nativa `fetch()` de JavaScript en lugar de Axios.

## Cómo correr el proyecto localmente
1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Levanta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

> **Nota:** Ya dejé configurada mi API Key personal de OMDb en el archivo `src/services/movieApi.js`, así que la búsqueda debería funcionar directamente en cuanto corras el proyecto.
