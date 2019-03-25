class Account < ApplicationRecord
  validates :routing_number, presence: true
  validates :account_number, presence: true
  validates :bank_address, presence: true
  validates :bank_nickname, presence: true, uniqueness: true
  validate :valid_routing_number, on: [:create, :update]

  private
    def valid_routing_number
      routing_number.strip!

      while routing_number.length < 9  do
        routing_number.prepend("0")
      end

      if routing_number.scan(/\D/).any? || routing_number.length != 9
        errors.add(:account_number, 'invalid routing number')
        return
      end

      # The first two digits of the nine digit ABA routing transit number (RTN) must be in the ranges 00 through 12, 21 through 32, 61 through 72, or 80.
      x = routing_number[0, 2].to_i
      valid_range = (x>= 0 && x <= 12) || (x>=21 && x <=32) || (x>=61 && x <=72) || x == 80
      if !valid_range
        errors.add(:account_number, 'invalid routing number')
        return
      end

      # checksum test: The following condition must hold; 3(d1 + d4 + d7) + 7(d2 + d5 + d8) + (d3 + d6 + d9) % (modulo) 10 = 0
      d = []
      routing_number.each_char { |char| d << char.to_i }
      weighted_sum = (3 * (d[0] + d[3] + d[6]) + 7 * (d[1] + d[4] + d[7]) + (d[2] + d[5]) + d[8])
      if (weighted_sum % 10) != 0
        errors.add(:account_number, 'invalid routing number')
        return
      end
    end
end
