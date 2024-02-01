# Instalaciones:

- npm create vite@latest
- npm i
- npm i react-router-dom
- import { BrowserRouter } from 'react-router-dom' en Main.jsx
- Crear el contexto:
  <BrowserRouter>
  <App />
  </BrowserRouter>
- import { NavLink, Link, Route, Routes } from 'react-router-dom' en App.jsx
- Crear las rutas después de importar:

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        <Route path='/demos' element={<DemosLayout />}>
          <Route index element={<Demos />} />
          <Route path='gsap' element={<Gsap />} />
          <Route path='tailwind' element={<Tailwind />} />
        </Route>

        <Route path='/users'>
          <Route index element={<Users />} />
          <Route path=':id' element={<User />} />
          <Route path='new' element={<UserNew />} />
        </Route>


        <Route path='*' element={<NotFound />} />
        <Route />
      </Routes>

- Crear la nevegación:

        <nav>
            <ul>
            <li><NavLink className='menu' to='/'>Home</NavLink></li>
            <li><NavLink className='menu' to='/about'>About</NavLink></li>
            <li><NavLink className='menu' to='/users/'>User</NavLink></li>
            <li><NavLink className='menu' to='/demos'>Demos</NavLink></li>
            <li><NavLink className='menu' to='/estudio'>Estudio</NavLink></li>
            </ul>
        </nav>

- Pasar Data con State:

1. Poner state en el NavLink

```
<nav>
    <ul>
        {instrumentos.map(instrumento => {
            return (
                <li key={instrumento.id}>
                    <NavLink
                        state={instrumento}
                        to={instrumento.url}>{instrumento.item}
                    </NavLink>
                </li>
            )
        })}

    </ul>
</nav>
```

2. Hacer uso del useLocationHook en el child

```
const Instrumento = () => {

  const location = useLocation();

  return (
    <div>{JSON.stringify(location)}</div>
  )
}
```

- Pasar Data con Context:

1. Poner context y la data en el Outlet:

```
<Outlet context={instrumentos} />
```

2. Usar el useOutletContext hook:

```
const instrumentos = useOutletContext();
```
