module Jekyll

  # The list of pages and posts for each tag
  # modified from: https://github.com/jekyll/jekyll-help/issues/279
  # (altered to add pages after posts, for temporal relavency)
  class TagsGenerator < Generator
    priority :low

    def generate(site)
      site.data['all_tags'] = add_page_tags_to_post_tags(site)
    end

    # Returns a hash of posts and pages indexed by tags.
    #
    # Example:
    #   {
    #     'tech' => [<Post A>, <Post B>, <Page A>, <Page B>],
    #     'ruby' => [<Post B>]
    #   }
    #
    # By default Jekyll does not return the list of pages for each tag, only the posts
    def add_page_tags_to_post_tags(site)
      # Already given by Jekyll: the list of posts for each tag
      all_tags = site.post_attr_hash('tags')

      puts "plugin: generating tags from pages, adding to post tags"

      site.pages.each do |page|
        tags = page.data['tags']
        unless tags.nil?
          tags.each do |tag|
            all_tags[tag] << page
          end
        end
      end
      return all_tags
    end
  end
end
