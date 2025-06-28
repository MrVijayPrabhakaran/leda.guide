import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componens/Header'
import AdminLogin from './componens/AdminLogin'
import DoctorReception from './componens/DoctorReception'
import Patients from './componens/Patients'
import DoctorCheckiin from './componens/DoctorCheckiin'
import ReceptionCheckin from './componens/ReceptionCheckin'
import Footer from './componens/Footer'
import MainPage from './componens/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/* <Header/> */}
       <MainPage/>
     
      {/* <AdminLogin/>
      <DoctorReception/>
      <Patients/>
      <DoctorCheckiin/>
      <ReceptionCheckin/>
      <Footer/>   */}
    </>
  )
}

export default App
