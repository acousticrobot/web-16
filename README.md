## Roadmap

 * ~~Store old archive~~
 * Finish copies of old pages, update in data
 * Define index pages and build link lists

## Architecture

  * posts are grouped by year (to keep root level cleaner for uploading)
  * pages have their own 

both archived sites had structure: projects/t47 etc.

maybe?

Categories (toki pona etc.) has index page with custom organization. 
Tags -- collected on tags page(s) for cross reference.

## Jekyll Usage Notes

### Defaults

_Located in _config.yml_

Default settings for posts, pages, and collections. **Note** There is a conflict with the pages plugin that causes the default template for pages to not work -- all other values are assigned.

### Categories

Categories in Jekyll are used bu default to configure the directory path for posts and pages. Need to override the default path in order to use them.

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

#### Creating classes

    {: .special}
    ![a](/images/t47_tokipona/t47_nimi/t47_nimi_a.jpg)

    a

will generate:

    <p class="special"><img src="/images/t47_tokipona/t47_nimi/t47_nimi_a.jpg" alt="a"></p>
    <p>a</p>

### Upload strategy

Strategy in the works...
From git commit

  * Images - not in source control sync changes files:
    * /images
    * /archive/2012/images
    * /archive/2007/images  
  * Changed pages with each git commit

## Legacy

### Galleria tag:

I used to handle creating a slide show with multiple images this way (example from 2012-08-01-balloon-boy-interview.md)

[galleria dir="/images/t47/" prefix="t47."]09001**8[/galleria]

