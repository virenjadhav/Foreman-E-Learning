class PostSerializer
  include JSONAPI::Serializer
  attributes :id, :content_type, :content_id, :featured_image, :featured_image_url, :created_at, :updated_at
end
