Household.delete_all

household = Household.create!(
  address: '1600 Amphitheatre Parkway',
  zip: '94043',
  city: 'Mountain View',
  state: 'CA',
  number_of_bedrooms: 1000
)

Person.create!(
  first_name: 'John',
  last_name: 'Doe',
  email: 'john@doe.com',
  date_of_birth: '1500-04-28'.to_date,
  gender: :male,
  household: household
)
