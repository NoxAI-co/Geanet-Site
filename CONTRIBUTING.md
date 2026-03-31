# Guía de Contribución

## Convenciones de Ramas

- `main`: Rama principal de producción
- `develop`: Rama principal de desarrollo
- `feature/*`: Ramas para nuevas características
  - `feature/carousel`: Carrusel de clientes
  - `feature/features`: Sección de características
  - `feature/faq`: Sección de preguntas frecuentes
  - `feature/pricing`: Planes y precios
  - `feature/statistics`: Estadísticas y métricas

## Convenciones de Commits

Seguimos la convención de [Conventional Commits](https://www.conventionalcommits.org/):

- `feat`: Nueva característica
- `fix`: Corrección de errores
- `docs`: Cambios en documentación
- `style`: Cambios que no afectan el código (espacios, formato, etc)
- `refactor`: Cambios de código que no corrigen errores ni añaden características
- `perf`: Cambios que mejoran el rendimiento
- `test`: Añadir o modificar tests
- `chore`: Cambios en el proceso de build o herramientas auxiliares

Formato:
```
<tipo>[alcance opcional]: <descripción>

[cuerpo opcional]

[pie opcional]
```

Ejemplos:
```
feat(carousel): añade navegación suave
fix(header): corrige enlaces de navegación
docs: actualiza guía de contribución
```

## Pull Requests

- Usar títulos descriptivos que sigan las convenciones de commits
- Incluir una descripción detallada de los cambios
- Referenciar issues relacionados
- Asignar reviewers apropiados
- Incluir screenshots si hay cambios visuales

## Flujo de Trabajo

1. Crear rama desde `develop` con el nombre apropiado
2. Realizar cambios siguiendo las convenciones
3. Crear PR a `develop`
4. Después de revisión y aprobación, hacer merge
5. Periódicamente, mergear `develop` a `main` para releases 