class UserController < ApplicationController

    def change_email
        begin
            @user = User.find_by_id(params[:user]["id"])

            @user.update_column(:email, params[:value])

            render :json => {result:"success", message:"Email Successfully Updated"}

        rescue Exception => exc
            render :json => {result:"error", message:exc.message}
        end
    end

    def change_name
        begin
            @user = User.find_by_id(params[:user]["id"])

            @user.update_column(:username, params[:value])
            @user.update_column(:full_name, params[:value])

            render :json => {result:"success", message:"Your Name Successfully Updated"}

        rescue Exception => exc
            render :json => {result:"error", message:exc.message}
        end
    end

    def change_mobile_no
        begin
            @user = User.find_by_id(params[:user]["id"])

            @user.update_column(:mobile_no, params[:value])

            render :json => {result:"success", message:"Your Mobile NO. Successfully Updated"}

        rescue Exception => exc
            render :json => {result:"error", message:exc.message}
        end
    end

    def change_address
        begin
            @user = User.find_by_id(params[:user]["id"])

            @user.update_column(:address, params[:value])

            render :json => {result:"success", message:"Your Address Successfully Updated"}

        rescue Exception => exc
            render :json => {result:"error", message:exc.message}
        end
    end

    def change_password
        begin
            # @user = User.find_by_id(params[:user]["id"])
            puts params
            @user = User.find_by_id(params[:user]["id"])

            if @user && @user.authenticate(params[:value])
                # @user.update_column(:password_digest, params[:value])
                @user.update(user_params)
                render :json => {result:"success", message:"Password Successfully Updated"}
            end

        rescue Exception => exc
            render :json => {result:"error", message:exc.message}
        end
    end

    def get_user
        # puts "****************"
        # puts params[:user]["id"]
        @user = User.find_by_id(params[:user]["id"])
        if @user
            render :json => {result:"success", user: @user, message:"User not found"}
        else
            reder :json => {result:"error", user: @user, message: "User not Found"}
        end
    end

    # private 
    # def user_params
    #     params.require(:params).permit(:user["email"], :value, :confirmValue, :user["id"])
    # end
    private 
  def user_params
    params.require(:changeUser).permit(:password, :password_confirmation)
  end

end