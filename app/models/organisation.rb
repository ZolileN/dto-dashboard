class Organisation < ApplicationRecord
  include Nameable

  has_many :dashboards

  has_many :datasets

  has_many :users

  validates :url, :presence => true

  has_many :changesets
  has_one :active_changeset, -> { active }

end
