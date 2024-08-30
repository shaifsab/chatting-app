import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LoginPage from './Pages/LoginPage'
import ErrorPage from './Pages/ErrorPage'
import RegisterPage from './Pages/RegisterPage'
import database from './firebase.config'
import ResetPassword from './Components/ResetPassword/ResetPassword'
import HomePage from './Pages/HomePage'
import LayoutOne from './Layouts/LayoutOne'

database

function App() {

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element = {<LayoutOne/>} >
           <Route index element = {< HomePage />} />
        </Route>
        <Route path='/login' element = {< LoginPage />} />
        <Route path='/register' element = {< RegisterPage />} />
        <Route path='/resetpassword' element = {< ResetPassword />} />
        <Route path='*' element = {< ErrorPage />} />
      </Route>
    )
  )
  

  return (
    <>

    <RouterProvider router={route}/>

    </>
  )
}

export default App
