class User < ApplicationRecord

  validates :password, length: {
    minimum: 6,
    too_short: 'The password must have at least 6 characters'
  }

  validates_format_of :email, :with => /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.freeze

  validates :email, uniqueness: {
    message: 'Email already taken, please choose another'
  }
  
  after_validation(on: :create) do
    self.password = BCrypt::Password.create(password)
  end
end
