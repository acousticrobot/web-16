#!/usr/bin/env ruby
require 'csv'
require 'yaml'


works = CSV.parse(File.read("t09.csv"), headers: true)

works.each do |work|
  next unless ['component','complete'].include? work['Type']
  cat = work['CAT#']
  tags = ['featured', 't09']
  if work['elements']
    work['elements'].split(',').each {|el| tags << el}
  end
  if work['Project']
    tags << work['Project'].downcase
  end

  page = {
    'catalogue_id' => cat,
    'title' => cat,
    'date' => "20#{cat[0..1]}-#{cat[2..3]}-#{cat[4..5]}",
    'year_made' => "20#{cat[0..1]}",
    'dimensions' => "#{work['Height']}\" x #{work['Width']}\"",
    'media' => 'watercolor on paper',
    'description' => work['Description'],
    'images' => [
      "/images/t09/#{cat}_l.png"
    ],
    'thumb' => "/images/t09/#{cat}_s.png",
    'tags' => tags
  }
  # puts work['CAT#']
  puts page.to_yaml
  # YAML.dump(file)
end

