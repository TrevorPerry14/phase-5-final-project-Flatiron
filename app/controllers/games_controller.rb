class GamesController < ApplicationController

    before_action :select_game, only: [:show]

    def index 
    render json: Game.all
    end

    def show 
        render json: @game
    end

    private 

    def select_game
        @game = Game.find(params[:id])
    end
    
end
