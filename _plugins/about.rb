module Jekyll

  # Add Site metadata to the about page
  class AboutGenerator < Generator

    def generate(site)
      about_page = site.pages.detect { |page| page.name == 'about.html' }
      about_page.data.merge! generate_stats(site)
    end

    def generate_stats(site)
      {
        'pages_count' => site.pages.count,
        'posts_count' => site.posts.count
      }
    end

  end
end
