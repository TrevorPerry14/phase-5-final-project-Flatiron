class WalletsController < ApplicationController

    before_action :select_wallet, only: [:show]

    def index 
        render json: Wallet.all
    end

    def show 
        render json: @wallet
    end

    private 

    def select_wallet
        @wallet = Wallet.find(params[:id])
    end
end
