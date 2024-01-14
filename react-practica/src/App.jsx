import { Routes, Route, NavLink, Outlet, useParams } from 'react-router-dom'

function App() {

  return (
    <>
      <nav>
        <ul>
          <li><NavLink to='home'>Home</NavLink></li>
          <li><NavLink to='products'>Products</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path='home' element={<h1>Home</h1>}></Route>
        <Route path='products' element={<Products />}>
          <Route path=':item' element={<Details />}></Route>
        </Route>

      </Routes>
    </>
  )
}

function Products() {
  return (
    <>
      <nav>
        <ul>
          <li><NavLink to='carros'>Carros</NavLink></li>
          <li><NavLink to='motos'>Motos</NavLink></li>
          <li><NavLink to='Bicicletas'>Bicicletas</NavLink></li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

function Details() {
  let {item} = useParams()
  return (
    <h1>{item}</h1>
  )
}

export default App
