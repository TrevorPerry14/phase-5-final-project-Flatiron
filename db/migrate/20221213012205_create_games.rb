class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.belongs_to :console, null: false, foreign_key: true
      t.string :name
      t.string :release_date
      t.string :publisher
      t.string :developer
      t.integer :number_of_players
      t.integer :loose_price
      t.integer :cib_price
      t.string :image

      t.timestamps
    end
  end
end
