1. Crear proyecto en React:
```
npm create vite@latest
```

2. Installar Redux tool Kit:
```
npm install @reduxjs/toolkit react-redux
```

3. Crear estructura de carpetas de Redux:
- Redux
    - store.jsx
    - states
        - categorySlice.jsx

4. Crear el Category Slice
```
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const categoriesPromise = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            const categories = [
                {
                    category: "Men",
                    items: ["Coats", "Jackets", "Party Wear", "Shirts"]
                },
                {
                    category: "Women",
                    items: ["Coats", "Jackets", "Party Wear", "Shirts"]
                },
                {
                    category: "Kids",
                    items: ["Coats", "Jackets", "Party Wear", "Shirts"]
                }
            ]
            resolve(categories);
        }, 1000)
    })
}

export const getCategories = createAsyncThunk(
    'getCategories',
    async () => {
        const res = await fetch('https://opentdb.com/api_category.php');
        const data = await res.json();
        return data.trivia_categories;
    }
)

const initialState = {
    categories:[],
    status:'idle',
    error:''
}

const categorySlice = createSlice({
    name:'Category',
    initialState,
    reducers:{},
    extraReducers:builder =>{
        builder.addCase(getCategories.pending, (state, action)=>{
            state.status = 'Loading...'
        }),
        builder.addCase(getCategories.fulfilled, (state, action)=>{
            state.status = "Success";
            state.categories = action.payload;
        }),
        builder.addCase(getCategories.rejected, (state, action)=>{
            state.status = "Failed!"
            state.error = action.error.message;
        })
    }
})

export default categorySlice.reducer;

```
5. Configurar el Store:
```
import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../Category/categorySlice";

export const store = configureStore({
    reducer: {
        categoryReducer: categorySlice
    }
})
```

7. Crear el provider del Store:
```
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './Redux/store'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

```

8. Traer Categorias con useEffect, useSelector, useDispatch

```
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from './Redux/states/categorySlice';


import './App.css'

function App() {

  const categories = useSelector(state=>state.categoryReducer.categories);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCategories())
  }, [])

  return (
    <>
      {categories.map(category =>{
        return <p key={category.id}>{category.name}</p>
      })}
    </>
  )
}

export default App


```