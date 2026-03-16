# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative "config/application"

Rails.application.load_tasks

task :dev do
  sh "git pull"
  sh "bundle install"
  sh "rails db:prepare"
  sh "rails db:seed:replant" # replant borra los datos de la base de datos y vuelve a ejecutar las semillas, útil para mantener la base de datos actualizada con los cambios en las semillas sin perder datos importantes
  exec "bin/dev"
end

task :close do
  print 'Mensaje del commit:'
  msg = gets.chomp
  sh 'git add .'
  sh 'git commit -m "#{msg}"'
  sh 'git push'
end
