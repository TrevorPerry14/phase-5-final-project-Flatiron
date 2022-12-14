import React, { useState, useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout';


export default function WalletPage({ walletAmount, setWalletAmount, userWallet}) {
    const [balance, setBalance] = useState('')

    useEffect(() => {
        fetch(`/wallets/${userId}`)
        .then(res => res.json())
        .then(data => setBalance(data.amount))
    }, [balance])
    
    const [formData, setFormData ] = useState('')
    const userId = sessionStorage.getItem('user_id')

    const testAPI = 'pk_test_51MGn1WAXBVG0C43h0TZnwArs4jXPDooIYOOfEDAHIdZ9kLoYlY0iVp8B6a7uY6ASW9VROiyl4WeilbseICaVUpQ600uo3aF29d'

    function onToken(token) {
        const charge = {
            token: token.id
        }
        const amount = {
            amount: Math.round(formData.amount * 100)
        }
    
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify({ charge: charge, amount: amount})
    }
    

    fetch('/charge', config)
    .then(res => res.json())
    .then(data => console.log(data))
    .then(handleAddFunds)
    // .then(window.location.reload())
    }

    function handleInput(e) {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name]: parseInt(value)
        })
    }

    function handleAddFunds() {
        const updatedBalance = {
            amount: (balance + formData.amount)
        }
        fetch(`wallets/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedBalance)
        })
        .then(res => res.json()
        .then(data => setBalance(data)))
        .then(window.location.reload())
    }

    return (
        <div className="grid space-y-4 absolute top-[20%] left-[37.5%] bg-[#D3D7D8] h-1/3 w-1/4 p-5 text-[#555555]">
            <div className='font-bold text-xl'>
                Add Funds:
            </div>
            <form>
                <div>
                    <label className="text-lg">Amount to Add: $</label>
                    <input name='amount' type='text' onChange={handleInput} className="outline outline-1"></input>
                </div>
            </form>
            <div>
                    <StripeCheckout 
                        token={onToken}
                        stripeKey={testAPI}
                        />
            </div>

        </div>
    )
}
