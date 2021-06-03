import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>12 events · Wear Mask · Stay safe </p>
                <h1> Events nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Top selling shows</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Type of event</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                img="https://i.ibb.co/B4zJcvR/65090428.jpg"
                location="New jersey"
                title="Selena"
                description="Witness the crowd going crazy,Coke, fries free , 50% off on booking from app"
                star={4.73}
                price="₹500"
                total="₹5000 total /including GST"
            />

            <SearchResult
                img="https://i.ibb.co/HrjBpqT/jason.jpg"
                location="California"
                title="Catch Jason live with us "
                description="Coke, fries free , 50% off on booking from app"
                star={4.3}
                price="₹502"
                total="₹600 total /including GST"
            />

            <SearchResult
                img="https://i.ibb.co/LnLTj7q/shawn.jpg"
                location="come live with us"
                title="Shawn straight from Time square"
                description="Coke, fries free , 50% off on booking from app"
                star={3.8}
                price="₹500"
                total="₹515 total /including GST"
            />
            <SearchResult
                img="https://i.ibb.co/5Fc2zd4/77143398.jpg"
                location="Ohio"
                title="Jazz with justin"
                description="Coke, fries free , 50% off on booking from app"
                star={4.1}
                price="₹150"
                total="₹500 total /including GST"
            />
            <SearchResult
                img="https://i.ibb.co/1MPnP6c/harry.jpg"
                location="California"
                title="Harry Styles"
                description="Coke, fries free , 50% off on booking from app"
                star={5.0}
                price="₹60"
                total="₹450 total /including GST"
            />
            <SearchResult
                img="https://i.ibb.co/LxGstfx/ariana.jpg"
                location="New jersey"
                title="Ariana live"
                description="Coke, fries free , 50% off on booking from app"
                star={4.23}
                price="₹65"
                total="₹290 total /including GST"
            />
            <SearchResult
                img="https://i.ibb.co/6YTgfVs/ipad.jpg"
                location="London"
                title="Zoom call with your favourite celeb"
                description="Coke, fries free , 50% off on booking from app"
                star={3.85}
                price="₹90"
                total="₹250 total /including GST"
            />
        </div>
    )
}

export default SearchPage
