# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Task.create(name: 'Water', date: '10/02/2020', frequency: '1 days', status: 'active')
Task.create(name: 'Feed', date: '09/25/2020', frequency: '7 days', status: 'active')
Task.create(name: 'Protect', date: '09/18/2020', frequency: '14 days', status: 'active')