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
      puts params
      # @posts = Post.last
      # @posts = Post.find_by_sql("select * from posts where content_type='#{params[:post]["content_type"]}' and content_id = #{params[:post]["content_id"]} order by id desc limit 1")
      # @posts = Post.find_by_content_type_and_content_id(params[:post]["content_type"], params[:post]["content_id"]).all
      @posts = Post.where(content_type: params[:post]["content_type"]).where(content_id: params[:post]["content_id"]).last
      # .in_order_of(:status, SORT_ORDER).all
      # @posts= @posts.last
      # render json: @posts
      render json: PostSerializer.new(@posts).serializable_hash[:data][:attributes]
  end
  def create
    puts params
      @Post = Post.create(post_params)
      # @Post = Post.new(post_params)
      if @Post.save
        # session[:user_id] = @user.id
        # @posts = Post.last
        # posts = 
        render :json => {result:"success", message:"Image Uploaded successfully", status: "created", post:PostSerializer.new(@Post).serializable_hash[:data][:attributes] }
    else
        render :json => {result:"Error", message:"#{@Post.errors.full_messages}"}
    end
  end
  private
  def post_params
      params.permit(:content_type, :content_id, :featured_image)
  end
end
