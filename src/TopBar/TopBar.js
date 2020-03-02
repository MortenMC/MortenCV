import * as React from 'react';
import './TopBar.css'

class TopBar extends React.Component {
    render() {
        return (
        <div style={{display: 'flex', marginTop: '10px', justifyContent: 'center'}}>
            <div className='TopBarView'>
                <div className='TopBarContent'>
                    <div style={{display: 'flex', alignItems: 'center', marginLeft: '50px'}}>
                        <div style={{height: '50px', margin: '10px'}}>Logo</div>
                        {/* <img style={{height: '50px', margin: '10px'}} src={MMCLogoBlack} alt={MMCLogoBlack}/> */}
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{fontSize: '25px', color: 'black', fontWeight: 600}}>
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