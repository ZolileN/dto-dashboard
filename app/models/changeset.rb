class Changeset < ApplicationRecord
  include Storext.model

  belongs_to :organisation

  scope :active, -> { where('applied_at IS NULL') }
  scope :applied, -> { where('applied_at IS NOT NULL') }

  store_attributes :data do
    changes Array[Change]
  end

  def apply!
    transaction do
      changes.each do |change|
        change.apply
      end

      update_attribute :applied_at, DateTime.now
    end
  end

  def reject!
    reset_attribute :changes
    save!
  end

  def preview(for_dataset:nil, &block)
    transaction do
      relevant_changes = if for_dataset.present?
        changes_for_dataset(for_dataset)
      else
        changes
      end

      relevant_changes.each do |change|
        change.apply
      end

      yield

      raise ActiveRecord::Rollback # Let persistence layer do its thang
    end
  end

  def datapoints_for(dataset)
    points = dataset.datapoints.to_a

    changes_for_dataset(dataset).each do |change|
      case
      when change.points

      end
    end

    points
  end

  private

  def active?
    applied_at.nil?
  end

  def applied?
    applied_at.present?
  end

  private

  def changes_for_dataset(dataset)
    changes.select do |change|
      change.dataset_id = dataset.id
    end
  end
end
