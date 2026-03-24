# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
Product.create!([
  {
    name: "Arroz branco",
    body: "Pacote de arroz tipo branco para uso diario",
    status: :Activo
  },
  {
    name: "Feijao preto",
    body: "Feijao preto selecionado de alta qualidade",
    status: :Activo
  },
  {
    name: "Leite integral",
    body: "Leite fresco integral para toda familia",
    status: :Activo
  },
  {
    name: "Cafe moido",
    body: "Cafe tradicional moido con sabor intenso",
    status: :Espera
  },
  {
    name: "Acucar refinado",
    body: "Acucar blanco refinado para cocina diaria",
    status: :Activo
  },
  {
    name: "Macarrao espaguete",
    body: "Massa tipo espaguete ideal para almoco",
    status: :Parcial
  },
  {
    name: "Molho de tomate",
    body: "Molho pronto de tomate para massas",
    status: :Activo
  },
  {
    name: "Oleo de soja",
    body: "Oleo vegetal de soja para frituras",
    status: :Inactivo
  },
  {
    name: "Farinha de trigo",
    body: "Farinha branca para bolos e paes",
    status: :Activo
  },
  {
    name: "Biscoito doce",
    body: "Biscoito crocante doce para lanche",
    status: :Espera
  }
])
