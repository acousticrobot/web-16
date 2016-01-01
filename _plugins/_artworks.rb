module Jekyll

  class ArtIndexPage < Page
    attr_reader :category, :category_data, :dir

    def initialize(site, base, dir)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(name)
      self.read_yaml(File.join(base, '_layouts'), layout)

      set_category
      set_page_data
      set_collected_artworks
    end

    private

    def layout
      'art_index.html'
    end

    def set_category
      # artworks/t29/ => t29\
      @category = dir.match(/\/(.*)\/$/)[1]
      puts "no data for #{category}" if site.data["art_index_data"][category].nil?
      @category_data = site.data["art_index_data"][category] || {"title" => category}
    end

    def set_page_data
      self.data['title'] = category_data["title"]
      self.data['excerpt'] = category_data["excerpt"] || category_data["description"]
      %w"tags description thumb".each do |attr|
        self.data[attr] = category_data[attr]
      end
      self.data['art_index'] = true
    end

    def set_collected_artworks
      self.data['artworks'] = site.collections["artworks"].docs.select {|a| a.url.match(category)}
    end
  end

  class T56IndexPage < ArtIndexPage

    private

    def layout
      'art_index_t56.html'
    end

    def set_category
      @category = "t56"
      @category_data = site.data["art_index_data"][category].clone
      set_duration
    end

    def set_duration
      d_match = dir.match(/\/t56\/(\d{4})?\/?(\d{2})?\/?/)
      if d_match[1].nil? && d_match[2].nil?
        self.data["sub_index"] = false
      elsif d_match[2].nil?
        year = self.data["year"] = d_match[1]
        @category_data["title"] = "T56 (#{year})"
        self.data["index_on"] = "artworks/t56/"
        self.data["sub_index"] = true
      else
        year = self.data["year"] = d_match[1]
        month = self.data["month"] = set_month(d_match[2])
        @category_data["title"] = "T56 (#{year} - #{month})"
        self.data["index_on"] = "artworks/t56/#{year}/"
        self.data["sub_index"] = true
      end
    end

    def set_month(m_num)
      %w( January February March April May June July August September October November December)[m_num.to_i]
    end

    def set_collected_artworks
      self.data['artworks'] = site.collections["artworks"].docs.select {|a| a.url.match(dir)}
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
        next if dir.match("t56")
        site.pages << ArtIndexPage.new(site, site.source, dir)
      end

      t56_dirs = Dir.glob("_artworks/t56/**/").collect { |dir| dir[1..-1] }
      t56_dirs.each do |dir|
        site.pages << T56IndexPage.new(site, site.source, dir)
      end
      # add index
      # add custom information in data file
    end
  end
end
