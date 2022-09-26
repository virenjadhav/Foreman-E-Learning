class User < ApplicationRecord 
    has_secure_password

    validates :email, presence: true, format: {with: /\A[^@\s]+@[^@\s]+\z/, message: "must be a valid email address" }
    validates :email, presence: true
    validates :email, uniqueness: true

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :username, length: { minimum: 4 }

end
