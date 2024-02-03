1. Crear estructura de carpetas de Redux:
- Redux
    - store.jsx
    - states
        - ProductsSlice
            - productsSlice.jsx
            - productsActions.jsx
        CategoriesSlice
            - categoriesSlice.jsx
            - categoriesActions.jsx

2. Ejemplo de un Slice

```
import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from './categoriesActions';

const initialState = {
    categories:[],
    categoriesSelected:[],
    status:'idle',
    error:''
}

const categoriesSlice = createSlice({
    name:'Categories',
    initialState,
    reducers:{
        addCategorySelected:(state, action)=>{
            state.categoriesSelected = [...state.categoriesSelected, action.payload];
        },
        removeCategorySelected:(state, action)=>{
            state.categoriesSelected = state.categoriesSelected.filter(item => item != action.payload)
        }

    },
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

export const { addCategorySelected, removeCategorySelected } = categoriesSlice.actions;
export default categoriesSlice.reducer;
```

3. Ejemplo del AsyncThunk, usado para utilizado para las acciones asincronicas:

```
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
    'getCategories',
    async () => {
        const res = await fetch('https://fakestoreapi.com/products/categories');
        const data = await res.json();
        return data;
    }
)
```