# <samp>Conceptos previos a Angular</samp>
Para comenzar con esta aventura, debemos ya tener instalado node.js y debemos de instalar la herramienta en linea de comandos de Angular. Esta herramienta ya está disponible como un paquete de node.js. Por lo tanto, podemos instalarlo usando el gestos de paquetes de Django.

> Instalar la herramienta en linea de comandos de Angular
```sh
sudo npm install -g @angular/cli
```

La opción `-g` permite que el comando `ng` este disponible a nivel global. Este comando lo vamos a utilizar para cualquier acción que querramos hacer con Angular.

> Inicar un proyecto con Angular
```sh
ng new angular-demo
```
Ahora podemos abrir nuestro derectorio del proyecto y empezar a trabajar con Angular.

# <samp>Conceptos claves en Angular</samp>  
1. Empezemos definiendo que el archivo `src/main.ts` es el punto de entrada de una aplicación Angular, es donde comienza la ejecución de la aplicación.

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
```
Como observamos, se importa dos archivos importantes ubicados en `src/app/` que son basicamente la configuración de la `app/` y el componente raiz de nuestra aplicación. 

## <samp>What is a Component in Angular ?</samp>
Un componente en Angular es una clase **TypeScript** decorada con el decorador *@Component*, que define los metadatos necesarios para que Angular pueda crear y renderizar el componente.

| Partes de un componente                                                           |
|-----------------------------------------------------------------------------------|
| <samp>Clase TypeScript:</samp> Contiene la lógica y los datos del componente      |
| <samp>Plantilla HTML:</samp> Define la estructura y el contenido del componente   |
| <samp>Estilos CSS</samp> Aplican estilos especificos al componente                |

Por ejemplo, si accedemos al directorio `src/app/` veremos los dos archivos importados, ahora abrimos el archivo `src/app/app.component.ts` veremos una estructura parecida a la siguiente:

```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-demo';
}
```

2. En la platilla `src/index.html` y especificamente en la etiqueta `app-root`, es donde se va a renderizar la raiz de nuestra aplicación, donde Angular inyecta la aplicación. La etiqueta `app-root` es el selector del componente raíz visto anteriormente, podría cambiarse el nombre del selector y en el componente y en consecuencia en la platilla.

---
Ahora con estos conceptos bases podemos comprender cómo esta estructurado nuestro proyecto y estamos listos para inicializarlo.

> Inicializar un servidor de desarrollo
```sh
ng serve
```

# <samp>Creating a Component</samp>
Debemos de utilizar la herramienta en CLI de Angular

> Crear un componente `user`
```sh
ng generate component user
```

Si observamos qué ha pasado con el directorio `src/app/` nos daremos cuenta que se ha creado un nuevo directorio conn el nombre de `user`. En este nuevo directorio se han creado diferentes archivos que se asemejan a la estructura del componente root de la aplicación.

```sh
CREATE src/app/user/user.component.css (0 bytes)
CREATE src/app/user/user.component.html (19 bytes)
CREATE src/app/user/user.component.spec.ts (578 bytes)
CREATE src/app/user/user.component.ts (226 bytes)
```

## <samp>How use the new `user` component in the `app` component ?</samp>
Lo primero que debemos de hacer es importar este componente dentro del componente raiz. Por lo tanto, nos dirigimos hacia `src/app/app.component.ts` en donde agregamos dicho componente.

```sh
import { UserComponent } from './user/user.component';

// ...

imports: [RouterOutlet, UserComponent],
```

Ahora si podemos usar la etiqueta definida en `src/app/user/user.component.ts` en la plantilla de `src/app/app.component.html`. Por ejemplo si modificamos dicho archivo como lo siguiente.

```sh
<h1>Hello world from {{ title }}</h1>
<app-user></app-user>
```

La renderización lo podra ver al ejectuar el servidor de desarrollo de Angular e ingresar al URL por tu navegador.

# <samp>Las directivas en Angular</samp>
Ahora usemos el componente 'user' que hemos creado, definiendo algunas propiedades para el 'user'.

```typescript
export class UserComponent {
  username = 'Jorge';
  isLoggedIn = true;
}
```
## <samp>How can we put a conditional ?</samp>
Para esta acción, vamos a utilizar la **nueva sintaxis de directivas desde Angular 17**, por ejemplo podemos verificar si el usuario esta logueado o no está logueado.

```typescript
<section>
  @if (isLoggedIn) {
    <p>Welcome, {{ username }}</p>
  } @else {
    <p>Log In</p>
  }
</section>
```
## <samp>How can we put a loop ?</samp>
Para ello vamos a crear un nuevo componente denominado 'game' y en la clase GamesComponent definimos una lista de objetos literales.


```typescript
export class GamesComponent {
  games = [
    {
      id: 1;
      name: 'Fortnite'
    },
    {
      id: 2;
      name: 'Left 4 Dead 2'
    },
    {
      id: 3;
      name: 'Valorant'
    },
    {
      id: 4;
      name: 'Vice City'
    }
  ]
}
```
Ahora para poder mostrar todos estos datos, tenemos la necesidad de iterar por cada uno de ellos, por lo tanto aqui utilizamos la nueva sintaxis de la directiva de un 'loop' en Angular.

```typescript
<ul>
  @for (game of games, track game.id) {
    <li>{{ game.name }}</li>
  }
</ul>
```

### Dos puntos importantes
- En el 'for' no debemos de indicar el tipo de variable de 'game', no es parte de la nueva sintaxis de Angular 17 a más.

- Debemos indicar cuál es el identificador único, pues Angular necesita una forma eficiente de identificar y rastrear los elementos individuales en la lista. Con esta clave Angular puede optimizar el proceso de detección de cambios, evitando la destrucción y recreación innecesaria de elementos del DOM.

Este componente lo vamos a utilizar en 'user', por lo tanto necesitamos importar el componente 'games' en el componente 'user'.

# <samp>Estados y eventos</samp>
Nos dirigimos hacia el componente 'user' y vamos a agregar una imagen, lo interesante aqui es que le vamos a agregar un evento. Cuando hagamos click, vamos a saludar.

```typescript
<img
  (click)="greet()"
  src="https://github.com/jorghee"
  alt="photo">
```

Como vemos, este método que se llamará cuando se haga click en la imagen será 'greet'. Este debe de estar implementado en la calse UserComponent.

---
Ahora si deseamos cambiar estados, podemos hacer lo siguiente.

```typescript
<button (click)="isLoggedIn = true" type="button">Log in</button>
```
Lo que estamos haciendo es modificar directamente el atributo 'isLoggedIn' de la clase UserComponent. Este atributo lo hemos cambiado a false, pero cuando ejecutamos este evento (pulsamos el botón) entonces puede cambiar de estado.

# <samp>Pasar información de un componente padre a un componente hijo y viceversa</samp>

## <samp>Del componente padre al componente hijo</samp>
La primera modificación que intentaremos hacer es la platilla HTML de 'user', pasando a la etiqueta del componente 'games' la propiedad 'username' del componente padre '(user)'.

```typescript
<app-games username="{{ username }}"></app-games>
```

Sin embargo esto nos dará un error ya que en el componente 'games' no existe ninguna propiedad 'username' que pueda recibirla. Por lo tanto debemos ir a este componente y declarar esta propiedad, pero el siguiente problema es que no es tan simple como se declara normalmente.

```typescript
// Uso del decorador, este component se comporta como hijo
@Input() username: string;
```

Como vemos, se está usando un decordor especial. Indica que el componente 'games' puede recibir una propiedad de tipo string de su componente padre.

> :warning: No olvidemos importar la clase `Input` y el componente padre 'UserComponent'

Ahora si podemos usar la propiedad en el componente hijo

```typescript
<h3>Los juegos favoritos de {{ username }}</h3>
```

## <samp>Del componente hijo al componente padre</samp>
Imaginemos que necesitamos avisar al componente 'user' sobre los juegos del usuario que están en el componente 'games'. Entonces nos dirigimos inmediatamente al componente 'games' y agregamos un evento a cada juego generado.

```typescript
<li (click)="fav(game.name)">{{ game.name }}</li>
```

Entonces, obviamente, necesitamos implementar esta función en la clase GamesComponent. Sin embargo esta función no realizá una tarea común, sino que debe de ejecutar un evento que le indique al contenedor padre sobre lo que ha pasado.

```typescript
fav(gameName: string) {
  this.addFavoriteEvent.emit(gameName);
}
```

Como observamos estemos utilizando la función `emit` de una propiedad `addFavoriteEvent`, veamos de qué tipo es esta propiedad.

> No te olvides imporat las clases Output y EventEmitter

```typescript
// Propiedad de tipo EventEmitter
@Output() addFavoriteEvent = new EventEmitter<string>();
```
### What is EventEmitter ?
Es una clase proporcionada por Angular que se utiliza para emitir eventos personalizados. Permite a un componente hijo emitir eventos y a un componente padre suscribirse a esos eventos. Llamando al método 'emit' emitimos un evento personalizado desde un componente hijo hacia su componente padre.

Ahora necesitamos que el contenedor padre reciba esta información, por ello lo primero que hacemos es crear una propiedad que guarde la información recibida. Luego necesitamos un método que se encargue de asignar la información recuperada a la propiedad que lo almacenará.


```typescript
favGame = '';

// ...

getFavorite(gameName: string) {
  this.favGame = gameName;
}
```

Finalmente necesitamos suscribir al componente 'user', que se comporta como padre, al evento creado de forma personalizada.

```typescript
<app-games
  (addFavoriteEvent)="getFavorite($event)"
  username="{{ username }}"></app-games>

  @if (favGame !== '') {
    <p>Tu juego favorito es {{ favGame }}</p>
  }
```
