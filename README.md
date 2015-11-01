## Roadmap

 * ~~Store old archive~~
 * Define index pages and build link lists

## Architecture

maybe?

Categories (toki pona etc.) has index page with custom organization. 
Tags -- collected on tags page(s) for cross reference.

## Jekyll notes

Site building notes

### Categories

I'm not using Categories in Jekyll because they are used to configure the directory path for posts and pages

### Plugins

Located in `_plugins`. Order is important -- use flags.

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

