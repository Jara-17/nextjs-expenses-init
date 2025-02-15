# Next.js Expenses App

Este es un proyecto desarrollado con [Next.js](https://nextjs.org) y TypeScript para gestionar gastos. Fue inicializado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🚀 Comenzando

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación en ejecución.

Puedes comenzar a editar las páginas modificando `app/page.tsx`. Los cambios se reflejarán automáticamente.

## 📂 Estructura del Proyecto

```
/nextjs-expenses-app
├── /.next                # Archivos de construcción de Next.js
├── /node_modules         # Dependencias del proyecto
├── /public               # Recursos públicos (imágenes, íconos, etc.)
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   ├── window.svg
├── /src                  # Código fuente
│   ├── /app              # Aplicación principal
│   │   ├── (private)     # Rutas privadas
│   │   ├── (public)      # Rutas públicas
│   │   ├── components    # Componentes reutilizables
│   │   │   ├── favicon.ico
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   ├── providers.tsx
│   ├── /shared           # Código compartido
│   │   ├── /schemas      # Esquemas de validación
│   │   │   ├── auth.schema.ts
│   │   ├── /services     # Servicios y lógica de negocio
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

## 🛠️ Tecnologías Usadas

- [Next.js](https://nextjs.org)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)
- [Vercel](https://vercel.com) (para despliegue)

## 📜 Contribuciones

¡Las contribuciones son bienvenidas! Sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature-nueva-funcionalidad`).
3. Realiza tus cambios y haz commits (`git commit -m 'Agrega nueva funcionalidad'`).
4. Sube los cambios (`git push origin feature-nueva-funcionalidad`).
5. Abre un Pull Request.

## 📚 Recursos y Documentación

Para aprender más sobre Next.js:

- [Documentación Oficial](https://nextjs.org/docs)
- [Curso Interactivo](https://nextjs.org/learn)
- [Repositorio en GitHub](https://github.com/vercel/next.js)

## 🚀 Despliegue en Vercel

El método más fácil para desplegar esta aplicación es mediante la plataforma [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Consulta la [documentación de despliegue](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.
