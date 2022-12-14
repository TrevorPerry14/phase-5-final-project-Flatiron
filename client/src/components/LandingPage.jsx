import React from 'react'
import { useNavigate } from "react-router-dom"

export default function LandingPage() {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/signup')
    }
    return (
        <div>
            <h1>LandingPage</h1>
            <div>
                <h1>Game Exchange</h1>
                <h2>Buy, Sell, and Trade Vintage Video Games and Consoles</h2>
                <button onClick={handleClick}>Sign Up - It's Free!</button>
            </div>
            <div>
                <h4>Game Exchange Can Help:</h4>
                <ul>
                    <li>Buy and Sell at reasonable prices</li>
                    <li>Turn Store Credit into cash or games</li>
                    <li>Liquidate a collection</li>
                    <li>whether you are looking to add to your collection or just buy one of your old favorites Game Exchange is the place to be!</li>
                </ul>
            </div>
            <div>
                <h4>About Game Exchange:</h4> 
                <ul>
                    <li>USD as currency</li>
                    <li>3% transaction fee</li>
                    <li>10% cash-out fee</li>
                    <li>No hidden fees</li>
                    <li>No subscription required</li>
                    <li>No Payment method required</li>
                    <li>Dispute resolution and support</li>
                    <li>Zero maintenance prices</li>
                    <li>Shipping only available inside the United States</li>
                </ul>
            </div>
        </div>
    )
}
