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
