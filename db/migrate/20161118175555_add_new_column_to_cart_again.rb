class AddNewColumnToCartAgain < ActiveRecord::Migration[5.0]
  def change
    add_column :carts, :street, :string
    add_column :carts, :city, :string
    add_column :carts, :state, :string
    add_column :carts, :zipcode, :string
    rename_column :carts, :shipping_address, :country
  end
end
