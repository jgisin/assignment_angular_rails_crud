require 'rails_helper'

describe PinsController do

  describe 'GET #index' do
    let(:pins){[Pin.create(item_name: 'item', buy_sell: 'true', description: 'description', user_id: 1)]}

    it 'returns the pins as JSON' do
      pins
      get :index, {format: 'json'}
      binding.pry
      expect(JSON.parse(response.body)['item_name']).to match pins[0].item_name
    end

  end

end