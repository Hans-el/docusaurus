# Ejemplos de Código

Aquí tienes algunos ejemplos de cómo interactuar con la API utilizando Python y la biblioteca `requests`.

## Obtener el Menú

```python
import requests

response = requests.get('http://localhost:8000/platos')
print(response.json())
```


# Crear un Pedido

```python
import requests

data = {
    "plato_id": 1,
    "cantidad": 2
}

response = requests.post('http://localhost:8000/pedidos', json=data)
print(response.json())

```
