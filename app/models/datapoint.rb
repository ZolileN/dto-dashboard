class Datapoint < ApplicationRecord
  belongs_to :dataset

  validates :idx, presence: true, uniqueness: { scope: :dataset_id }

  validates :value, :numericality => true, :allow_nil => true

  scope :by_time, -> { order(idx: 'ASC') }
  scope :by_time_desc, -> { order(idx: 'DESC') }

  def ts
    dataset.datapoint_ts(self)
  end

  def label
    ts.strftime("%Y-%m")
  end

end
