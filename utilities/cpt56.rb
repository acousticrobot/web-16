#!/usr/bin/env ruby

# This is quick and stupid but it works:
now = Time.new();
year = now.strftime("%Y")
yr = now.strftime("%y")
month = now.strftime("%m")
today = now.strftime("%d")
yesterday = today.to_i - 1

`cp _artworks/t56/#{year}/#{month}/t56_#{yr}#{month}#{yesterday}.md _artworks/t56/#{year}/#{month}/t56_#{yr}#{month}#{today}.md`
