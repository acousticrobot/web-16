---
date: 2015-12-04
excerpt: I'm completely rebuilding this site from the ground up. I've simplified a lot of things, but added a bunch of features in the process. Read about the changes and what's new <a href="2016/new-site-launching-2016/">here</a>
slug: new-site-launching
title: New Site Launching for 2016
---

## Why I'm changing this site

I'm rebuilding this site using [Jekyll](http://jekyllrb.com/), in the hope that I'll be actively updating it. For years now I've had my site running as a self hosted WordPress site.  I learned a lot building in back in 2012, but there were aspects of the site that kept me from using it on a regular basis.

Back when I build the Wordpress version, I spend a great deal of time customizing the behavior, and really enjoyed how far I could push my own theme beyond the default blogging platform at its base. Besides the active support community, the really impressive thing about Wordpress is how far something that was originally meant for blogging can be extended into a customized content management system.

This is where it also breaks down for me though. It's one thing to build a CMS for someone else, so they can go on to fill in the content without needing to touch the code. When I'm building it for myself though, why not cut to the chase and create the content along with the site itself? By having the content right in the codebase I can manage all aspects of the site from one place. Rather than having to log in to a remote site, and then remain confined to a WYSIWYG content editor, I can do it all in a text editor on my laptop. Rather than manage a SQL database and rely on database backups for transferring content, I can store everything on [Github](https://github.com/{{ site.github_username }}/web-16).

### Simplify, Simplify, Simplify

Streamlining the development is part of a more general goal to simplify all aspects of the site. The layout I developed the last time was great when elements had custom styling, but this meant any time I posted something, I had to work on the layout as well. This time I tried to design for mobile first, and let the desktop version remain as simple as possible. My goal is to be able to concentrate on the content, and refine a style for all elements that won't require custom overrides. This means making certain concessions, but having some new possibilities as well.

#### Simple Styles

In the sitelen sitelen lessons, for instance, I'm removing the text floating around the images. Take a look at lesson 3 [before](/archive/2012/learn_t47_lesson-3.html), and [after](/toki-pona/lesson-3/). In the previous version, I spent a lot of time moving the images within a grid system before I was satisfied with how they flowed with the text. The thing is, facing this kind of layout on top of writing the lesson kept me from ever getting them finished. I'm hoping to have a chance to work on the remaining lessons once I've launched the new site.

The new style may involve more scrolling, but it's content independent, and actually looks better on phones and laptops.

#### Files, not a database

The [2007-2012 version of my site](/archive/2007/) was build with completely static files. I rebuilt over eight hundred pages, manually typing HTML and replacing the pertinent details from page to page. So moving on to PHP and all Wordpress offered felt incredibly powerful for my next attempt.

It occurred to me though, how many times the same files were being processed anew on the backend, and always with the same result. Sure, this can be sped up with cashing, but nothing about the pages on my site needs to be so elaborate. So far, Jekyll is proving to be the best of both worlds -- the ability to process repeatable content and updates like a dynamic site, but the simplicity and portability of a static one.

### Ruby!

I'm not here to bash PHP, but at the end of a workday, it's not a language I'd look forward to using on my own site.  There are other enticing languages out there, and part of me would like to chose one I don't know and see how far I could go with it. But this site isn't about me improving my programming skills, it's about creating the site I want with the highest quality and as efficiently as I can. Taking something I'm practiced in and applying it here seems like the best approach, so I can move beyond the technical and get to the content itself.

I'm usually either using Ruby or Javascript for work. Running a Rails, Sinatra or Node app never seemed like a good fit for my own site though; I just don't need that kind of power, or to pay for that kind of support.  And as much as I appreciate the design of Rails, it's Ruby itself that I have any emotional attachment to. So far, transferring my old content over and revamping the site using Jekyll has given me everything I need. And I have the confidence that if I have a need it for down the line, I'll be able to let the Ruby or Javascript shine through.

## New Features

I may be forcing a simplification of the site, but it's all in the service of getting some things out that I've wanted for a long time. I've added an archives section, which preserves a lot of the old content, an artworks collection, which has been incomplete for a long time, indices for navigation, and some new content for the sitelen sitelen section.

### The Archives

I've transfered most of the content from before into the new site, but for the sake of preservation, I've also done my best to store static copies of all the old content. I've also added the older *(pre 2009)* content back in. All of this is available in [the Archives](/archives).

### Artworks

My original versions of the site had pages and pages of artworks in them, but this was one thing I never found an easy way to transfer into the Wordpress site. With the [YAML front matter](http://jekyllrb.com/docs/frontmatter/) in Jekyll, this has become easier than it ever was before. I'm looking forward to adding the old work back in and adding new work as well. Once I launch, this will be some of the first content that I add.

### Indices

Being able to navigate a site is something I cherish highly, and in this regard I find sitemaps and indexing tools very useful.  One of the spots I will continue to concentrate on is creating indices when appropriate, (beyond the typical collections of categories and tags). The rudimentary beginnings of this are:

  * [the archive page](/archive/) -- where I hope to add other things as I dig them up
  * [the sitemap](/sitemap/) - where I will list all posts and pages
  * [the artworks page](/artworks/) -- which should soon have sub-menus as well
  * [toki pona](/toki-pona) -- all things sitelen sitelen

### Sitelen Sitelen

Fans of toki pona have been making their way here for years, and will be filling this site with more content soon. Beyond the sitelen sitelen lessons that still need to be written, I've had several artworks sent to me that hadn't made it onto my site. Check the [sitelen sitelen fanart](/toki-pona/#sitelen-pi-jan-ante) section for the latest!
