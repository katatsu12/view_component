# frozen_string_literal: true

class NewUserFormComponent < ViewComponent::Base
  def initialize(user: User.new)
    @user = user
  end
end
