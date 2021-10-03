class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :date
      t.string :frequency
      t.string :status

      t.timestamps
    end
  end
end
