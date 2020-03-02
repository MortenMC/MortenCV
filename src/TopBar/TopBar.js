import * as React from 'react';
import './TopBar.css'
import MMCLogoBlack from '../Pictures/MMCLogoSort.png'

class TopBar extends React.Component {
    render() {
        return (
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
                </div> 
            </div>
        </div>
            
        )
    }
}

export default TopBar