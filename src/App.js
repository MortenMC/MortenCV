import React from "react"
import BottomBar from '../src/BottomBar/BottomBar'
import FrontPage from '../src/FrontPage/FrontPage'
import EducationPage from '../src/EducationPage/EducationPage'
import ExperiencePage from '../src/ExperiencePage/ExperiencePage'
import "./App.css"
import '../src/TopBar/TopBar.css'
import MMCLogoBlack from '../src/Pictures/MMCLogoSort.png'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavigationButtons from './NavigationButtons'

const App = () => {

  return (
    <Router>
      <div>
        <div className='TopBarLayer'>
          <div className='TopBarView'>
            <div className='TopBarContent'>
              <div className='LogoContainer'>
                <img className='LogoContent' src={MMCLogoBlack} alt={MMCLogoBlack} />
              </div>
              <div className='CVContainer'>
                <div className='CVContent'>
                  Curriculum Vitae
                </div>
              </div>
              <NavigationButtons />
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/Forside" element={<FrontPage />} />
          <Route path="/Uddannelser" element={<EducationPage />} />
          <Route path="/Erfaring" element={<ExperiencePage />} />
          <Route
            path="*"
            element={<Navigate to="/Forside" replace />}
          />
        </Routes>
        <BottomBar />
      </div>
    </Router>
  )
}

export default App
