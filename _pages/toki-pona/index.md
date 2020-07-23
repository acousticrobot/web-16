---
title: sitelen sitelen
layout: page
sub_nav: false
slug: t47_lessons_00
permalink: /toki-pona/
thumb: /images/nav/thumb-toki.png
tags:
- sitelen-index
- toki pona
excerpt: <em>O kama pona! sina ken kama sona e sitelen sitelen lon lipu ni.</em><br><p>Learn how to write in the hieroglyphic blocks known as sitelen sitelen. This is a system of non-linear writing you can use to free your mind or break from regular thought. Here you will find all the lessons for writing toki pona using sitelen sitelen, plus glyph dictionaries and plenty of examples, including sitelen sitelen drawn by others.</p>
---

_O kama pona! sina ken kama sona e sitelen sitelen lon lipu ni._

Learn how to write in the hieroglyphic blocks known as sitelen sitelen.  This is a system of non-linear writing you can use to free your mind or break from regular thought.

### Lessons

{% for lesson in page.lessons %}{% if lesson != nil %}
  * [{{ lesson["title"] }}]({{ lesson["url"] }})
{% endif %}{% endfor %}

### Dictionaries

{% for dict in page.dictionaries %}{% if dict != nil %}
  * [{{ dict["title"] }}]({{ dict["url"] }})
{% endif %}{% endfor %}

### Examples


#### sitelen mi

{% for sitelen_page in site.data.all_tags["sitelen sitelen"] %}
  {% include image_index.html page=sitelen_page %}
{% endfor %}

#### sitelen pi jan ante

{% for sitelen_page in site.data.all_tags["sitelen pi jan ante"] %}
  {% include image_index.html page=sitelen_page %}
{% endfor %}
