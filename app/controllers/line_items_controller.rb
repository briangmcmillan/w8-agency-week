class LineItemsController < ApplicationController


  def create
    if params[:token]
      @line_item = LineItem.new(
      item_id:  params[:item_id],
      quantity: params[:quantity],
      cart: Cart.where(token: params[:token]).first
      )
    else
      @line_item = LineItem.new(
          item_id:  params[:item_id],
          quantity: params[:quantity],
          cart: Cart.new
      )
    end
    if @line_item.item.available > @line_item.quantity
      render json: @line_item
    else
    if @line_item.save
      @line_item.item.available -= @line_item.quantity
      @line_item.item.save!
      render json: @line_item.cart, include: ["line_items.item"]
    else
      render json: @line_item.errors.full_message, status: :unprocessable_entity
    end
    end
  end

  def update
    @line_item = LineItem.find(params[:id])
    @line_item.quantity = params[:quantity]

    if @line_item.save
      if @line_item.quantity_change?
        @line_item.item.quantity += (@line_item.quantity_change[0] - @line_item.quantity_change[1])
        @line_item.item.save!
      end
        render json: @line_item.cart, include: ["line_items.item"]
    else
        render json: @line_item.errors.full_message, status: :unprocessable_entity
    end
  end



  def destroy
    @line_item = LineItem.find(params[:id])
    @line_items.destroy!
    render json: "Item Removed From Cart"
  end


  private

  def line_items_params
    params.permit(:quantity)
  end




end
