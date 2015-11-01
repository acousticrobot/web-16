---
title: About
permalink: /about/
---

This is the website of Jonathan Gabel.

This version was initialized on August 25, 2015, and replaces a WordPress site that ran from Jun 11, 2012 until ________.

The current site is built using [Jekyll](http://jekyllrb.com/) and it committed on [Github](https://github.com/josankapo)

You can contact me directly at: hello [at] jonathangabel [dot] com


---
*style:*

# h1 - Content Header

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos quos eaque delectus impedit facilis aut recusandae provident?  [Patorum Nisi](#), *rem pariatur porro alias quam repellat*. **Doloribus minima** minus natus nesciunt nobis.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus quod temporibus quaerat autem consectetur facilis laudantium, eos iusto, suscipit sed est error officia inventore quae, repudiandae dolore nihil quis corrupti.

## h2 - Content Subheader

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ipsa nam eveniet quia consequuntur perspiciatis sunt veniam expedita nostrum. Inventore illo neque, doloribus officia temporibus repellat vitae accusamus dignissimos tempore.

### h3 - Content Subheader

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi recusandae molestias possimus, fuga, autem dignissimos voluptatum saepe, eum voluptates corporis impedit inventore veniam! Facilis, ducimus, vero. Quibusdam aut, mollitia libero.

#### h4 - Content Subheader

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa nobis laudantium reprehenderit dicta assumenda, id impedit minima beatae laborum commodi quisquam illum iste. Repellendus cum, consequuntur iste saepe quia excepturi.

{% highlight ruby %}
  posts: {{ page.posts_count }}
  pages: {{ page.pages_count }}
  from site data:
  {% for d in site.data %}
  datum:  {{d}}
  {% endfor %}
{% endhighlight %}

{% highlight ruby %}
    # _plugins/haml_converter.rb
    #https://gist.github.com/dtjm/517556

    module Jekyll
      class HamlConverter < Converter
        safe true

        def setup
          return if @setup
          require 'haml'
          @setup = true
        rescue
          STDERR.puts 'do `gem install haml`'
          raise FatalException.new("Missing dependency: haml")
        end

        def matches(ext)
          ext =~ /haml/i
        end

        def output_ext(ext)
          ".html"
        end

        def convert(content)
          setup
          engine = Haml::Engine.new(content)
          engine.render
        end
      end
    end
{% endhighlight %}

```scss
    // Colors (0 is lightest)
    $color-white-D: #F9F9F9;
    $color-white-C: #F4F4F4;
    $color-grey-E: #E8E8E8;
    $color-grey-A: #AAAAAA;
    $color-grey-B: #BBBBBB;
    $color-grey-9: #999999;
    $color-grey-8: #828282;
    $color-grey-5: #555555;
    $color-grey-4: #424242;
    $color-grey-1: #111111;
    $color-grey-0: #000000;

    $color-gris-9: #999988;

    // From syntax highlighter (need adjustment)
    $color-red-3: #A61717;
    $color-red-AA: #AA0000;
    $color-red-DD: #DD1144;
    $color-red-E3: #E3D2D2;
    $color-red-1: #990000;


    $color-blue-6: #445588;
    $color-blue-6: #008080;
    $color-blue-8: #0086B3;
    $color-blue-7: #009999;

    $color-purple-88: #800080;
    $color-purple-97: #990073;

    $color-green-5: #009926;

    // Layout

    $color-background-content: color-white-C;
    $color-background-gutter: $color-grey-E;

    // Text

    $color-text: $color-grey-1;

    $color-action: #74AF0E;
    $color-action-inverse: lighten($color-action, 15%);
    $color-action-complete: darken($color-action, 15%);
    $color-action-inverse-complete: $color-action;

    $color-accent: #724D2F;
```



