#!/usr/bin/env ruby
require 'csv'
require 'yaml'

works = CSV.parse(File.read("t09.csv"), headers: true)

def save_collection_to_file(cat, meta, description)
  puts "  saving...#{cat.gsub('-','_')}"
  file_path = "../_artworks/t09/#{cat.gsub('-','_')}.md"
  File.open( file_path,'w' ) do |f|
    f.puts meta.to_yaml
    f.puts "---\r"
    f.puts description
  end
end

works.each do |work|
  next unless ['component','complete'].include? work['Type']
  cat = work['CAT#']
  tags = ['featured', 'watercolor', 't09']
  if work['elements']
    work['elements'].split(',').each {|el| tags << el}
  end
  if work['Project']
    tags << work['Project'].downcase
  end

  # Use \ character to sub in newline, double for new paragraph
  # (extra whitespace afterwards is removed)
  # ex:
  # 'one line\ next line'
  description = work['Description'].gsub(/\\\s*/, "  \n")
  # use the first line up to 100 characters for the excerpt
  excerpt = /\A(.*)\n/.match(description)[1][0..200]

  meta = {
    'catalogue_id' => cat,
    'title' => work['Title'] || cat,
    'excerpt' => excerpt,
    'date' => "20#{cat[0..1]}-#{cat[2..3]}-#{cat[4..5]}",
    'year_made' => "20#{cat[0..1]}",
    'dimensions' => "#{work['Height']}\" x #{work['Width']}\"",
    'media' => 'watercolor on paper',
    'images' => [
      "/images/t09/#{cat}_l.png"
    ],
    'thumb' => "/images/t09/#{cat}_s.png",
    'tags' => tags
  }

  # puts meta.to_yaml
  save_collection_to_file(cat, meta, description)
end

