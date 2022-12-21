require 'stripe'
require 'dotenv'
Dotenv.load

class ChargeController < ApplicationController
    def create 
        Stripe.api_key = 'sk_test_51MGn1WAXBVG0C43h1JD7TCvWN6WfewfFaZDzBNvQi2eVbt5BIB5Or2ErUMf2gWhQ2zSJ5N0gHh5es5isdO3VastY00R3Bu0q2f'
        token = params[:charge][:token]
        amount = params[:amount]

        charge = Stripe::Charge.create({
            amount: amount, 
            currency: 'usd',
            source: token,
            description: 'Test Charge!',
        })

        render json: charge
    end
end
