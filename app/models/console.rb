class Console < ApplicationRecord
    has_many :games
    has_many :listings
    has_many :users, through: :listings
end
