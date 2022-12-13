class Game < ApplicationRecord
  belongs_to :Console
  has_many :listings
  has_many :users, through: :listings
end
