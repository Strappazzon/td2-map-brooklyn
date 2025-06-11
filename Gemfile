# Lock Bundler version
# https://stackoverflow.com/a/51788614
if (version = Gem::Version.new(Bundler::VERSION)) < Gem::Version.new('2.4.5')
  abort "Bundler version >= 2.4.5 is required. You are running #{version}."
end

source 'https://rubygems.org'

gem 'jekyll', '~> 4.4'
gem 'mini_racer', '~> 0.18'
# Avoid updating to version >= 1.80.0 due to @import deprecation
gem 'sass-embedded', '~> 1.79.0'

# Plugins
group :jekyll_plugins do
  gem 'jekyll-autoprefixer-v2', '~> 2.0'
  gem 'jekyll-terser', '~> 1.0'
end
