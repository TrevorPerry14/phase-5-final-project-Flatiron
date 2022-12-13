class Game < ApplicationRecord
  belongs_to :console
  has_many :listings
  has_many :users, through: :listings
end
