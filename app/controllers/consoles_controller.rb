class ConsolesController < ApplicationController

    before_action :select_console, only: [:show]
    
    def index 
        render json: Console.all
    end

    def show 
        render json: @console
    end
    
    private 

    def select_console
        @console = Console.find(params[:id])
    end
end
