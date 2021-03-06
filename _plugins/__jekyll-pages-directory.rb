# adds pages from a _pages directory
# https://github.com/bbakersmith/jekyll-pages-directory

module Jekyll
  class PagesDirGenerator < Generator
    priority :high

    def generate(site)
      puts "plugin: generating pages from _pages directory"
      pages_dir = site.config['pages'] || './_pages'
      all_raw_paths = Dir["#{pages_dir}/**/*"]
      all_raw_paths.each do |f|

        if File.file?(File.join(site.source, '/', f))
          filename = f.match(/[^\/]*$/)[0]
          clean_filepath = f.gsub(/^#{pages_dir}\//, '')
          clean_dir = extract_directory(clean_filepath)

          site.pages << PagesDirPage.new(site,
                                         site.source,
                                         clean_dir,
                                         filename,
                                         pages_dir)

        end
      end
      site.data['nav_pages'] = []
      collect_nav_pages(site)
    end

    def extract_directory(filepath)
      dir_match = filepath.match(/(.*\/)[^\/]*$/)
      if dir_match
        return dir_match[1]
      else
        return ''
      end
    end

    def collect_nav_pages(site)
      site.pages.each do |page|
        if page.data['nav_page']
          site.data['nav_pages'] << page
        end
      end
    end
  end

  class PagesDirPage < Page

    def initialize(site, base, dir, name, pagesdir)
      @site = site
      @base = base
      @dir = dir
      @name = name

      process(name)

      read_yaml(File.join(base, pagesdir, dir), name)
    end
  end
end
