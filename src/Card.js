import React from 'react'
import './Card.css'

function Card({ src, title, desciption, price}) {
    return (
        <div className='card'>
            <img src={src} alt="" />
            <div className="card_info">
                <h2>{title}</h2>
                <h4>{desciption}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Card

