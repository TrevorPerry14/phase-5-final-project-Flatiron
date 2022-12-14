class WalletSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :amount

  def user_id 
    self.object.user.name
  end
end
