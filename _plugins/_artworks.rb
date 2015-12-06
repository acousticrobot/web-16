module Jekyll

  class ArtIndexPage < Page
    def initialize(site, base, dir)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'art_index.html')
      cat = dir.match(/\/(.*)\/$/)[1]
      self.data['title'] = site.data["art_index_data"][cat]["title"] || cat
      self.data['tags'] = site.data["art_index_data"][cat]["tags"]
      self.data['description'] = site.data["art_index_data"][cat]["description"]

      self.data['artworks'] = site.collections["artworks"].docs.select {|a| a.url.match(cat)}
    end
  end

  # Add Links to the Artworks
  class ArtworkGenerator < Generator
    priority :low

    def generate(site)
      add_artwork_directories site
      add_links site.collections["artworks"].docs
    end

    def add_links(docs)
      puts "plugin: generating links for artworks"
      artwork_urls = docs.collect{ |artwork| artwork.url }
      docs.each do |artwork|
        index = artwork_urls.index(artwork.url)
        artwork.data["url_previous"] = index == 0 ? artwork_urls[artwork_urls.length - 1] : artwork_urls[index - 1]
        artwork.data["url_next"] = index == artwork_urls.length - 1 ? artwork_urls[0] : artwork_urls[index + 1]
      end
    end

    def add_artwork_directories(site)
      puts "plugin: generating artwork directories"
      dirs = Dir.glob("_artworks/*/").collect { |dir| dir[1..-1] } #=> ["artworks/t29/", "artworks/t47/"]
      dirs.each do |dir|
        site.pages << ArtIndexPage.new(site, site.source, dir)
      end
      # add index
      # add custom information in data file
    end
  end
end
