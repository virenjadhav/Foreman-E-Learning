class CourseController < ApplicationController

    def get_course
        # puts "Course"
        # puts params[:categerios_code]
        courses = Course.find_by_sql("select * from courses where categerios_code = '#{params[:categerios_code]}'")
        # puts course
        render :json => {result:"success", courses: courses}
    end

end