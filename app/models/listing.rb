class Listing < ApplicationRecord
  belongs_to :user
  belongs_to :console, optional: true
  belongs_to :game, optional: true

  # has_one :user
  # has_one :console
  # has_one :game
end
