# Docker Compose

### `docker-compose.md`



Docker Compose se utiliza para definir y gestionar aplicaciones Docker multi-contenedor. Este archivo permite configurar los servicios necesarios para ejecutar la aplicación y sus dependencias.

## Estructura del docker-compose.yml

```markdown
# docker-compose.yml

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "5000:5000"
    depends_on:
      - db
  db:
    image: mongo
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

volumes:
  mongodb_data:

```

# Explicación de los Servicios

#### WEB
Este servicio construye la imagen de la aplicación utilizando el Dockerfile y expone el puerto 5000.

```bash
build: .: Construye la imagen utilizando el Dockerfile en el directorio actual.
ports: Mapea el puerto 5000 del contenedor al puerto 5000 del host.
depends_on: Indica que este servicio depende del servicio db.
```

#### DB
Este servicio utiliza la imagen oficial de MongoDB y expone el puerto 27017.


```bash
image: mongo: Utiliza la imagen oficial de MongoDB.
ports: Mapea el puerto 27017 del contenedor al puerto 27017 del host.
volumes: Configura un volumen para persistir los datos de MongoDB.
```

# Desplegar los Servicios

Para desplegar los servicios definidos en el archivo Docker Compose, navega al directorio que contiene el archivo docker-compose.yml y ejecuta el siguiente comando:

```bash
docker-compose up
```