
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/Home/About';
import Login from './Components/Home/Login';
import Register from './Components/Home/Register';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const myroute = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Home/>}>
      {/* <Route path='/' element={<Home />} /> */}
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/ragister' element={<Register />} />
    </Route>
  )
)



function App() {


  return (
    <>
      <RouterProvider router={myroute}></RouterProvider>
      <ToastContainer
        position="top-center"
      />
    </>
  )
}

export default App
