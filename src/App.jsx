import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import './App.css';
import Main from './pages/Main';
import HHome from './pages/home';
import Cart from './pages/Cart'; 
import Frontpage from './Compound/Frontpage';
import Ffrontpage from './pages/Ffrontpage';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<HHome/>}>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/home' element={<Main/>}/>
          <Route index element={<Ffrontpage/>}/>
        </Route>
      </>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
