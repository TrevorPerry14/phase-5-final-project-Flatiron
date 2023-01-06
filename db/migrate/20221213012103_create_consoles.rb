class CreateConsoles < ActiveRecord::Migration[7.0]
  def change
    create_table :consoles do |t|
      t.string :name
      t.string :publisher
      t.string :developer
      t.string :release_date
      t.integer :number_of_players
      t.integer :loose_price
      t.integer :cib_price
      t.string :image

      t.timestamps
    end
  end
end
