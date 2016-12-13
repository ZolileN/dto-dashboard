class Widget < ApplicationRecord
  include Nameable
  include Measurable
  include CreationOrderable

  self.inheritance_column = :_type_disabled

  serialize :options, JSON

  belongs_to :dashboard

  has_many :dataset_widgets

  has_many :datasets, :through => :dataset_widgets

  has_many :datapoints, :through => :datasets

  KPIS = ['User satisfaction', 'Cost per transaction', 'Digital take-up', 'Completion rate']

  validates :size, :type, :dashboard_id, :presence => true

  validates :size, inclusion: { in: %w(extra-small small medium large extra-large),
      message: "%{value} is not a valid size" }

  validates :type, inclusion: { in: %w(bar fact full kpi-sparkline line pie sparkline),
      message: "%{value} is not a valid chart type" }

  validates :row, :pos, :presence => true, :numericality => { :only_integer => true }

  validates :slug, uniqueness: { scope: :dashboard_id }

  after_initialize :set_defaults
  before_save :set_slug

  def set_defaults
    options = {} unless options
  end

  def self.with_datasets
    includes(:datasets => :datapoints)
  end

  def self.hero
    where(:is_hero => true)
  end

  def self.kpis
    where(:name => KPIS)
  end

  def self.without_hero
    where.not(:is_hero => true)
  end

  def self.other
    where.not(:name => KPIS).where.not(:is_hero => true)
  end

  def self.by_row
    order(:row => 'ASC')
  end

  def self.by_pos
    order(:pos => 'ASC')
  end

  def self.by_last_updated
    order(:last_updated_at => 'ASC')
  end

  def self.last_updated
    by_last_updated.last
  end

  def data_updated_at
    datapoints.by_time_desc.first&.updated_at
  end

  def multiple?
    datasets.many?
  end

  def has_no_data?
    !has_data?
  end

  def has_data?
    datapoints.any?
  end

  def dataset
    datasets.first
  end

  private

  # Don't use IDs because widgets can be regenerated with new IDs
  def set_slug
    i = nil

    while dashboard.widgets.where(slug: candidate = slug_candidate(i)).count > 0
      i = i.to_i + 1
    end

    self.slug = candidate
  end

  def slug_candidate(suffix = nil)
    [name.parameterize, suffix.to_i].compact.join '-'
  end
end
