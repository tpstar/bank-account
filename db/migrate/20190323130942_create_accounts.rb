class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.string :routing_number
      t.string :account_number
      t.string :bank_address
      t.string :bank_nickname

      t.timestamps
    end
  end
end
