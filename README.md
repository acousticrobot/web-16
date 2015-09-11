## Roadmap

  * create a sitemap from the old site, and list status of each page in the transfer process
  * build the site css

## Legacy

### Galleria tag:

I used to handle creating a slide show with multiple images this way (example from 2012-08-01-balloon-boy-interview.md)

[galleria dir="/images/t47/" prefix="t47."]09001**8[/galleria]

## Jekyll notes

Notes for building the site

### Liquid

#### Creating classes

    {: .special}
    ![a](/images/t47_tokipona/t47_nimi/t47_nimi_a.jpg)

    a

will generate:

    <p class="special"><img src="/images/t47_tokipona/t47_nimi/t47_nimi_a.jpg" alt="a"></p>
    <p>a</p>
