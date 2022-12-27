# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_22_194643) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "consoles", force: :cascade do |t|
    t.string "name"
    t.string "publisher"
    t.string "developer"
    t.string "release_date"
    t.integer "number_of_players"
    t.integer "loose_price"
    t.integer "cib_price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "games", force: :cascade do |t|
    t.bigint "console_id", null: false
    t.string "name"
    t.string "release_date"
    t.string "publisher"
    t.string "developer"
    t.integer "number_of_players"
    t.integer "loose_price"
    t.integer "cib_price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["console_id"], name: "index_games_on_console_id"
  end

  create_table "haves", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "console_id"
    t.bigint "game_id"
    t.integer "quantity"
    t.boolean "active", default: true
    t.boolean "console_listing"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["console_id"], name: "index_haves_on_console_id"
    t.index ["game_id"], name: "index_haves_on_game_id"
    t.index ["user_id"], name: "index_haves_on_user_id"
  end

  create_table "listings", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "console_id"
    t.bigint "game_id"
    t.integer "listing_price"
    t.boolean "active", default: true
    t.integer "sending_user", default: 0
    t.boolean "recieving", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["console_id"], name: "index_listings_on_console_id"
    t.index ["game_id"], name: "index_listings_on_game_id"
    t.index ["user_id"], name: "index_listings_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "name"
    t.string "username"
    t.string "country"
    t.string "shipping_address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "wallets", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.integer "amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_wallets_on_user_id"
  end

  add_foreign_key "games", "consoles"
  add_foreign_key "haves", "consoles"
  add_foreign_key "haves", "games"
  add_foreign_key "haves", "users"
  add_foreign_key "listings", "consoles"
  add_foreign_key "listings", "games"
  add_foreign_key "listings", "users"
  add_foreign_key "wallets", "users"
end
