import React, { useState } from "react"
import BottomBar from '../src/BottomBar/BottomBar'
import FrontPage from '../src/FrontPage/FrontPage'
import EducationPage from '../src/EducationPage/EducationPage'
import ExperiencePage from '../src/ExperiencePage/ExperiencePage'
import "./App.css"
import '../src/TopBar/TopBar.css'
import MMCLogoBlack from '../src/Pictures/MMCLogoSort.png'


const App = () => {

  const [currentState, setCurrentState] = useState('Forside')

  return (
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
            <div className='ButtonsContainer'>
              {currentState !== 'Forside' ?
                <button className='TopBarButtons' onClick={() => setCurrentState('Forside')}>Forside</button>
                :
                null}
              {currentState !== 'Uddannelse' ?
                <button className='TopBarButtons' onClick={() => setCurrentState('Uddannelse')}>Uddannelser</button>
                :
                null}
              {currentState !== 'Erfaring' ?
                <button className='TopBarButtons' onClick={() => setCurrentState('Erfaring')}>Erfaring</button>
                :
                null}
            </div>
          </div>
        </div>
      </div>
      <div>
        {currentState === 'Forside' ?
          <FrontPage />
          :
          null}
        {currentState === 'Uddannelse' ?
          <EducationPage />
          :
          null}
        {currentState === 'Erfaring' ?
          <ExperiencePage />
          :
          null}
      </div>
      <BottomBar />
    </div>

  )
}

export default App
