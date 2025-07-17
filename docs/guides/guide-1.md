# Guía 1: Configuracion del Entorno



Esta guía te ayudará a configurar tu entorno de desarrollo para la aplicación.

## Requisitos Previos

- Python 3.8 o superior
- MongoDB
- FastAPI

## Instalación

1. Clona el repositorio de la aplicación.

```bash
git clone https://github.com/tu-usuario/pedidos-comida-rapida.git
``` 

2. Instala las dependencias necesarias.
```bash
pip install -r requirements.txt
```

3. Configura tu base de datos MongoDB.
Asegúrate de ejecutar el script que contiene toda la estructura de la base de datos. Puedes hacerlo de la siguiente manera:
```bash
python init_db.py 
[Este archivo contiene toda la estructura de la base de datos en MongoDB]
``` 

4. Ejecuta la aplicación.
```bash
python run.py 
```

