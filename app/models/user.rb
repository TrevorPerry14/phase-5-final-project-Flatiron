class User < ApplicationRecord
    has_many :listings 
    has_one :wallet
    has_many :consoles, through: :listings
    has_many :games, through: :listings
end
