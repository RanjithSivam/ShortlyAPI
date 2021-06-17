import React from 'react'
import './Statistics.css'

import SearchAPI from './SearchAPI'
import Advanced from './Advanced'

function Statistics() {
    return (
        <div className="statistics">
            <div className="container">
                <SearchAPI />
                <Advanced />
            </div>
        </div>
    )
}

export default Statistics
