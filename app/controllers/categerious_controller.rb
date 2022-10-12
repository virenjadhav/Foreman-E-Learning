class CategeriousController < ApplicationController

    def getCategerious
        puts("Categerious jj")
        category = Categerios.find_by_sql("SELECT * FROM categerios ORDER BY ranked asc LIMIT 10;")
        puts category
        render :json => {category: category}
    end
end