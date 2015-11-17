module Jekyll

  # Add Site metadata to the about page
  class AboutGenerator < Generator
    priority :lowest

    def generate(site)
      puts "plugin: generating metadata for about page"
      about_page = site.pages.detect { |page| page.name == 'about.md' }
      if about_page
        about_page.data.merge! generate_stats(site)
      else
        puts "pages in _pages directory not loaded, unable to find about.md"
      end
    end

    def generate_stats(site)
      archive_actions = site.data["old_sitemap"].reject {|k,v| k["status"] == "done" }
      {
        'pages_count' => site.pages.count,
        'posts_count' => site.posts.count,
        'archive_actions' => archive_actions
      }
    end

  end
end
