---
title: About
permalink: /about/
metapage: true
nav_page: true
layout: page
---

This is the website of Jonathan Gabel.

This version was initialized on August 25, 2015, and replaces a WordPress site that ran from Jun 11, 2012 until ________.

The current site is built using [Jekyll](http://jekyllrb.com/) and is committed on [Github](https://github.com/josankapo)

You can contact me directly at: hello [at] jonathangabel [dot] com

---

### site stats

  * {{ page.posts_count }} posts
  * {{ page.pages_count }} pages
  * {{ site.data.all_tags | size }} tags
  * {{ site.data.old_sitemap | size }} old site pages
  * pages left requiring redesign: {{ page.archive_actions | size }}

---

# h1 - site styles

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos quos eaque delectus impedit facilis aut recusandae provident?  [Patorum Nisi](#), *rem pariatur porro alias quam repellat*. **Doloribus minima** minus natus nesciunt nobis.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quod temporibus quaerat autem consectetur facilis laudantium, eos iusto, suscipit sed est error officia inventore quae, repudiandae dolore nihil quis corrupti.

## h2 - content subheader

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ipsa nam eveniet quia consequuntur perspiciatis sunt veniam expedita nostrum. Inventore illo neque, doloribus officia temporibus repellat vitae accusamus dignissimos tempore.

### h3 - content subheader

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi recusandae molestias possimus, fuga, autem dignissimos voluptatum saepe, eum voluptates corporis impedit inventore veniam! Facilis, ducimus, vero. Quibusdam aut, mollitia libero.

#### h4 - content subheader

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa nobis laudantium reprehenderit dicta assumenda, id impedit minima beatae laborum commodi quisquam illum iste. Repellendus cum, consequuntur iste saepe quia excepturi.

#### code highlighting

{% highlight ruby %}
  page data: {{ this.data }}

  {% for d in site.data %}
  datum:  {{d}}
  {% endfor %}
{% endhighlight %}

{% highlight ruby %}

    # _plugins/haml_converter.rb
    #https://gist.github.com/dtjm/517556

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

{% endhighlight %}




