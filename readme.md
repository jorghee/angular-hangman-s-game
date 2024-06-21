# <samp>:a: Juego del ahorcado</samp>
## <samp>:wrench: Configuraciones previas</samp>
Para probar este juego, debemos ya tener instalado node.js y debemos de instalar la herramienta de linea de comandos de Angular. Esta herramienta está disponible como un paquete de node.js. Por lo tanto, podemos instalarlo usando el gestos de paquetes de Django.

> Instalar la herramienta en linea de comandos de Angular
```sh
sudo npm install -g @angular/cli
```

La opción `-g` permite que el comando `ng` este disponible a nivel global. Este comando lo vamos a utilizar para cualquier acción que querramos hacer con Angular.

> Clonamos el repositorio
```sh
git clone https://github.com/jorghee/angular-hangman-s-game.git
```

El repositorio consta de varias ramas creadas con diferentes formas de implementar este juego. Además existe la rama [angular-learning](https://github.com/jorghee/angular-hangman-s-game/tree/angular-learning) que esta dedicada a aprender Angular desde cero, viendo las nuevas funcionalidades que ofrece Angular 17 a más versiones.

> Instalamos las dependencias
```sh
npm install
```

Este comando buscara el archivo 'package.json' de nuestro proyecto Angular e instalará todas las dependencias necesarias.

> Ejecutar el servidor de desarrollo de Angular
```sh
ng serve
```
