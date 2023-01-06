import React from 'react'
import { useNavigate } from "react-router-dom"
import Logo from './../Assets/Logo.jpg'

export default function LandingPage({ currentUser }) {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/signup')
    }
    return (
        <div className='absolute top-[60px] left-[20%] right-[20%] bg-[#FFFFFF] pt-20 px-10'>
            <div className="grid place-items-center font-bold  ">
                <img src={Logo} atl=''/>
                <h1 className="pt-5 text-xl mb-2">Game Exchange</h1>
                <h2 className="mb-2">Buy, Sell, and Trade Vintage Video Games and Consoles</h2>
                {currentUser ? <div></div> : <button onClick={handleClick} className="inline-block px-6 py-2.5 bg-red-300 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">Sign Up - It's Free!</button>}
            </div>
            <div className=''>
            <div className="pl-2 pb-24 pt-24 mr-[50%]">
                <h4 className="font-bold ">Game Exchange Can Help:</h4>
                <ul className="list-disc list-inside ">
                    <li>Buy and Sell at reasonable prices</li>
                    <li>Turn Store Credit into cash or games</li>
                    <li>Liquidate a collection</li>
                    <li>whether you are looking to add to your collection or just buy one of your old favorites Game Exchange is the place to be!</li>
                </ul>
            </div>
            </div>
            <div className="pl-2 pb-20 ">
                <h4 className="font-bold">About Game Exchange:</h4> 
                <ul className="list-disc list-inside "> 
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
