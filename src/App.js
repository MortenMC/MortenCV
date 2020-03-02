import React, { Component } from "react"
import BottomBar from '../src/BottomBar/BottomBar'
import FrontPage from '../src/FrontPage/FrontPage'
import EducationPage from '../src/EducationPage/EducationPage'
import ExperiencePage from '../src/ExperiencePage/ExperiencePage'
import "./App.css"
import '../src/TopBar/TopBar.css'
import MMCLogoBlack from '../src/Pictures/MMCLogoSort.png'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentState: 'Forside'
    };
}

setSelectedStateView = (temp) =>  {
  this.setState({ currentState: temp.toString()}, () => {})
}

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
                      <button className='TopBarButtons' onClick={() => this.setSelectedStateView('Forside')}>Forside</button>
                      <button className='TopBarButtons' onClick={() => this.setSelectedStateView('Uddannelse')}>Uddannelser</button>
                      <button className='TopBarButtons' onClick={() => this.setSelectedStateView('Erfaring')}>Erfaring</button>
                    </div>
                </div> 
            </div>
          </div>
          <div>
            {this.state.currentState === 'Forside' ?
            <FrontPage/>
            :
            null}
            {this.state.currentState === 'Uddannelse' ?
            <EducationPage/>
            :
            null}
            {this.state.currentState === 'Erfaring' ?
            <ExperiencePage/>
            :
            null}
          </div>
          <BottomBar/>
        </div>
      
    )
  }
}

export default App
