class Datapoint < ApplicationRecord
  belongs_to :dataset

  validates :ts, :presence => true

  validates :value, :numericality => true, :allow_nil => true

  validate :check_frequency

  scope :by_time, -> { order(:ts => 'ASC') }
  scope :by_time_desc, -> { order(:ts => 'DESC') }
  scope :of_month, -> (month) { where('EXTRACT(MONTH FROM ts) = ?', month) }
  scope :of_year, -> (year) { where('EXTRACT(YEAR FROM ts) = ?', year) }

  def label
    ts.strftime("%Y-%m")
  end

  private

  def check_frequency
    if dataset&.period.present?
      case dataset.period
      when 'month'
        if dataset.datapoints.of_month(ts.month).of_year(ts.year).count > 0
          errors.add :ts, 'Too frequent: this month already has a datapoint'
        end
      end
    end
  end
end
