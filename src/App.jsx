import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Home, Courses, ArtificialIntelligence, WebProgramming, OperatingSystems, InformationSystemManagement, CollaborativeNetworks } from './components';
import './styles.css'
import { Route, Routes } from 'react-router-dom'

export default function App() {


  return (
    <>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/artificial-intelligence' element={<ArtificialIntelligence />} />
        <Route path='/web-programming' element={<WebProgramming />} />
        <Route path='/operating-systems' element={<OperatingSystems />} />
        <Route path='/information-system-management' element={<InformationSystemManagement />} />
        <Route path='/collaborative-networks' element={<CollaborativeNetworks />} />
      </Routes>


    </>
  )
}


