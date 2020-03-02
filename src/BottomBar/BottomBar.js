import * as React from 'react';
import './BottomBar.css'

class BottomBar extends React.Component {
    render() {
        return (
        <div className='BottomBarLayer'>
            <div className='BottomBarView'>
                <div className='BottomBarContent'>
                    <div className='BottomBarDescriptionContainer'>
                        <div className='BottomBarDescriptionContent'>
                                Dette CV er udviklet af Morten Marcussen Cramer, i teknologierne React og TypeScript
                        </div>
                    </div>
                </div> 
            </div>
        </div>
            
        )
    }
}

export default BottomBar