import React, { Component } from "react"
import TopBar from '../src/TopBar/TopBar'
import BottomBar from '../src/BottomBar/BottomBar'
import FrontPage from '../src/FrontPage/FrontPage'
import EducationPage from '../src/EducationPage/EducationPage'
import ExperiencePage from '../src/ExperiencePage/ExperiencePage'
import "./App.css"
import '../src/TopBar/TopBar.css'
import MMCLogoBlack from '../Pictures/MMCLogoSort.png'


class App extends Component {
  render() {
    return (
        <div>
          <div className='TopBarLayer'>
            <div className='TopBarView'>
                <div className='TopBarContent'>
                    <div className='LogoContainer'>
                        <img className='LogoContent' src={MMCLogoBlack} alt={MMCLogoBlack}/>
                    </div>
                    <div className='CVContainer'>
                        <div className='CVContent'>
                            Curriculum Vitae
                        </div>
                    </div>
                    <div>
                      <button>Forside</button>
                      <button>Uddannelser</button>
                      <button>Erfaring</button>
                    </div>
                </div> 
            </div>
          </div>
          <div>
            <FrontPage/>
            <EducationPage/>
            <ExperiencePage/>
          </div>
          <BottomBar/>
        </div>
      
    )
  }
}

export default App
