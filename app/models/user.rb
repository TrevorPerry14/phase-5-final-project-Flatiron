class User < ApplicationRecord
    has_many :listings, dependent: :destroy
    has_one :wallet, dependent: :destroy
    has_many :consoles, through: :listings
    has_many :games, through: :listings

    validates :username, uniqueness: true

    has_secure_password 
end
