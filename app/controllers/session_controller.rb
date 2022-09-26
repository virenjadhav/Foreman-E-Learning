class SessionController < ApplicationController
    include RackSessionFix
    def new
        # binding.pry
    end
    # def create 
    #     # binding.pry
    # end

    # def is_logged_in
    #     render :json => {result:"success", message:"User created successfully"}
    # end

    def create 
        puts("hello")
        puts(session_params[:email])
        @user = User.find_by_email(session_params[:email])

        if @user && @user.authenticate(session_params[:password])
            # login!
            puts("rrrr")
            session[:user_id] = @user.id
            puts("rrrr")
            Current.user ||= User.find(session[:user_id]) if session[:user_id]

            puts(Current.user)
            # render json:  logged_in => true, user = @user 
            # render json: @post, status: :created, location: @post
            # render json:  @user, logged_in: true
            render :json => {logged_in: true, user: @user}
        else
            # render json: {
            #     status : 401, 
            #     errors: ['no such user, please try again']
            # }
            # render json:  'hello'
            render :json => {status: 401, errors: ['no such user, please try again']}
        end
        # puts(params[:user])
        
    end

    def is_logged_in
    
        if logged_in? && current_user
            # render :json =>{
            #     logged_in => true,
            #     user= current_user
            # }
            # render json:  current_user
            # return false
            render :json => {logged_in: true, user: current_user}
        else
            # render :json =>{
            #     logged_in => false,
            #     messages = 'no such user'
            # }
            # render json:  'hello'
            render :json => {logged_in: false, messages: 'no such user'}
        end
        # render :is_logged_in
    end

    def destroy
        logout!
        # render json: {
        #     status : 200, 
        #     logged_out : true
        # }
        # render json:  'hello'
        render :json => {status: 200, logged_out: true}
    end

    private 

    def session_params
        params.require(:user).permit(:email, :password)
    end
end
