require 'sinatra/base'

class ApplicationController < Sinatra::Base

  enable :sessions

  set :views, File.expand_path('../../views', __FILE__)
  set :public_folder, File.expand_path('../../../public', __FILE__)

  get '/' do
    erb :index
  end

  get '/register' do
    erb :'/users/new'
  end

  get '/login' do
    erb :'/sessions/new'
  end

  post '/login' do
    session[:currentuser] = params[:user_id]
  end

end