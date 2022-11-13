import * as React from 'react';
import { information, kontaktInformation, skillsArray, toolsArray } from '../cvArrays/arrays'
import './FrontPage.css'
import pictureMe from '../Pictures/CvBillede.png'
import linkedInLogo from '../Pictures/LI-In-Bug.png'

const FrontPage = () => {
    const informations = information;
    const kontakt = kontaktInformation;
    const skills = skillsArray;
    const tools = toolsArray;
    return (
        <div className='FrontPageBackground'>
            <div className='FrontPageLayer'>
                <div className='FrontPageView'>
                    <h1 className='InformationHeader'>Personlig Information</h1>
                    <div className='InformationContainer'>
                        {informations.map((element) =>
                            <div className='InformationDiv'>
                                <div className='ElementTypeDiv'>{element.type}</div>
                                <div className='RealElementDiv'>{element.content}</div>
                            </div>)}
                    </div>
                    <h1 className='InformationHeader'>Kontakt Info</h1>
                    <div className='ContactContainer'>
                        {kontakt.map((element) =>
                            <div className='InformationDiv'>
                                <div className='ElementTypeDiv'>{element.type}</div>
                                <div className='RealElementDiv'>{element.content}</div>
                            </div>)}
                    </div>
                    <div>
                        <a href='https://www.linkedin.com/in/morten-marcussen-cramer-991344181' target="_blank">
                            <img className='LinkLogo' src={linkedInLogo} alt={linkedInLogo} />
                        </a>
                    </div>
                </div>
                <div className='StickyElement'>
                    <img className='Picture' src={pictureMe} alt={pictureMe} />
                    <div className='SkillsAndToolsContainer'>
                        <h1 className='SkillsAndToolsHeader'>Skills</h1>
                        {skills.map((element) =>
                            <p className='SkillsAndToolsElements'>{element.skill}</p>
                        )}

                        <h1 className='SkillsAndToolsHeader'>Tools</h1>
                        {tools.map((element) =>
                            <p className='SkillsAndToolsElements'>{element.tool}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrontPage