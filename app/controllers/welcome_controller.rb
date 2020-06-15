class WelcomeController < ApplicationController
  def index;  end

  def say_hello
    ActionCable.server.broadcast('welcome_channel', 'Hello')
  end
end
