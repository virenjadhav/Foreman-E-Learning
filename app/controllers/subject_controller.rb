class SubjectController < ApplicationController
    def get_subject
        puts "Subject"
        # puts params[:categeory]
        
        # puts params[:categeory]["id"]

        # @subjects = Subject.find_by_course_id_and_course_code(params[:categeory]["id"],params[:categeory]["code"])

        @subjects = Subject.find_by_sql("
        select * from subjects where  course_code = '#{params[:categeory]["code"]}'")
        render :json => {result:"success", subjects:@subjects}
    end
end