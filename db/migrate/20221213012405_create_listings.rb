class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :console, null: true, foreign_key: true
      t.belongs_to :game, null: true, foreign_key: true
      t.integer :listing_price
      t.boolean :active

      t.timestamps
    end
  end
end
