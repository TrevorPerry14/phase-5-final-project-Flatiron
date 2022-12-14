class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :console_id, :release_date, :publisher, :developer, :number_of_players, :loose_price, :cib_price

  def console_id 
    self.object.console.name
  end

end
