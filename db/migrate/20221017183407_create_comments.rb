class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.integer :course_id
      t.integer :user_id
      t.string :user_name
      t.integer :categerios_id
      t.string :categerios_code
      t.integer :subject_id
      t.string :subject_code
      t.string :user_type
      t.integer :teacher_id
      t.string :teacher_name
      t.text :comment

      t.timestamps
    end
  end
end
