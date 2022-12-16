class GameListingsSerializer < ActiveModel::Serializer
  attributes :id, :name, :console_id, :release_date, :publisher, :developer, :number_of_players, :loose_price, :cib_price
  has_many :listings

  def console_id 
    self.object.console.name
  end
  
end
