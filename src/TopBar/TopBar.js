import * as React from 'react';
import './TopBar.css'

class TopBar extends React.Component {
    render() {
        return (
        <div className='TopBarLayer'>
            <div className='TopBarView'>
                <div className='TopBarContent'>
                    <div className='LogoContainer'>
                        <div className='LogoContent'>Logo</div>
                        {/* <img style={{height: '50px', margin: '10px'}} src={MMCLogoBlack} alt={MMCLogoBlack}/> */}
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