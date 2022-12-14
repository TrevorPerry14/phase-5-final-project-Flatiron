class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :country, :shipping_address
end
