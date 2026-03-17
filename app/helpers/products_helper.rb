module ProductsHelper
  def format_date(datetime)
    datetime.strftime("%d/%m/%Y")
  end

  def render_if(condition, template, render) #
    render template, record if condition # asi es exactamente el formato para agregar un render en las views, entonces este metodo va a reemplazar esas lineas.
  end # luego dentro de la view, se puede colcoar render_if variable.present? y la template
end
