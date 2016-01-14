#!/usr/bin/env ruby
require 'pry'
require 'nokogiri'

require './lib/file_utility.rb'
require './lib/art_collection_item.rb'

file_utility = FileUtility::FileConverter.new(ArtCollectionItem, "utilities/inbox", "utilities/outbox")
file_utility.import_batch_files
file_utility.create_collection

