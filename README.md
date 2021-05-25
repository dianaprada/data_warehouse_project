# Bienvenido a Data Warehouse Project 👋

> Code Your Future Globant - Acámica
> Carrera Desarrollo Web Full Stack
> Proyecto 4: Data Warehouse
> 
> Una una herramienta que permite a una compañía de Marketing administrar todos los contactos de sus clientes para sus campañas.


## Configuración del servidor
Puerto: 8080
Descripción: Utilización de librería express para la configuración del servidor.

# Instalación de dependencias
npm install
Desde la ubicación "...\data_warehouse_project\data_warehouse_be>"

# Inicialización
npm start
Desde la ubicación "...\data_warehouse_project\data_warehouse_be>"

## Configuración de base de datos
Conexión con base de datos: SQL a través de XAMPP.

Debe de crearse una base de datos llamada "datawarehouse_db" en phpmyadmin.

Por favor verifique que los siguientes parámetros que deben configurarse en el archivo "config.js" que está dentro de la carpeta  "...\data_warehouse_project\data_warehouse_be\config>" sean correctos: 

Parametrización de la base de datos: {
    "username": "root",
    "password": "",
    "database": "datawarehouse_db",
    "host": "localhost",
    dialect: "mysql",
}

## Instrucciones 

1. Instalar XAMPP u otra solución de servidor web que permita la conexión de la base de datos e inicializar dicho servidor.

2. Debe de crearse una base de datos llamada "datawarehouse_db" en phpmyadmin.
    #  DB Config 
        DB_USERNAME=root
        DB_PASSWORD=
        DB_HOST=localhost
        DB_DATABASE=datawarehouse_db
        DB_DIALECT=mysql

3. Ubicado en la carpeta "...\data_warehouse_project\data_warehouse_be", utilizar el comando "npm install" para instalar todas las dependencias establecidas en el package.json.

4. Para iniciar el servidor acceder a la carpeta "...\data_warehouse_project\data_warehouse_be>" y ejecutar el comando "npm run devStart"

5. En la carpeta "...\data_warehouse_project\data_warehouse_be\" se encuentra el archivo fillData.js", un archivo de javascript para llenar la base de datos. 
Desde la ubicación "...\data_warehouse_project\data_warehouse_be>", en la consola, puede ejecutar el comando "node fillData.js". Esta acción ingresará a la base de datos, algunos datos de prueba.

6. Con una extensión de Visual Studio Code como "Live Server" ejecutar el archivo "login.html" que esta ubicado en la carpeta "...\data_warehouse_project\data_warehouse_fe\views".

7. Ingresar con el usuario administrador "freddie_mercury@acamica.com" password "12345678901" o con el usuario de perfil Básico "jean_doe_1@acamica.com" password "765765765765".

8. Una vez instaladas las dependencias y la base de datos, y con los archivos de configuración parametrizados correctamente, el proyecto puede ejecutarse.


👤 **Diana Patricia Pineda Prada**

* Github: [@dianaprada](https://github.com/dianaprada)


## 📝 Licencia