class Listing < ApplicationRecord
  belongs_to :user
  belongs_to :console
  belongs_to :game

  # has_one :user
  # has_one :console 
  # has_one :game
end
