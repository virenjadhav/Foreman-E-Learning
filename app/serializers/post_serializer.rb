class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
include JSONAPI::Serializer
  attributes :id, :title, :body, :featured_image, :featured_image_url
  def featured_image
    # puts("featured_image")
    if object.featured_image.attached?
      {
        url: rails_blob_url(object.featured_image)
      }
    end
  end
end
