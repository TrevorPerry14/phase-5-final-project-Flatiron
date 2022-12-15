class UsersController < ApplicationController


    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    before_action :select_user, only: [:show, :destroy]

    def index 
    render json: User.all
    end

    def show 
        render json: @user, serializer: UserListingsSerializer
    end

    def destroy 
        @user.destroy 
        head :no_content
    end

    def create 
        user = User.create!(user_params)
        render json: user, status: :created
    end

    private 

    def select_user
        @user = User.find(params[:id])
    end

    def render_not_found_response 
        render json: { error: "USER NOT FOUND" }, status: :not_found
    end

    def user_params 
        params.permit(:email, :password, :name, :username, :country, :shipping_address)
    end
    
end
