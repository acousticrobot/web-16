---
title: Archive
permalink: /archive/
nav_page: true
layout: page
---

### Here are previous versions of this site:

#### [2012](2012/)

This version was a self hosted Wordpress Site, now archived as static pages.

#### [2007](2007/)
This version was a static site, each page built originally in Dreamweaver, and then eventually in plain text using Textmate. It has the most complete archive of artworks to date.

#### Previous site index:

Index of pages from the previous site, and the corresponding new versions and archived pages:

<section>

  <table>
    <tr>
      <th>Original URL</th>
      <th>action</th>
      <th>Redesigned Page</th>
      <th>Archived Page</th>
    </tr>

    {% for page in site.data.old_sitemap %}
    {% if page.action != "ignore" %}

      <tr class="{{ page.action }}">

        <td>{{ page.page }}</td>
        <td>{{ page.action }}</td>

        <td>
          {% if page.redirect_url != nil %}
            <a href="{{ page.redirect_url }}">new</a>
          {% endif %}
        </td>


        <td>
          {% if page.archive_url != nil %}
            <a href="{{ page.archive_url }}">archived</a>
          {% endif %}
        </td>

      </tr>

    {% endif %}
    {% endfor %}

  </table>
</section>
