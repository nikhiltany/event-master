import React from 'react'
import './Home.css'
import Banner from './Banner'
// eslint-disable-next-line
import Card from './Card'


function home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
            <Card
                src="https://i.ibb.co/1MPnP6c/harry.jpg"
                title="Harry Styles"
                description=" Activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://i.ibb.co/6YTgfVs/ipad.jpg"
                title="Get live with zoom call and your favourite singer"
                description="Biggest ever show"
            />
            <Card
                src="https://i.ibb.co/LnLTj7q/shawn.jpg"
                title="Shawn Mendes"
                description="heyyy"
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://i.ibb.co/hVFB39R/billie.jpg"
                title="Billie eilish  is Live"
                description="we the best music"
                price="₹130"
            />
            <Card
                src="https://i.ibb.co/5Fc2zd4/77143398.jpg"
                title="Justin Bieber is Live"
                description="we the best music"
                price="₹350"
            />
            <Card
                src="https://i.ibb.co/KLnwkM3/selena.jpg"
                title="Selena is LIVE"
                description="we the best music"
                price="₹70"
            />
            </div>
        </div>
    )
}

export default home
