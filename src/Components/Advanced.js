import React from 'react'
import './Advanced.css'

import Image1 from '../images/icon-fully-customizable.svg'
import Image2 from '../images/icon-detailed-records.svg'
import Image3 from '../images/icon-brand-recognition.svg'

function Advanced() {
    return (
        <div className="advanced">
            <div className="advanced__heading">
                <h1>Advanced Statistics</h1>
                <p>Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>
            </div>

            <div className="advanced__content">
                <hr />
                <div className="contents contents1">
                    <div className="content__img">
                        <img src={Image1} alt="customizable image" />
                    </div>

                    <div className="content__text">
                        <h4>Brand Recognition</h4>
                        <p>Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.</p>
                    </div>
                </div>
                <div className="contents contents2">
                    <div className="content__img">
                        <img src={Image2} alt="customizable image" />
                    </div>

                    <div className="content__text">
                        <h4>Detailed Records</h4>
                        <p>Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.</p>
                    </div>
                </div>
                <div className="contents contents3">
                    <div className="content__img">
                        <img src={Image3} alt="customizable image" />
                    </div>

                    <div className="content__text">
                        <h4>Fully Customizable</h4>
                        <p>Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advanced
