class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.belongs_to :User, null: false, foreign_key: true
      t.belongs_to :Console, null: true, foreign_key: true
      t.belongs_to :Game, null: true, foreign_key: true
      t.integer :market_price
      t.integer :percent_of_market_price
      t.boolean :active

      t.timestamps
    end
  end
end
