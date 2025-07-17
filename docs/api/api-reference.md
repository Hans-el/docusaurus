# API's
# Referencia de la API

Esta sección proporciona detalles sobre los endpoints disponibles en la API de Pedidos de Comida Rápida.

## Endpoints

### Menu

- `GET /platos`: Obtiene una lista de todos los platos disponibles.

### Order


- `POST /pedidos`: Crea un nuevo pedido. Requiere un cuerpo JSON con `plato_id` y `cantidad`.

### Delivery

- `GET /entregas`: Simula la entrega de un pedido.
