# Tutorial: Crear un Pedido

En este tutorial, aprenderás cómo crear un nuevo pedido utilizando la aplicación.

## Paso 1: Obtener el Menú

Primero, necesitas obtener el menú de platos disponibles. Puedes hacerlo enviando una solicitud GET al endpoint `/platos`.

```bash
curl -X GET http://localhost:8000/platos
```

# Paso 2: Crear un pedido   

Una vez que tengas el menú, puedes crear un nuevo pedido enviando una solicitud POST al endpoint /pedidos.

```bash
curl -X POST http://localhost:8000/pedidos -H "Content-Type: application/json" -d '{"plato_id": 1, "cantidad": 2}'
```

# Paso 3: Simular una Entrega

Finalmente, la aplicación simulará la entrega del pedido.



