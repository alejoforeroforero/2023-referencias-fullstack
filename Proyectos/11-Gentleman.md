# Instalaciones

- npm create vite@latest (usar typescript)
- npm install @mui/material @emotion/react @emotion/styled
- npm install styled-components
- npm install @mui/x-data-grid
- npm install @reduxjs/toolkit react-redux
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

- Hay además un index.ts en el root de pages (¿es esto el Barrel?):

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

- Usar el data grid de mui:
```
npm install @mui/x-data-grid

import { DataGrid } from '@mui/x-data-grid';
```

- Crear el modelo de Person según la info del Data. Para esto hay que crear una carpetad de models y allí el tipo de info para ser exportado en las características de typescript:
```
export interface Person{
    id:string,
    name:string,
    category:string,
    company: string,
    levelOfHappiness: number
}

```

- Uso de la tabla de mui (leer documentación)
```
const columns = [
    {
      field: "actions",
      headerName: "",
      type: "actions",
      sortable: false,
      width: 150,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <Checkbox
              size="small"
              checked={isSelected(params.row)}
              onChange={() => handleChange(params.row)}            
            />
          }
        </>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Categories",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  return (
    <DataGrid
      initialState={{
        pagination: { paginationModel: { pageSize: 5 } },
      }}
      rows={People}
      columns={columns}
      disableColumnSelector
      disableRowSelectionOnClick
      pageSizeOptions={[5, 10, 25]}
      autoHeight
      getRowId={(row: any) => row.id}
    />
  );
```
- Redux Toolkit
  - Instalar Redux si no está instalado: npm install @reduxjs/toolkit react-redux
  - Crear una carpeta de redux con el store.ts y generar el modelo:
  ```
  import { Person } from "@/models";

  export interface AppStore{
      people:Person[]
  }

  ```

