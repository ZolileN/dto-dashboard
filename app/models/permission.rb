class Permission < ApplicationRecord
  belongs_to :user
  belongs_to :resource, polymorphic: true

  validates :user, uniqueness: { scope: [:resource_id, :resource_type] }
end
