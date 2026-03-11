class Product < ApplicationRecord
  validates :name, presence: true, length: { minimum: 5 }
  validates :body, presence: true, length: { minimum: 5 }
  enum :status, { Activo: 0, Inactivo: 1, Espera: 2, Parcial: 3 }
end
