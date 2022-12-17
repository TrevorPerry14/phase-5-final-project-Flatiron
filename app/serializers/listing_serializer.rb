class ListingSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :console_id, :game_id, :listing_price, :active, :sending_user, :recieving
  attribute :console_id, if: :console_id_true
  attribute :game_id, if: :game_id_true

  belongs_to :user
  
  def user_id 
    self.object.user.name
  end

  def console_id 
    self.object.console.name
  end

  def console_id_true
    self.object.console_id != nil
  end

  def game_id 
    self.object.game.name
  end

  def game_id_true
    self.object.game_id != nil
  end

end
