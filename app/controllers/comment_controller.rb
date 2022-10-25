class CommentController < ApplicationController


def create_comment 
       begin
        @comment = User.new(comment_params)
        # puts(@user)
        if @comment.save
            render :json => {result:"success", message:"You're comment posted.", comment:@comment}
        else
            render :json => {result:"Error", message:"#{@comment.errors.full_messages}"}
        end
        rescue Exception => exc
    render :json => {result:"error", message:exc.message}
  end
    end 

    def get_comments
		begin
			@comments = Comment.where(course_id: params[:course]["course_id"]).all

			if @comments
				render :json => {result: "success", message: "Successfully Getting Comments", comments: @comments}
			else
				render :json => {status: 401, message: "Not found any comments", errors: ['no such user, please try again']}
			end

		 rescue Exception => exc
		    render :json => {result:"error", message:exc.message}
		  end
    end



 private
    def comment_params
        params.require(:comment).permit(:course_id, :user_id, :user_name, :categerios_id, :categerios_code, :subject_id, :subject_code, :categerios_code, :user_type, :teacher_id, :teacher_name, :comment)
    end
end