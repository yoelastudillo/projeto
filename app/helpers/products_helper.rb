module ProductsHelper
  def month_day_year(datetime)
    datetime.strftime("%B %e, %Y")
  end
end
