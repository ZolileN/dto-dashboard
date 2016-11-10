class Dataset < ApplicationRecord
  include Measurable
  include Nameable

  has_and_belongs_to_many :users

  has_many :datapoints, :dependent => :destroy

  has_many :widgets, :through => :dataset_widgets

  has_many :dataset_widgets

  before_validation :set_units
  before_validation :set_label

  validates :name, :label, :units, :presence => true

  def latest
    datapoints.by_time.last
  end

  def previous
    datapoints.by_time.offset(1).last
  end

  def datapoint_ts(datapoint)
    case period
    when 'month'
      start_ts >> datapoint.idx
    when 'day'
      start_ts + datapoint.idx.days
    when 'week'
      start_ts + datapoint.idx.weeks
    end
  end

  def multiply_period(factor)
    case period
    when 'month'
      factor.months
    when 'day'
      factor.days
    when

  def up?
    difference > 0
  end

  def down?
    !up?
  end

  def trending?
    difference != 0
  end

  def difference
    latest.value - previous.value
  end

  def trend
    return 'unchanged' if !trending?
    up? ? 'up' : 'down'
  end

  def has_data?
    datapoints.any?
  end

  def set_units
    self.units = 'n' if self.units.blank?
  end

  def set_label
    self.label = 'n' if self.label.blank?
  end
end
