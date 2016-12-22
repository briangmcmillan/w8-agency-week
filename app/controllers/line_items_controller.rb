class LineItemsController < ApplicationController


  def create
      if params[:token]
        @line_item = LineItem.new(
        cart: Cart.where(token: params[:token]).first_or_initialize,
        item_id: params[:item_id],
        quantity: params[:quantity]
        )
        @line_item.save
      else
        @line_item = LineItem.new(
        cart: Cart.new,
        item_id: params[:item_id],
        quantity:  params[:quantity]
        )
        @line_item.save
      end
        render json: @line_item
  end

  def update
    @line_item = LineItem.find(params[:id])
    @line_item.quantity = params[:quantity]
    if @line_item.save
      if @line_item.quantity_change?
        @line_item.item.quantity += (@line_item.quantity_change[0] - @line_item.quantity_change[1])
        @line_item.item.save!
      end
        render json: @line_item.cart, include: ["line_item.item"]
    else
        render json: @line_item.errors.full_message, status: :unprocessable_entity
    end
  end

  def destroy
    @line_item = LineItem.find(params[:id])
    @line_item.destroy!
    render json: {success: "Item Removed From Cart"}
  end


  private

  def line_items_params
    params.permit(:quantity)
  end




end
