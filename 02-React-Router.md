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


