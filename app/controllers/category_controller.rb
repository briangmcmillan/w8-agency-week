class CategoryController < ApplicationController



  def show
    @category = Catagory.find_by(id: params[:id])
    render json: @category
  end


  def filter
    @items = Item.all
    if params[:search]
      @items = @items.search_by_name(params[:search])
    end
    @items.order(params[:order] || { created_at: :desc })
    @items = @items.ransack(params[:filter]).result
    @items = @items.to_a.uniq
    render json: @items
  end


end
