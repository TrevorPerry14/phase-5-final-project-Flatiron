class Listing < ApplicationRecord
  has_one :user
  has_one :console
  has_one :game
end
