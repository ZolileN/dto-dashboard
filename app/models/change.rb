class Change
  include Virtus.model
  include ActiveModel::Validations

  attribute :action, String
  attribute :datapoint_id, Integer
  attribute :dataset_id, Integer
  attribute :ts, DateTime
  attribute :value, Float

  validates :action, presence: true, inclusion: { in: %w(DELETE POST UPDATE) }
  validates :ts, :value, presence: true, if: :post?
  validates :datapoint_id, presence: true, unless: :post?
  validates :dataset_id, presence: true # Denormalise for efficiency

  def apply
    case action
    when 'DELETE'
      Datapoint.delete datapoint_id
    when 'POST'
      Datapoint.create dataset_id: dataset_id, ts: ts, value: value
    when 'UPDATE'
      hash = {}
      hash[:ts] = ts if ts.present?
      hash[:value] = value if value.present?
      Datapoint.update(datapoint_id, hash)
    end
  end

  def decorate(*args)
    OptionDecorator.send :decorate, *[self].concat(args)
  end

  def post?
    'POST' == c.action
  end

  private

  def datapoint
    Datapoint.find datapoint_id
  end
end
