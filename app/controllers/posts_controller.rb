# class PostsController < ApplicationController
#   before_action :set_post, only: %i[ show update destroy ]

#   # GET /posts
#   def index
#     @posts = Post.all

#     render json: @posts
#   end

#   # GET /posts/1
#   def show
#     render json: @post
#   end

#   # POST /posts
#   def create
#     @post = Post.new(post_params)

#     if @post.save
#       render json: @post, status: :created, location: @post
#     else
#       render json: @post.errors, status: :unprocessable_entity
#     end
#   end

#   # PATCH/PUT /posts/1
#   def update
#     if @post.update(post_params)
#       render json: @post
#     else
#       render json: @post.errors, status: :unprocessable_entity
#     end
#   end

#   # DELETE /posts/1
#   def destroy
#     @post.destroy
#   end

#   private
#     # Use callbacks to share common setup or constraints between actions.
#     def set_post
#       @post = Post.find(params[:id])
#     end

#     # Only allow a list of trusted parameters through.
#     def post_params
#       params.require(:post).permit(:title, :body)
#     end
# end

class PostsController < ApplicationController
  def index
    # puts "index kjlkjlkj"
      # @posts = Post.all.to_json(include:[:featured_image])
      # puts "hello"
      # puts params
      @posts = Post.last
      # render json: @posts
      render json: PostSerializer.new(@posts).serializable_hash[:data][:attributes]
  end
  def create
    puts params
      @Post = Post.create(post_params)
  end
  private
  def post_params
      params.permit(:title, :body, :featured_image)
  end
end
