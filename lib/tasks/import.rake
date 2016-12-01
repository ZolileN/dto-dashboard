require 'json'
require 'organisation_importer'

namespace :import do
  desc 'Imports Data'

  task update: :environment do
    orgs = %w(industry)
    run(orgs)
  end

  task data: :environment do
    orgs = %w(mygov dibp industry imports medicare-enrolment marketplace)
    run(orgs)
  end

  def run(orgs)
    orgs.each do |name|
      puts "Importing: #{name}"
      data_json = File.read("lib/data/#{name}-data.json")
      data = JSON.parse(data_json)
      definition_json = File.read("lib/data/#{name}-definition.json")
      organisation = Organisation.find_or_create_by!(:name => data['agency'], :url => data['url'])
      importer = OrganisationImporter.new organisation, data_json, definition_json
      importer.import!
    end
  end
end
