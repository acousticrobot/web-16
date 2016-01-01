class ArtCollectionItem
  attr_reader :html, :filename, :title, :description, :id, :year, :medium, :dimensions, :image

  def initialize(filename,html)
    @filename = filename.gsub(".","_")
    @html = html
    parse_from_html
  end

  def front_mater
    {
      "id" => id,
      "title" => title,
      "year_made" => year,
      "dimensions" => dimensions,
      "description" => description,
      "images" => [image],
      "thumb" => image.gsub("_l.jpg","_s.jpg"),
      "media" => [medium]
    }
  end

  def yml_description
    "---\n\n" + description
  end

  private

  def sanitize_html_string(str)
    str.gsub(/\r/,"").gsub(/\s+/," ").strip
  end

  def parse_from_html
    @title = sanitize_html_string html.css(".tabledata").children[1].children[1].children[1].to_s
    @description = sanitize_html_string html.css(".tabledescription").children[1].to_s
    @id = sanitize_html_string html.css(".tabledata").children[4].to_s
    @year = sanitize_html_string html.css(".tabledata").children[7].to_s
    @medium = sanitize_html_string html.css(".tabledata").children[10].to_s
    @dimensions = sanitize_html_string html.css(".tabledata").children[13].to_s
    @image = sanitize_html_string html.xpath("//img").attr("src").value.gsub("../../..","")
  end
end
