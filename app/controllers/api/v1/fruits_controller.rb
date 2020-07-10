class Api::V1::FruitsController < ApplicationController
  def index
    render json: Fruit.all
  end

  def create
    fruit = Fruit.create(fruits_params)
    render json: fruit
  end

  def destroy
    Fruit.destroy(params[:id])
  end

  def update
    fruit = Fruit.find(params[:id])
    fruit.update_attributes(fruits_params)
    render json: fruit
  end

  private

  def fruits_params
    params.require(:fruit).permit(:id, :name, :description)
  end
end