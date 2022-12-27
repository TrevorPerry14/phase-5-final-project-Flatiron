class CreateHaves < ActiveRecord::Migration[7.0]
  def change
    create_table :haves do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :console, null: true, foreign_key: true
      t.belongs_to :game, null: true, foreign_key: true
      t.integer :quantity
      t.boolean :active, default: true
      t.boolean :console_listing

      t.timestamps
    end
  end
end
