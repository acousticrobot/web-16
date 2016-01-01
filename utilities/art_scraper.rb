#!/usr/bin/env ruby
require 'pry'
require 'nokogiri'

require './lib/file_utility.rb'
require './lib/art_collection_item.rb'

fu = FileUtility.new(ArtCollectionItem, "utilities/inbox", "utilities/outbox")
fu.create_collection

