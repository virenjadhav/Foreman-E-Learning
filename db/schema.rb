# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_15_202218) do
  create_table "active_storage_attachments", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "categerios", id: :integer, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name", limit: 50
    t.string "code", limit: 5
    t.integer "ranked"
  end

  create_table "course_details", id: :integer, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "course_detail_img_path", limit: 500
    t.string "teacher_profile_path", limit: 500
    t.string "user_full_name", limit: 50
    t.integer "user_id"
    t.string "category", limit: 50
    t.string "course_title", limit: 500
    t.integer "duration_hours"
    t.integer "duration_min"
    t.integer "lecture"
    t.float "discount_price"
    t.float "original_price"
    t.float "rating"
    t.integer "categerios_id"
    t.string "categerios_code", limit: 5
    t.string "description", limit: 500
    t.string "Curriculum", limit: 500
    t.string "Certification", limit: 500
    t.string "Rating_desc", limit: 500
    t.string "video_link", limit: 1000
    t.integer "course_id"
    t.integer "subject_id"
    t.string "subject_code", limit: 5
    t.index ["course_id"], name: "course_id", unique: true
  end

  create_table "courses", id: :integer, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "course_img_path", limit: 500
    t.string "teacher_profile_path", limit: 500
    t.string "user_full_name", limit: 50
    t.integer "user_id"
    t.string "category", limit: 50
    t.string "course_title", limit: 500
    t.integer "duration_hours"
    t.integer "duration_min"
    t.integer "lecture"
    t.float "discount_price"
    t.float "original_price"
    t.float "rating"
    t.integer "categerios_id"
    t.string "categerios_code", limit: 5
    t.string "subject_code", limit: 5
    t.integer "subject_id"
    t.string "video_link", limit: 1000
    t.string "Rating_desc", limit: 500
    t.string "Certification", limit: 500
    t.string "Curriculum", limit: 500
    t.string "description", limit: 1000
  end

  create_table "posts", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "content_id"
    t.string "content_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "subjects", id: :integer, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "subject_code", limit: 5
    t.integer "course_id"
    t.string "course_code", limit: 5
    t.string "subject_name", limit: 50
  end

  create_table "users", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "full_name", limit: 50
    t.string "user_type", limit: 20
    t.string "type_code", limit: 5
    t.string "mobile_no", limit: 10
    t.string "address", limit: 50
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
end
