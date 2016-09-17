class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
        t.string :user_id
        t.string :image_id
        t.string :name
        t.string :linkedin
        t.string :hobbies
    end
  end
end
