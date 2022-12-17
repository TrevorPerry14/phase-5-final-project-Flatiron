class Console < ApplicationRecord
    has_many :games, dependent: :destroy
    has_many :listings, dependent: :destroy
    has_many :users, through: :listings
end
