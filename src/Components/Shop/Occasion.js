import React from 'react'

const Occasion = () => {
  return (
    <div className="left-side my-4">
    <h3 className="sear-head">Occasion</h3>
    <ul className="w3layouts-box-list">
        <li>
            <input type="checkbox" className="checked"/>
            <span className="span">Casuals</span>
        </li>
        <li>
            <input type="checkbox" className="checked"/>
            <span className="span">Party</span>
        </li>
        <li>
            <input type="checkbox" className="checked"/>
            <span className="span">Wedding</span>
        </li>
        <li>
            <input type="checkbox" className="checked"/>
            <span className="span">Ethnic</span>
        </li>
    </ul>
</div>
  )
}

export default Occasion
