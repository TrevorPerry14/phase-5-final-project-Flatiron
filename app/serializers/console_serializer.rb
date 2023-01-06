class ConsoleSerializer < ActiveModel::Serializer
  attributes :id, :name, :publisher, :developer, :release_date, :number_of_players, :loose_price, :cib_price, :image
  has_many :games
  has_many :listings
end
