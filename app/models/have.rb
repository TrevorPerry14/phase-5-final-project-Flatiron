class Have < ApplicationRecord
  belongs_to :user
  belongs_to :console, optional: true
  belongs_to :game, optional: true

  validates :console_id, presence: false
end
