# DataOrchestra Backend

Plataforma backend para la gestión, integración y análisis inteligente de archivos Excel empresariales.

## Estructura

- Modular por entidad (`/src/modules`)
- Conexión centralizada a base de datos PostgreSQL usando Prisma
- CRUD por entidad principal (company, user-account, excel-file, ...)

## Instalación

1. Clona el repositorio.
2. Crea el archivo `.env` con tu string de conexión.
3. Instala dependencias:

npm install

4. Aplica el esquema Prisma:
npx prisma db push


5. Ejecuta en modo desarrollo:
npm run start:dev


## Endpoints

- `/company` - CRUD de empresas
- `/user-account` - CRUD de usuarios
- `/excel-file` - Gestión de archivos Excel


## Convenciones

- Cada entidad tiene su propio módulo, servicio y controlador.
- El acceso a datos se realiza vía Prisma.

---
