import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LoginPage from './Pages/LoginPage'
import ErrorPage from './Pages/ErrorPage'
import RegisterPage from './Pages/RegisterPage'
import database from './firebase.config'
import ResetPassword from './Components/ResetPassword/ResetPassword'
import HomePage from './Pages/HomePage'
import LayoutOne from './Layouts/LayoutOne'
import Chat from './Components/Chat/Chat'
import Friend from './Components/Friend/Friend'
import Notification from './Components/Notification/Notification'
import Setting from './Components/Setting/Setting'

database

function App() {

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element = {<LayoutOne/>} >
           <Route index element = {< HomePage />} />
           <Route path='/chat' element = {< Chat />} />
           <Route path='/friend' element = {< Friend />} />
           <Route path='/notification' element = {< Notification />} />
           <Route path='/setting' element = {< Setting />} />
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
