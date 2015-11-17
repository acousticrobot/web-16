module Jekyll

  # Add Site metadata to the about page
  class ArtworkGenerator < Generator
    priority :low

    def generate(site)
      puts "plugin: generating links for artworks"
      artwork_urls = site.collections["artworks"].docs.map do |artwork|
        artwork.url
      end
      site.collections["artworks"].docs.each do |artwork|
        index = artwork_urls.index(artwork.url)
        artwork.data["url_previous"] = index == 0 ? artwork_urls[artwork_urls.length - 1] : artwork_urls[index - 1]
        artwork.data["url_next"] = index == artwork_urls.length - 1 ? artwork_urls[0] : artwork_urls[index + 1]
      end
    end
  end
end




