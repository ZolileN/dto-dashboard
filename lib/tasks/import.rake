require 'json'
require 'organisation_importer'

namespace :import do
  desc 'Imports Data'

  task update: :environment do
    orgs = { 'industry' => 3 }
    run(orgs)
  end

  task data: :environment do
    orgs = { 'mygov' => 1,
      'dibp'  => 2,
      'industry' => 3,
      'imports' => 4,
      'medicare-enrolment' => 6,
      'marketplace' => 7 }
    run(orgs)
  end

  def run(orgs)
    orgs.each do |name, id|
      puts "Importing: #{name}"
      data_json = File.read("lib/data/#{name}-data.json")
      data = JSON.parse(data_json)
      definition_json = File.read("lib/data/#{name}-definition.json")
      organisation = Organisation.find_or_create_by!(:name => data['agency'], :url => data['url'])
      importer = OrganisationImporter.new organisation, data_json, definition_json, id
      importer.import!
    end
  end
end
