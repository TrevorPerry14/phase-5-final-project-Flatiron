class CreateWallets < ActiveRecord::Migration[7.0]
  def change
    create_table :wallets do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :amount, default: 0

      t.timestamps
    end
  end
end
