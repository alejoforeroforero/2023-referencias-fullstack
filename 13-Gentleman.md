# Instalaciones

- npm create vite@latest (usar typescript)
- npm install @mui/material @emotion/react @emotion/styled
- npm install styled-components
- Alias:
```
// also don't forget to `npm i -D @types/node`, so __dirname won't complain
import * as path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
```
Luego en el tsconfig.json:
```
{
  "compilerOptions": {
    // ...rest of the template
    "types": ["node"],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

*Ojo copiar sólo esto en compilerOptions:
```
"paths": {
      "@/*": ["./src/*"]
    },
```


# Comandos
(usar la extensión React create component de Javier Gutierrez)
- npm run dev

# Pasos
- Crear una carpeta de Data y poner el json o el TS
- Crear una carpeta de pages (clean Architecture)
- Crear el componente de Home. Viene dentro de una carpeta llamada Home y con dos archivos: Home.tsx y index.tsx

```
import React from 'react';

export interface Homeinterface {}

const Home: React.FC<Homeinterface>  = () => {
	return (
		<div>
 			Home works!
 		</div>
	);
};

export default Home;
```

```
export { default as Home } from './Home';
```

- Hay además un index.ts en el root de pages:

```
export * from './Home'
```

- Crear el Navbar dentro de la carpeta de components, con la misma estructura de Home y su barrel
- Usar en AppBar de MUI: https://mui.com/material-ui/api/app-bar/

```

import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';


export interface NavbarInterface{}

const Navbar: React.FC<NavbarInterface>  = () => {
	return (
		<AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Alejo React APP
          </Typography>
        </Toolbar>
      </AppBar>
	);
};

export default Navbar;

```

* shift + alt + o -> Para borrar y organizar importaciones

***** Minuto 45

