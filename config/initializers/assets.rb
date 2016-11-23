# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.

assets = %w(
  dashboard.js login.js editor.js
  dashboard.css login.css editor.css
  arrow-right--aqua.svg    dashboard.svg            logo-gov-au-2x-dawn.png
  arrow-right--white.svg   dto.png                  logo-gov-au-2x-dusk.png
  arrow-right.svg          editor-skeleton-2.png    logo-gov-au-2x-night.png
  bars.svg                 external-link--aqua.svg  logo-gov-au-2x.png
  chevron-down--navy.svg   gov-performance.png      low-vision-icon.png
  close.svg                gov-performance.svg      performance.svg
  coatofarms.png           govau.svg                title.svg
  coatofarms.svg           header-bg.jpg
)

Rails.application.config.assets.precompile += assets
