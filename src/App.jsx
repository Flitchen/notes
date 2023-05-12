import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Home, Courses, ArtificialIntelligence, WebProgramming, OperatingSystems, InformationSystemManagement, CollaborativeNetworks, News, Assignments, NoMatch } from './components';
import './styles.css'
import { Route, Routes } from 'react-router-dom'

export default function App() {


  return (
    <>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='courses' element={<Courses />} />

        <Route path='courses/artificial-intelligence' element={<ArtificialIntelligence />} />
        <Route path='courses/web-programming' element={<WebProgramming />} />
        <Route path='courses/operating-systems' element={<OperatingSystems />} />
        <Route path='courses/information-system-management' element={<InformationSystemManagement />} />
        <Route path='courses/collaborative-networks' element={<CollaborativeNetworks />} />

        <Route path='news' element={<News />} />
        <Route path='assignments' element={<Assignments />} />
        <Route path='*' element={<NoMatch />} />


      </Routes>

    </>
  )
}


