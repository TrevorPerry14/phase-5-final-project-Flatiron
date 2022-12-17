class ListingsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    before_action :select_listing, only: [:show, :destroy, :update]

    def index 
        render json: Listing.all
    end

    def show 
        render json: @listing
    end

    def destroy 
        @listing.destroy 
        head :no_content
    end

    def create 
        listing = Listing.create!(listing_params)
        render json: listing, status: :created
    end

    def update 
        @listing.update(listing_params)
        render json: @listing
    end

    private 

    def select_listing
        @listing = Listing.find(params[:id])
    end

    def render_not_found_response 
        render json: { error: "USER NOT FOUND" }, status: :not_found
    end

    def listing_params 
        params.permit(:id, :user_id, :console_id?, :game_id, :listing_price, :active, :sending_user, :recieving)
    end

end
