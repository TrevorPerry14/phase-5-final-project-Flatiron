class ConsoleGamesSerializer < ActiveModel::Serializer
  attributes :id, :name, :publisher, :developer, :release_date, :number_of_players, :loose_price, :cib_price
  has_many :games
end
