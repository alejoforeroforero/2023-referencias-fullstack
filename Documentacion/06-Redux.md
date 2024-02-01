# Redux

1. <a href='#instalacion'>Instalación</a>
1. <a href='#create-store'>Create Store antiguo</a>
1. <a href='#configure-store'>Configure Store Redux toolkit</a>


**************
<h2 id='configure-store'>Configure Store Redux toolkit</h2>

1. ConfigureStore

- En main.jsx, crear el Store para ponerlo en el nivel raiz de la app:

```
    import { configureStore } from '@reduxjs/toolkit'

    const store = configureStore({
        reducer: {}
    })
```

2. Crear el Provider

```
    import { Provider } from 'react-redux'

    <Provider store={store}>
      <App />
    </Provider>
```

3. Crear un Slice para configurar el estado inicial y los reducers que necesita el store. 

```
const playerSlice = createSlice({
    name:'player',
    initialState:{
        canciones:[
            {id:1, title:'Ausencia', auth:'Hector Lavoe'},
            {id:2, title:'Quitate la mascara', auth:'Ray Barreto' },
            {id:3, title:'Este mambo', auth:'Mongo Santamaria' },
        ],
        favoritas:[

        ],
        actual:[

        ],
        isPlaying:false,
        orderAsc:true,
        orderType:'title'
    },
    reducers:{
        addToFavorites: (state, action)=>{
            state.favoritas = [...state.favoritas, action.payload]
        }
    }
})

export const { addToFavorites } = playerSlice.actions;
export const playerReducer = playerSlice.reducer

```

4. import el reducer del slice y asignarlo al Store:

```
const store = configureStore({
  reducer: playerReducer
})
```

5. Usar useSelector para acceder a partes específicas del Store. Disptach para acceder al hook de redux que despacha eventos vinculados al Slice. Los eventos creados en el slice se deven importar también en el componente para pasarlos en el Dispatch

```
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./main";

  const canciones = useSelector(state => state.canciones)
  const dispatch = useDispatch()

  const handleAdd = (cancion)=>{
    dispatch(addToFavorites(cancion))
  }

```

6. Al Store se le pueden asignar varios reducers para manejar diversas variables globales. Estos reducers hacen parte de determinados slices donde se especifican los métodos que alteran los estados de las variables globales que se van a usar en la aplicación.

```
const store = configureStore({
  reducer: {
    pr: productReducer,
    lr: loginReducer
  }
})
```

**************
<h2 id='instalacion'>Instalación </h2>

Redux Toolkit

```
npm install @reduxjs/toolkit react-redux
```

Con useStore, el cual está desactualizado:

```
npm install --save redux react-redux
```

**************
<h2 id='create-store'>Create Store antiguo </h2>

1. createStore() y reducer
2. Provider
3. useSelector((state)=> state.products) *Selecciona elementos específicos
4. useDispatch() hook *Para enviar data al store
    - dispatch({type:'PURCAHSE', payLoad:obj})
5. Combine reducers *Revisar este concepto para el toolkit. En el toolkit se llaman 'slices'
    - combineReducers() *es un hook de redux!
6. redux-thunk: Middleware for asynchronous redux

