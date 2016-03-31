require 'rails_helper'

describe PinsController do

  describe 'GET #index' do
    let(:pins){[Pin.create(item_name: 'item', buy_sell: 'true', description: 'description', user_id: 1)]}

    it 'returns the pins as JSON' do
      pins
      get :index, {format: 'json'}
      response_data = JSON.parse(response.body)
      pp response_data
      expect(response_data.length).to eq(pins.length)
      expect(response_data[0]['item_name']).to  eq(pins[0].item_name)
    end
  end
end
