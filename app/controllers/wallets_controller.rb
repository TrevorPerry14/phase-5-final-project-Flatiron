class WalletsController < ApplicationController

    before_action :select_wallet, only: [:show, :update]

    def index 
        render json: Wallet.all
    end

    def show 
        render json: @wallet
    end

    def update
        @wallet.update(wallet_params)
        render json: @wallet
    end

    private 

    def select_wallet
        @wallet = Wallet.find(params[:id])
    end

    def wallet_params
        params.permit(:amount)
    end
end
