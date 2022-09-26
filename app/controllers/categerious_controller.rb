class CategeriousController < ApplicationController

    def getCategerious
        category = Categerios.all()
        render :json => {category: category}
    end
end