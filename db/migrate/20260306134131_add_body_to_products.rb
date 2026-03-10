class AddBodyToProducts < ActiveRecord::Migration[8.1]
  def change
    add_column :products, :body, :text
  end
end
