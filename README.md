This README is really more a list of notes to myself than anything I'm trying to document for others. If anything here is useful to you though, I'm happy to share, and the site itself is all under the [Attribution-NonCommercial-ShareAlike 4.0 International license](http://creativecommons.org/licenses/by-nc-sa/4.0/)

To run Jekyll server:

`jekyll serve`

## Upload Strategy

## Any page change:

Upload:
  * any new images
  * any new pages
  * tags index (if page has tags)
  * sitemap
  * index.html

## Architecture

  * posts are grouped by year (to keep root level cleaner for uploading)
  * pages have their own folder _pages, which depends on the pages plugin
  * removed categories, also projects
  * Thumnails are 150 x 150

### Homepage

  * Displays all posts and pages tagged as **"featured"**

## Jekyll Usage Notes

### Links

Links to pages:

  `[syllabary page](/toki-pona/dictionaries/syllabary/)`

Link to posts:

  `[lipu lawa]({% post_url 2012-08-02-lipu-lawa-pi-esun-kama %})`

### Images

Centering large images:

```
{: .wrapper__center-image}
![name](/images/../image.jpg)
title of image
```

For fixed-width dictionary, hover image and text are optional

```
---
definitions:
- image: "/images/../image.jpg"
  hover_image: "/images/../image.gif"
  text: definition text
- ...
---

{% include image_dictionary.html definitions=page.definitions %}
```


### Frontmatter

#### slug

If pages need to be uniquely identified, give them a slug. Slugs in use:

  * `t47_lessons_index` - used for indexing everything sitelen sitelen

#### nav_page:

Set to true in order to have the page show up in the nav bar

#### sub_nav

Set to true to turn on sub nav (prevous | index | next)

Each link is optional, in order to have links appear, use the following additional frontmatter keys:

  * `sub_nav_term_for` - example: "artwork" => "previous artwork"
  * `url_previous` - for previous link
  * `url_up` - for index link
  * `url_next` - for next link

### Defaults

_Located in _config.yml_

Default settings for posts, pages, and collections. **Note** There is a conflict with the pages plugin that causes the default template for pages to not work -- all other values are assigned.

### Categories

Categories in Jekyll are used by default to configure the directory path for posts and pages. So far I haven't found a need to use them in addition to tags, so they were removed when found in the transfer files.

### Collections

  * Links
  * Artworks
  * CV

### Plugins

Located in `_plugins`. Order is important -- use flags:

    :lowest, :low, :normal,  :high, and :highest

  * Pages plugin runs first to collect all pages in the _pages directory
  * About plugin runs last -- this is just a smart scrapbook to collect any meta information about the site.

### Finding a specific page

    site.pages.detect { |page| page.name == 'about.md' }

### Liquid

Quick liquid reference:


#### Custom Image Styling

Centering image:

    {: .wrapper__center-image}
    ![lipu lawa pi esun kama](/images/t47/t47.100101_m.jpg)


Image with a single caption:

    {% include image_and_caption.html image="/images/t47_tokipona/tokisona/tokisona21.jpg" caption="wile sona li mute e sona." %}

Using two images:

    {% assign image_set="/images/t47_tokipona/t47_kamasona/t47_kaso03_03.jpg|"/images/t47_tokipona/t47_kamasona/t47_kaso03_04.jpg" | split: "|" %}
    {% include image_and_caption.html image=image_set caption="sina suli." %}

