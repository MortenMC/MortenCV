import * as React from 'react';
import './ExperiencePage.css'

import { experienceArray } from '../cvArrays/arrays'



class ExperiencePage extends React.Component {

    render() {

        const experiences = experienceArray;
        return (
            <div className='ExperiencePageBackground'>
                <div className='ExperiencePageLayer'>
                    <h1 className='ExperienceHeader'>Erhvervserfaring</h1>
                    {experiences.map((element) =>
                        <div className='ExperiencePageContainer'>
                            <div className='TimeLineContainer'/>
                            <div className='ExperiencePageView'>
                                <div className='ExperienceInfoContainer'>
                                    <div className='ExperienceInfoContent' >
                                        <div className='ExpereinceDates'>{element.dateFrom} - {element.dateTo}</div>
                                        <div className='ExperienceFirm'>{element.firm}</div>
                                    </div>
                                </div>
                                
                                <div className='ExperiencePageDevider'></div>
                                <div className='ExperienceDescriptionContainer'>
                                    <div className='ExperienceDescriptionContent'>{element.description}</div>
                                </div>
                            </div>
                            <div/>
                        </div>
                    )}

                </div>
                
            </div>
        )
    }
}

export default ExperiencePage;