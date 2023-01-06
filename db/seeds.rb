# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Destroying Data"
User.destroy_all 
Console.destroy_all 
Game.destroy_all
Listing.destroy_all
Wallet.destroy_all


puts "Creating Users"

20.times {
    User.create(
        email: "#{Faker::Color.color_name}@gmail.com",
        password: "User123!",
        name: Faker::FunnyName.name,
        username: "User#{rand(1..20)}",
        country: "United States Of America",
        shipping_address: Faker::Address.full_address
    )
}



#Sample Data for Console used for Tests and Demo
puts "Creating Consoles"
Console.create(
    name: "Nintendo NES",
    publisher: "Nintendo",
    developer: "Nintendo",
    release_date: "OCtober 18, 1985",
    number_of_players: 2,
    loose_price: 86.00,
    cib_price: 178.89,
    image: "Nintendo_NES"
)
Console.create(
    name: "Super Nintendo",
    publisher: "Nintendo",
    developer: "Nintendo",
    release_date: "September 9, 1991",
    number_of_players: 2,
    loose_price: 67.30,
    cib_price: 245.76,
    image: "Super_Nintendo"
)
Console.create(
    name: "Nintendo 64",
    publisher: "Nintendo",
    developer: "Nintendo",
    release_date: "Spetember 26, 1996",
    number_of_players: 4,
    loose_price: 61.82,
    cib_price: 200.00,
    image: "Nintendo_64"
)
Console.create(
    name: "Nintendoo Gamecube",
    publisher: "Nintendo",
    developer: "Nintendo",
    release_date: "November 18, 2001",
    number_of_players: 4,
    loose_price: 64.00,
    cib_price: 156.75,
    image: "Gamecube"
)
Console.create(
    name: "Game Boy",
    publisher: "Nintendo",
    developer: "Nintendo",
    release_date: "August 1, 1989",
    number_of_players: 1,
    loose_price: 40.00,
    cib_price: 279.50,
    image: "Gameboy"
)

#Sample Data For Games used for Testing and Demo
puts "Creating Games"
Game.create(
    console_id: 1,
    name: "Super Mario Bros",
    release_date: "October 18, 1985",
    publisher: "Nintendo",
    developer: "Nintendo",
    number_of_players: 1-2,
    loose_price: 15.00,
    cib_price: 93.84,
    image: "Super_Mario_Bros"
)
Game.create(
    console_id: 1,
    name: "Super Mario Bros 2",
    release_date: "October 1, 1988",
    publisher: "Nintendo",
    developer: "Nintendo EAD",
    number_of_players: 1,
    loose_price: 20.73,
    cib_price: 70.00,
    image: "Super_Mario_Bros_2"
)
Game.create(
    console_id: 1,
    name: "Legend of Zelda",
    release_date: "February 21, 1986",
    publisher: "Nintendo",
    developer: "Nintendo",
    number_of_players: 1,
    loose_price: 23.75,
    cib_price: 110.00,
    image: "Legend_Of_Zelda"
)
Game.create(
    console_id: 1,
    name: "Final Fantasy",
    release_date: "May 1, 1990",
    publisher: "Nintendo",
    developer: "Square",
    number_of_players: 1,
    loose_price: 24.18,
    cib_price: 122.40,
    image: "Final_Fantasy"
)
Game.create(
    console_id: 2,
    name: "Zelda Link To The Past",
    release_date: "April 13, 1992",
    publisher: "Nintendo",
    developer: "Nintendo",
    number_of_players: 1,
    loose_price: 34.99,
    cib_price: 163.24,
    image: "A_Link_To_Past"
)
Game.create(
    console_id: 2,
    name: "SUper Metroid",
    release_date: "April 18, 1994",
    publisher: "Nintineo",
    developer: "Nintendo R&D1/Intelligent Systems",
    number_of_players: 1,
    loose_price: 68.76,
    cib_price: 278.75,
    image: "Super_Metroid"
)
Game.create(
    console_id: 2,
    name: "Donkey Kong Country",
    release_date: "November 25, 1994",
    publisher: "Nintendo",
    developer: "Rare",
    number_of_players: 1,
    loose_price: 20.43,
    cib_price: 69.00,
    image: "Donkey_Kong_Country"
)
Game.create(
    console_id: 2 ,
    name: "Super Mario Cart",
    release_date: "August 27, 1992",
    publisher: "Nintendo",
    developer: "Nintendo EAD",
    number_of_players: 2,
    loose_price: 30.00,
    cib_price: 76.33,
    image: "Super_Mario_Kart"
)
Game.create(
    console_id: 3,
    name: "Super Mario 64",
    release_date: "September 26, 1996",
    publisher: "Nintendo",
    developer: "Nintendo",
    number_of_players: 1,
    loose_price: 34.79,
    cib_price: 100.55,
    image: "Super_Mario_64"
)
Game.create(
    console_id: 3,
    name: "Zelda Ocarina Of Time",
    release_date: "November 23, 1998",
    publisher: "Nintendo",
    developer: "Nintendo",
    number_of_players: 1,
    loose_price: 36.40,
    cib_price: 99.49,
    image: "Ocarina_Of_Time"
)
Game.create(
    console_id: 3,
    name: "007 Golden Eye",
    release_date: "August 25, 1997",
    publisher: "Nintendo",
    developer: "Rare",
    number_of_players: 4,
    loose_price: 31.19,
    cib_price: 82,
    image: "Golden_Eye"
)
Game.create(
    console_id: 3,
    name: "Mario Cart 64",
    release_date: "February 10, 1997",
    publisher: "Nintendo",
    developer: "Nintendo EAD",
    number_of_players: 4,
    loose_price: 39.95,
    cib_price: 94.77,
    image: "Mario_Kart_64"
)
Game.create(
    console_id: 4,
    name: "Super Smash Bros Melee",
    release_date: "December 3, 2001",
    publisher: "Nintendo",
    developer: "HAL Laboratory",
    number_of_players: 4,
    loose_price: 50.62,
    cib_price: 60.71,
    image: "Melee"
)
Game.create(
    console_id: 4,
    name: "Zelda Wind Waker",
    release_date: "March 24, 2003",
    publisher: "Nintendo",
    developer: "Nintenjdo",
    number_of_players: 1,
    loose_price: 50.95,
    cib_price: 74.19,
    image: "Wind_Waker"
)
Game.create(
    console_id: 4,
    name: "Pokemon Colosseum",
    release_date: "February 10, 2004",
    publisher: "Nintendo",
    developer: "Genius Sonority",
    number_of_players: 4,
    loose_price: 99.47,
    cib_price: 136.91,
    image: "Pokemon_Colosseum"
)
Game.create(
    console_id: 4,
    name: "Luigi's Mansion",
    release_date: "November 17, 2001",
    publisher: "Nintendo",
    developer: "Nintendo",
    number_of_players: 1,
    loose_price: 43.99,
    cib_price: 62.77,
    image: "Luigis_Mansion"
)
Game.create(
    console_id: 5,
    name: "Pokemon Red",
    release_date: "September 27, 1998",
    publisher: "Nintendo",
    developer: "Game Freak",
    number_of_players: 1,
    loose_price: 45.00,
    cib_price: 262.48,
    image: "Pokemon_Red"
)
Game.create(
    console_id: 5,
    name: "Pokemon Yellow",
    release_date: "October 1, 1999",
    publisher: "Nintendo",
    developer: "Game Freak",
    number_of_players: 1,
    loose_price: 49.10,
    cib_price: 263.46,
    image: "Pokemon_Yellow"
)
Game.create(
    console_id: 5,
    name: "Pokemon Blue",
    release_date: "September 27, 1998",
    publisher: "Nintendo",
    developer: "Game Freak",
    number_of_players: 1,
    loose_price: 45.00,
    cib_price: 262.92,
    image: "Pokemon_Blue"
)
Game.create(
    console_id: 5,
    name: "Zelda Link's Awakening",
    release_date: "August 1, 1993",
    publisher: "Nintendo",
    developer: "Nintendo EAD",
    number_of_players: 1,
    loose_price: 31.00,
    cib_price: 222.50,
    image: "Links_Awakening"
)

puts "Creating Listings"

60.times {
    Listing.create(
        user_id: User.all.ids.sample,
        game_id: Game.all.ids.sample,
        listing_price: rand(20..100),
        active: true
    )
}

30.times {
    Listing.create(
        user_id: User.all.ids.sample,
        console_id: Console.all.ids.sample,
        listing_price: rand(60..120)
    )
}

puts "Creating Wallets"
users = User.all
users.each do |user| 
    Wallet.create(
        user_id: user.id,
        amount: rand(50..200)
    )
end
puts "Done Creating"