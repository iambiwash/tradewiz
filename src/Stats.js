import React from 'react'
import './Stats.css'

function Stats() {
  return (
    <div className='stats'>
      <div className='stats_container'>
        
        <div className='stats_header'>Stocks</div>

        {/* For our current stocks */}
        <div className='stats_content'>
          <div className='stats_row'>
          </div>
        </div>

      
        <div className='stats_header'>
          <p>Lists</p>
        </div>

      </div>

    </div>
  )
}

export default Stats
