module Jekyll

  # Add Site metadata to the about page
  class MetaGenerator < Generator
    priority :lowest

    def generate(site)
      puts "plugin: generating metadata for about page"
      about_page = site.pages.detect { |page| page.name == 'about.md' }
      if about_page
        about_page.data.merge! generate_about_data(site)
      else
        puts "... error loadiing about page"
      end

      puts "plugin: generating metadata for sitelen sitelen lessons"
      lessons_page = site.pages.detect {|page| page.data.has_key?("slug") && page.data["slug"] == 't47_lessons_00'}
      if lessons_page
        lessons_page.data.merge! generate_lessons_data(site)
      else
        puts "... error loading lessons page"
      end
    end

    def generate_about_data(site)
      # archive_actions = site.data["old_sitemap"].reject {|k,v| k["status"] == "done" }
      archive_actions = site.data["old_sitemap"].select {|k,v| k["status"] == "pending" }
      {
        'pages_count' => site.pages.count,
        'posts_count' => site.posts.docs.count,
        'artworks_count' => site.collections["artworks"].entries.count,
        'archive_actions' => archive_actions
      }
    end

    def generate_lessons_data(site)
      indices = {"lessons" => [], "dictionaries" => [] }
      site.pages.each_with_object(indices) do |page,data|
        if page.data.has_key?("sitelen_lessons_index")
          data["lessons"][page.data["sitelen_lessons_index"]] = {"title" => page.data["title"], "url" => page.url }
        elsif page.data.has_key?("sitelen_dict_index")
          data["dictionaries"][page.data["sitelen_dict_index"]] = {"title" => page.data["title"], "url" => page.url }
        end
        data
      end
    end
  end
end
