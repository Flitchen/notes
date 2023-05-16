import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Home, Courses, ArtificialIntelligence, WebProgramming, OperatingSystems, InformationSystemManagement, CollaborativeNetworks, News, Assignments, NoMatch, Footer } from './components';
import './styles.css'
import { Route, Routes } from 'react-router-dom'

export default function App() {


  return (
    <div className='d-flex flex-column min-vh-100'>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />

        {/* 
        Makes error when opening files (pdfs,docx,pptx).
        Document take the path of their parents while they are supposed to take path of root component (/) thus makes errors
        ---------------------------------------------------------------------------------------------------------------------
                <Route path='courses' element={<Courses />} />

        <Route path='courses/artificial-intelligence' element={<ArtificialIntelligence />} />
        <Route path='courses/web-programming' element={<WebProgramming />} />
        <Route path='courses/operating-systems' element={<OperatingSystems />} />
        <Route path='courses/information-system-management' element={<InformationSystemManagement />} />
        <Route path='courses/collaborative-networks' element={<CollaborativeNetworks />} /> 

        */}
        <Route path='courses' element={<Courses />} />

        <Route path='/artificial-intelligence' element={<ArtificialIntelligence />} />
        <Route path='/web-programming' element={<WebProgramming />} />
        <Route path='/operating-systems' element={<OperatingSystems />} />
        <Route path='/information-system-management' element={<InformationSystemManagement />} />
        <Route path='/collaborative-networks' element={<CollaborativeNetworks />} />

        <Route path='news' element={<News />} />
        <Route path='assignments' element={<Assignments />} />
        <Route path='*' element={<NoMatch />} />

      </Routes>
      <Footer />

    </div>
  )
}
