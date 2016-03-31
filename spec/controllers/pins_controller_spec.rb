require 'rails_helper'

describe PinsController do

  describe 'GET #index' do
    let(:pins){[Pin.create(item_name: 'item', buy_sell: 'true', description: 'description', user_id: 1)]}

    it 'returns the pins as JSON' do
      get :index, {format: 'json'}
      pp response
      expect(response).to match_array pins
    end

  end

end