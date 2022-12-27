class HavesController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    before_action :select_have, only: [:destroy, :update]

    def index 
        render json: Have.all
    end

    def create 
        have = Have.create!(have_params)
        render json: have, status: :created
    end

    def destroy 
        @have.destroy
        head :no_content
    end

    def update 
        @have.update(have_params)
        render json: @have
    end

    private

    def select_have 
        @have = Have.find(params[:id])
    end

    def have_params 
        params.permit(:id, :user_id, :console_id, :game_id, :quantity, :active, :console_listing)
    end

    def render_not_found_response 
        render json: { error: "HAVE NOT FOUND" }, status: :not_found
    end

end
