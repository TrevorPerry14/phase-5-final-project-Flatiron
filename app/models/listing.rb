class Listing < ApplicationRecord
  belongs_to :user
  belongs_to :console
  belongs_to :game
end
