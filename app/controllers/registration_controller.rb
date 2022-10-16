class RegistrationController < ApplicationController
    include RackSessionFix
# include ApplicationController
    def new 
        
        puts("rr************")
        puts(params[:user])
        puts("****************rr")

        # @user = User.find_by_email("vire@gmail.com")
        # @user = User.create(user_params)
        # @user = User.new(params[:user])
        # binding.irb
        @user = User.new(user_params)
        # @user = User.new({email:"abc@xyz.com", password: "pass", password_confirmation: "pass"})
        puts(@user)
        if @user.save
            render :json => {result:"success", message:"User created successfully"}
        else
            render :json => {result:"Error", message:"#{@user.errors.full_messages}"}
        end

        # @user = User.new()
        # render :json => {result:"success", message:"User created successfully"}
        
    end 
    # def getUser 
    #     @user = User.new()
    #     puts("ii************")
    #     puts(@user)
    #     puts("****************ii")
    #     render :json => {user:@user}
    # end

    # def get_user
    #     puts "****************"
    #     puts params[:user]["id"]
    #     @user = User.find_by_id(params[:user]["id"])
    #     # if @user
    #     #     render :json => {result:"success", user: @user, message:"User not found"}
    #     # else
    #     #     reder :json => {result:"error", user: @user, message: "User not Found"}
    #     # end
    # end
    
    def create 
        puts("hh************")
        puts(params)
        puts("heee")
        puts(params[:user])
        puts("****************hh")
        # @user = User.new(user_params)
        # puts(@user)
        # binding.irb
        # render :json => {hel:"he"}

        @user = User.new(user_params)
        # @user = User.new({email:"abc@xyz.com", password: "pass", password_confirmation: "pass"})
        puts(@user)
        if @user.save
            # session[:user_id] = @user.id
            render :json => {result:"success", message:"User created successfully", status: "created", user: @user}
        else
            render :json => {result:"Error", message:"#{@user.errors.full_messages}"}
        end

    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :password_confirmation, :username, :type_code, :full_name, :mobile_no, :address, :user_type)
    end
end