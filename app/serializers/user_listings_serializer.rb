class UserListingsSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :country, :shipping_address
  has_many :listings
end
