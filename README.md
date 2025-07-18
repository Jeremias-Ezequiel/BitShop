# ¡Bienvenido a BitShop!

Hola a todos! Este es el proyecto de BitShop, una tienda desarrollada con React y bootstrap para mejorar mis habilidades en react y el desarrollo web. El proyecto consiste en una pagina donde las personas puedan registrarse, ver y comprar productos electronicos. Todavia sigue en proceso, pero ya tiene varias cosas interesantes.

## ¿Que tiene BitShop?

- Productos: Podes ver una lista de productos con fotos, precios y descripciones. Uso una API mock para traer los datos (`https://68798eb663f24f1fdca2463f.mockapi.io/productos/Productos`).
- Carrito: Deberas iniciar sesion para poder ingresar al carrito, podes agregar productos al carrito y verlos en una seccion especial
- Login: Hay una pantalla para iniciar sesion
- Busqueda y Paginacion: agregue una barra de busqueda para filtrar productos por nombre y un paginador para navegar por paginas
- Diseño: Uso Bootstrap para que se vea bien y responsive

## Como empezar

- Clona el repositorio: git clone `https://github.com/Jeremias-Ezequiel/BitShop.git`
- Instala las dependencias: `npm install`
- Arranca el proyecto: `npm run dev`
- Abrí el navegador en `http://localhost:5173` y ya podras ver el proyecto

## Tecnologias usadas

- React: Para la estructura y los componentes.
- React Router: Para manejar las rutas de la pagina.
- Bootstrap: Para los estilos y el diseño.
- Context API: Para manejar el estado del usuario y el carrito.
- MockAPI: Para simular una base de datos de productos.

## Cosas por mejorar

- Arreglar el carrito que a veces no carga bien (estoy debuggeando eso).
- Agregar mas funcionalidades al dashboard, como reportes o filtros.
- Hacer que el login sea mas seguro (por ahora es basico).
- Probar con una API real en vez de la mock.
