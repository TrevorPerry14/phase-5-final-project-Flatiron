class Listing < ApplicationRecord
  belongs_to :User
  belongs_to :Console
  belongs_to :Game
end
