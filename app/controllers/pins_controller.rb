class PinsController < ApplicationController

  def index
    @pins = Pin.all.order('created_at DESC')

    respond_to do |format|
      format.json {render json: @pins.to_json(include: :user)}
    end
  end

  def new

  end

  def create
    @pin = Pin.new( pin_params )
    if @pin.save
      respond_to do |format|
        format.json {render json: @pin.to_json(include: :user)}
      end
    end
  end


  def update
    @pin = Pin.find( params[:id] )
    if @pin.update( pin_params )
      respond_to do |format|
        format.json {render json: @pin.to_json(include: :user)}
      end
    end
  end

  def destroy
    @pin = Pin.find( params[:id] )
    if @pin.destroy
      respond_to do |format|
        format.json {render json: {respose: "destroyed ok"}}
      end
    end
  end

  private
  def pin_params
    params.require(:pin).permit(:item_name, :buy_sell, :description, :user_id )
  end  

end
