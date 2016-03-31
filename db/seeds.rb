# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


multiplier = 1

(5*multiplier).times do 
  user = User.create({username: Faker::Internet.user_name})

  #Posts
  (5*multiplier).times do
    pin = user.pins.build({
      item_name:Faker::Hacker.noun,
      buy_sell: Faker::Boolean.boolean,
      description: Faker::Lorem.paragraph
    })
    pin.save
  end

end
