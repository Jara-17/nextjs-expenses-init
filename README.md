# Next.js Expenses App

Este es un proyecto desarrollado con [Next.js](https://nextjs.org) y TypeScript para gestionar gastos de manera eficiente. Fue inicializado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

## 🚀 Comenzando

### Requisitos previos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org) (versión recomendada: 18+)
- [npm](https://www.npmjs.com), [yarn](https://yarnpkg.com), [pnpm](https://pnpm.io) o [bun](https://bun.sh)

### Instalación

Clona el repositorio y accede al directorio del proyecto:

```bash
git clone https://github.com/tu-usuario/nextjs-expenses-app.git
cd nextjs-expenses-app
```

Instala las dependencias:

```bash
npm install  # o yarn install, pnpm install, bun install
```

### Iniciar el servidor de desarrollo

Ejecuta el siguiente comando:

```bash
npm run dev  # o yarn dev, pnpm dev, bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación en ejecución.

Los cambios se reflejarán automáticamente al modificar `src/app/page.tsx`.

---

## 📂 Estructura del Proyecto

```
/nextjs-expenses-app
├── /.next                # Archivos de construcción de Next.js
├── /node_modules         # Dependencias del proyecto
├── /public               # Recursos públicos (imágenes, íconos, etc.)
│   ├── favicon.ico
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   ├── window.svg
├── /src                  # Código fuente
│   ├── /app              # Aplicación principal
│   │   ├── (private)     # Rutas privadas
│   │   │   ├── dashboard
│   │   │   │   ├── add
│   │   │   │   │   ├── layout.tsx
│   │   │   │   │   ├── page.tsx
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   ├── protected-layout.tsx
│   │   ├── (public)      # Rutas públicas
│   │   │   ├── register
│   │   │   │   ├── page.tsx
│   │   ├── /components   # Componentes reutilizables
│   │   │   ├── ExpenseBlock.tsx
│   │   │   ├── Statistics.tsx
│   │   │   ├── UpdateExpense.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── providers.tsx
│   ├── /shared           # Código compartido
│   │   ├── /schemas      # Esquemas de validación
│   │   │   ├── auth.schema.ts
│   │   ├── /services     # Servicios y lógica de negocio
│   │   │   ├── deleteExpense.service.ts
│   │   │   ├── getExpenses.service.ts
│   │   │   ├── login.service.ts
│   │   │   ├── register.service.ts
│   │   ├── /types        # Definiciones de tipos
│   │   │   ├── Expenses.ts
│   │   ├── /utils        # Utilidades y funciones auxiliares
│   │   │   ├── index.ts
├── .env                  # Variables de entorno
├── .gitignore            # Archivos y carpetas ignoradas por Git
├── package.json          # Configuración del proyecto y dependencias
├── README.md             # Documentación del proyecto
├── next.config.js        # Configuración de Next.js
```

---

## 🛠️ Tecnologías Usadas

- [Next.js](https://nextjs.org) - Framework de React para SSR y SSG
- [React](https://reactjs.org) - Biblioteca de UI
- [TypeScript](https://www.typescriptlang.org) - Tipado estático para JavaScript
- [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) - Estilos encapsulados
- [Vercel](https://vercel.com) - Plataforma de despliegue

---

## 🌍 Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y añade las variables necesarias:

```ini
NEXT_PUBLIC_API_URL=[URL]
```

---

## 🛠️ Scripts Disponibles

En el archivo `package.json` encontrarás los siguientes scripts útiles:

```bash
npm run dev       # Ejecuta el entorno de desarrollo
npm run build     # Construye la aplicación para producción
npm run start     # Inicia la aplicación en producción
npm run lint      # Analiza el código en busca de errores
```

---

## 📜 Contribuciones

¡Las contribuciones son bienvenidas! Sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature-nueva-funcionalidad`).
3. Realiza tus cambios y haz commits (`git commit -m 'Agrega nueva funcionalidad'`).
4. Sube los cambios (`git push origin feature-nueva-funcionalidad`).
5. Abre un Pull Request.

---

## 📚 Recursos y Documentación

Para aprender más sobre Next.js:

- [Documentación Oficial](https://nextjs.org/docs)
- [Curso Interactivo](https://nextjs.org/learn)
- [Repositorio en GitHub](https://github.com/vercel/next.js)

---

## 🚀 Despliegue en Vercel

El método más fácil para desplegar esta aplicación es mediante la plataforma [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Consulta la [documentación de despliegue](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
