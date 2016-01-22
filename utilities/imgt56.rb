#!/usr/bin/env ruby

# This is quick and stupid but it works:
now = Time.new();
year = now.strftime("%Y")
yr = now.strftime("%y")
month = now.strftime("%m")
today = now.strftime("%d")

# change "Screen Shot....png"" name to "ss.png"
`convert ~/Desktop/ss.png -resize 150x150 images/t56/#{year}/#{month}/t56_#{yr}#{month}#{today}_s.png`
`mv ~/Desktop/ss.png images/t56/#{year}/#{month}/t56_#{yr}#{month}#{today}_l.png`
