import React from 'react'

import './Landing.css'

import Background from '../images/working.svg'

function Landing({hide}) {
    return (
        <div className={hide?"show landing container":"landing container"}>
            <div className="landing__left">
                <h1>More than just shorter links</h1>
                <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <button className="landing__btn">Get Started</button>
            </div>
            <div className="landing__right">
                <img src={Background} alt="working" />
            </div>
        </div>
    )
}

export default Landing
