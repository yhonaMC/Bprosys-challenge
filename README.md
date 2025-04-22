### Instalación

1. Clonar el repositorio:

```bash
git clone <url-del-repositorio>
cd random-users-app
```

2. Instalar dependencias:

```bash
npm run dev
# o
yarn dev
```

3. Iniciar el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
```

4. Abrir [http://localhost:3000/](http://localhost:3000/) para ver la aplicación en tu navegador.


# 📊 Análisis de la Aplicación de Productos Financieros

## 1. 🎨 Criterios para diseñar la UI de productos financieros

Para diseñar la interfaz de usuario de productos financieros se aplicaron varios principios clave:

- **Claridad y transparencia**  
  Presentación clara de información financiera compleja (tasas, plazos, beneficios) utilizando jerarquía visual para destacar lo importante.

- **Confianza y seguridad**  
  Uso de paleta de colores profesional (azules corporativos: `#003087`, `#169BD7`) para generar credibilidad.


- **Jerarquía informativa**  
  Priorización de características clave (tasas, beneficios) y organización de información secundaria en secciones detalladas.

- **Experiencia guiada**  
  Flujos intuitivos con botones destacados e información categorizada para facilitar la comparación entre productos.



## 2. 🛠️ Decisiones sobre Tailwind CSS vs Styled Components

### ✅ Tailwind CSS se utilizó para:
- Elementos con pocas variantes: botones, contenedores, textos estándar.
- Estilos utilitarios rápidos: colores, márgenes, padding, layouts responsivos.
- Casos donde se requería velocidad de implementación visual.

### 🎯 Styled Components se utilizó para:
- Componentes con lógica de estilos condicional.
- Elementos reutilizables complejos con `props`.
- Componentes con anidación profunda: tarjetas, menús móviles, formularios.
- Estilos que requerían interacción con el estado del componente.
- Animaciones y transiciones personalizadas.



## 3. 🚀 Escalabilidad para una aplicación real de banca digital

Para escalar este proyecto a un entorno bancario real se considerarían:

- **Gestión de estado con Zustand**  
  Centralización del estado para usuario, preferencias y sesión.

- **Internacionalización (i18n)**  
  Integración con `i18next` para soporte multilenguaje.

- **Autenticación y autorización**  
  Implementación robusta con `NextAuth.js`, incluyendo roles y 2FA.

- **API Layer centralizado**  
  Uso de `React Query` para manejo de datos, sincronización y cache.

- **Testing completo**  
  - `Jest` para tests unitarios  
  - `React Testing Library` para componentes  
  - `Cypress` para pruebas end-to-end

- **Documentación de componentes**  
  Uso de `Storybook` para mostrar y documentar componentes visuales.

- **Módulos funcionales independientes**  
  División por áreas (auth, dashboard, productos, transacciones, perfil), cada uno con sus propios servicios y estado.

---

## 4. 🧠 Herramientas para rendimiento y monitoreo en producción

### 🔍 Análisis de rendimiento
- `Lighthouse CI`: para medir performance, accesibilidad y SEO.
- `Web Vitals`: seguimiento continuo de métricas como LCP, FID y CLS.
- `Bundle Analyzer`: control del peso del JavaScript.

### 📈 Monitoreo en tiempo real
- `Sentry`: reporte de errores en producción.
- `New Relic` / `Datadog`: Application Performance Monitoring (APM).
- `LogRocket`: reproducción de sesiones y análisis de UX.

### ⚙️ Optimizaciones frontend
- Server Components de Next.js para reducir JS al cliente.
- Code splitting & lazy loading para módulos pesados.
- `next/image` para optimización automática de imágenes.
- Caching con `SWR` o `React Query`.

### 🔐 Seguridad y cumplimiento
- `OWASP ZAP`: escaneo de vulnerabilidades.
- `Snyk`: verificación de dependencias vulnerables.
- Checklist de compliance (PCI-DSS, GDPR según región).

### 🧱 Infraestructura
- CDN para assets estáticos.
- CI/CD con GitHub Actions.
- Containerización con Docker para entornos consistentes.

---


