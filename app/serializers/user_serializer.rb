class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :display_name, :email, :country, :shipping_address
end
