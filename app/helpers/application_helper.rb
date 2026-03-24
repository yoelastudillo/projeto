module ApplicationHelper
    def current_name_file
      File.basename(caller_locations(1, 1)[0].path)
    end
end
