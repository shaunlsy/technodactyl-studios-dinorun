class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :bpm
      t.text :analysed

      t.timestamps
    end
  end
end
