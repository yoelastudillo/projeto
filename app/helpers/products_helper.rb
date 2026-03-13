module ProductsHelper
  def format_date(datetime)
    datetime.strftime("%d/%m/%Y")
  end
end
