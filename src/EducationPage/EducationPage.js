import * as React from 'react';
import './EducationPage.css'
import { educationArray, developmentArray, technologiesArray, programmingArray, othersArray, internshipArray } from '../cvArrays/arrays';


class EducationPage extends React.Component {

    render() {

        return (
            <div className='EducationPageBackground'>
                <div className='EducationPageLayer'>
                    <h1 className='EducationHeader'>Uddannelser</h1>
                    {educationArray.map((element) =>
                    <div className='EducationPageContainer'>
                        <div className='TimeLineContainer'/>
                        <div className='EducationPageView'>
                            <div className='EducationContentView'>
                                <div className='EducationPageContentContainer'>
                                    <div className='EducationContentStyle'>{element.year}</div>
                                </div>
                                    
                                <div className='EducationDevider'></div>
                                <div className='EducationPageContentContainer'>
                                    <div className='EducationContentStyle'>{element.title}</div>
                                </div>
                            </div>

                            {element.education === 'Datamatiker' ?
                            <div>
                                <p className='EducationDescription'>{element.description}</p>
                                <h1 className='WorkedWithHeader'>Datamatiker studiet</h1>
                                <p className='SpaceFromNextSection'>
                                    Metoder og teknologier jeg har arbejdet med under studiet
                                </p>

                                <h2>Agile arbejdsmetoder</h2>
                                <div className='WorkedWithContainer'>
                                    {developmentArray.map((element) => 
                                    <div className='WorkedWithDiv'>
                                        <div className='WorkedWithElementDiv'>{element.method}</div>
                                    </div>)}
                                </div>

                                <h2>Sprog</h2>
                                <div className='WorkedWithContainer'>
                                    {programmingArray.map((element) => 
                                    <div className='WorkedWithDiv'>
                                        <div className='WorkedWithElementDiv'>{element.language}</div>
                                    </div>)}
                                </div>

                                <h2>Teknologier</h2>
                                <div className='WorkedWithContainer'>
                                    {technologiesArray.map((element) => 
                                    <div className='WorkedWithDiv'>
                                        <div className='WorkedWithElementDiv'>{element.tech}</div>
                                    </div>)}
                                </div>

                                <h2>Andet</h2>
                                <div className='WorkedWithContainer'>
                                    {othersArray.map((element) => 
                                    <div className='WorkedWithDiv'>
                                        <div className='WorkedWithElementDiv'>{element.software}</div>
                                    </div>)}
                                </div>

                                <h1 className='WorkedWithHeader'>Praktikperiode</h1>
                                {internshipArray.map((element) =>
                                <div className='InternshipDiv'>
                                    <div className='InternshipFirmAndDateContainer'>
                                        <div className='InternshipFirm'>
                                            {element.firm}
                                        </div>
                                        <div className='InternshipDate'>
                                            {element.dateFrom} - {element.dateTo}
                                        </div>
                                    </div>
                                    <div className='InternshipDescriptionContainer'>
                                        <p className='InternshipDescriptionContent'>
                                            {element.description}
                                        </p>
                                    </div>
                                </div>)}

                                <h1 className='WorkedWithHeader'>Hovedopgave</h1>
                                <div className='InternshipDiv'>
                                    <p className='MainProjectDescription'>
                                        Jeg og tre klassekammerater dannede et team i forbindelse med vores hovedopgave, hvor vi i samarbejde med firmaet, Infomedia, på baggrund af deres ønsker, har udviklet systemet, ARMA (Approve Reject Media Analysis). Systemet vi har udviklet, er grundstenene for et redesign af deres allerede eksisterende system, GAMA (Godkendt Afvist Media Analysis), som det er tiltænkt at skulle erstatte. Vi havde fordelt arbejdet således, at to arbejdede på backenden og to på frontenden. Jeg var en af de to, som tog sig af frontend, hvilket vi har udviklet i sprogene, React og TypeScript
                                    </p>
                                </div>
                                
                            </div>
                            :
                            null
                            }

                        </div>
                        <div className='TimeLineContainer'/>
                    </div>)}
                </div>
            </div>
        )
    }
}
export default EducationPage;