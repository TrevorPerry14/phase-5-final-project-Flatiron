class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :name
      t.string :username
      t.string :country
      t.string :shipping_address

      t.timestamps
    end
  end
end
