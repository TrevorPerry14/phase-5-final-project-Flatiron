class UsersController < ApplicationController


    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    before_action :select_user, only: [:show, :destroy]

    def index 
    render json: User.all
    end

    def show 
        render json: @user
    end

    def destroy 
        @user.destroy 
        head :no_content
    end

    private 

    def select_user
        @user = User.find(params[:id])
    end

    def render_not_found_response 
        render json: { error: "USER NOT FOUND" }, status: :not_found
    end
    
end
