require 'yaml'

module FileUtility
  class FileConverter
    attr_reader :model, :inbox, :outbox, :files

    def initialize(model, inbox, outbox)
      @model = model
      @inbox = inbox
      @outbox = outbox
    end

    def import_batch_files(type="html")
      import_files(type)
    end

    def create_collection
      files.each do |file|
        instance = new_collection_from_file file
        save_collection_to_file instance
      end
    end

    private

    # Returns the list of records from a directory
    def import_files(type)
      @files = Dir["#{inbox}/*.#{type}"]
      puts "#{files.count} files found..."
    end

    def new_collection_from_file(file)
      puts "new collection from #{file}..."
      html = File.open(file) { |f| Nokogiri::HTML(f) }
      model.new(file.sub("#{inbox}/","").sub(".html",""), html)
    end

    def save_collection_to_file(instance)
      puts "  saving..."
      file_path = "#{outbox}/#{instance.filename}.md"
      File.open( file_path,'w' ) do |f|
        f.puts YAML::dump( instance.front_mater )
        f.puts instance.yml_description
      end
    end
  end
end



