# Dockerfile

Este archivo se utiliza para construir una imagen Docker personalizada para la aplicación. A continuación se describe la estructura y los comandos utilizados en el Dockerfile.

## Estructura del Dockerfile

```dockerfile
# Usa una imagen base de Python
FROM python:3.9

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo de requisitos al contenedor
COPY requirements.txt .

# Instala las dependencias necesarias
RUN pip install --no-cache-dir -r requirements.txt

# Copia el resto de los archivos de la aplicación al contenedor
COPY . .

# Comando para ejecutar la aplicación
CMD ["python", "./app/main.py"]

```


# Explicación de los Comandos
Utiliza la imagen oficial de Python 3.9 como base para construir la nueva imagen.
```bash
FROM python:3.9
```

Establece el directorio de trabajo dentro del contenedor en /app.
```bash
WORKDIR /app
```

Copia el archivo requirements.txt desde el directorio local al contenedor.
```bash
COPY requirements.txt .
```

Instala las dependencias listadas en requirements.txt.
```bash
RUN pip install --no-cache-dir -r requirements.txt
```

Copia todos los archivos desde el directorio local al contenedor.
```bash
COPY . .
```

Especifica el comando para ejecutar la aplicación cuando el contenedor se inicie.
```bash
CMD ["python", "./app/main.py"]
```

# Construir la Imagen Docker
Para construir la imagen Docker, navega al directorio que contiene el Dockerfile y ejecuta el siguiente comando:

```bash
docker build -t pedidos_comida_TripleA
```

Este comando construye una imagen Docker con la etiqueta pedidos_comida_TripleA.

