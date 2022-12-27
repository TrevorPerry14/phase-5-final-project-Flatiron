class HaveSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :console_id, :game_id, :quantity, :active, :console_listing

  belongs_to :user
  belongs_to :console
  belongs_to :game

  def console_id 
    if self.object.console_listing == true
      self.object.console.name
    end
  end
  
end
