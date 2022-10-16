class Post < ApplicationRecord
    # self.primary_key = :content_id,:content_type
    has_one_attached :featured_image
    
    def featured_image_url
            Rails.application.routes.url_helpers.url_for(featured_image) if featured_image.attached?
    end
end
