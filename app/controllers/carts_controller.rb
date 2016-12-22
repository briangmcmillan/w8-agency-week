class CartsController < ApplicationController





  def show
    unless @cart = Cart.where.not(completed: true).find_by(token: params[:token])
      @cart = Cart.create
    end
    render json: @cart, include: ["line_items.item"]
  end


  def update
    @cart = Cart.find_by(token: params[:token])
    @cart.update!(cart_params)
      if @cart.save
        render json: @cart
      else
        render json: @cart.errors
      end
  end



private

def cart_params
  params.permit(:shipping_address, :token)
end









end
