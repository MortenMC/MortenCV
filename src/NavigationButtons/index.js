import cl from 'classnames'
import React from 'react'
import {
    Link,
    useLocation,
} from "react-router-dom";

const buttons = ['Forside', 'Uddannelser', 'Erfaring']

const NavigationButtons = () => {
    const location = useLocation()

    const path = location.pathname

    return <div className='ButtonsContainer'>
        {buttons.map((button, i) => {
            const isSelected = path === `/${button}`
            return <Link key={i} className={cl('TopBarButtons', { 'selected': isSelected })} to={`/${button}`}>{button}</Link>
        }
        )}
    </div>
}

export default NavigationButtons