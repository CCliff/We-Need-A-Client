require 'sinatra/base'

class ApplicationController < Sinatra::Base

  set :views, File.expand_path('../../views', __FILE__)
  set :public_folder, File.expand_path('../../../public', __FILE__)

  get '/' do
    erb :index
  end

  get '/users/new' do
    erb :'/users/new'
  end

end