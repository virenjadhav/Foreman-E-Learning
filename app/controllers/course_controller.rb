class CourseController < ApplicationController

    def get_course
        # puts "Course"
        # puts params[:subject]["course_id"]
        # courses = Course.find_by_sql("select * from courses where categerios_code = '#{params[:categerios_code]}'")

        @courses = Course.find_by_sql("
        select * from courses where categerios_id = #{params[:subject]["course_id"]} and categerios_code='#{params[:subject]["course_code"]}' and subject_id = #{params[:subject]["id"]} and subject_code = '#{params[:subject]["subject_code"]}'")
        # puts course
        render :json => {result:"success", courses: @courses}
    end

    def new 
        # puts params
        begin
        @course = Course.new(course_params)

        if @course.save
            # session[:user_id] = @user.id
            render :json => {result:"success", message:"Course created successfully", course: @course}
        else
            render :json => {result:"Error", message:"#{@course.errors.full_messages}"}
        end
rescue Exception => exc
    render :json => {result:"error", message:exc.message}
end

        # render :json => {result:"success"}
    end

    def get_my_courses
puts params
# select * from courses where user_id = 17
begin
@courses = Course.find_by_sql("select * from courses where user_id = #{params[:user]["id"]}")

if @courses
    render :json => {result:"success", courses: @courses, message:"courses found  successfully"}
else
    reder :json => {result:"error", courses: @courses, message: "User not Found"}
end
rescue Exception => exc
    render :json => {result:"error", message:exc.message}
end

        # render :json => {result:"success"}
    end

    private
    def course_params
        params.require(:course).permit(:user_full_name, :user_id, :category, :course_title, :categerios_code, :categerios_id, :subject_code, :subject_id, :video_link, :Certification, :Curriculum, :description)
    end

end