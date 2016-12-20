module ApplicationHelper

  def development_server?
    Rails.env.development? && ENV['DEV_SERVER'] == 'true'
  end

  # Sets the body data-route value on a per-page basis
  # Params:
  # - class_names: String of class names to append to class names string
  def body_route
    "#{controller_name}_#{action_name}"
  end

  # Sets the body class on a per-page basis
  # Params:
  # - class_names: {Array} Array of additional class names to append to body class
  # names
  def body_class(names)
    class_names = [body_route] << names
    class_names.flatten.join(' ')
  end

  def display_high_contrast_mode?
    controller_name == 'dashboards' && action_name == 'show'
  end

  def hashAsset(public_relative_path)
    public_relative_path + "?" + Digest::MD5.file(File.join(Rails.public_path, public_relative_path)).hexdigest
  end

  def public_image_source(image, ext='svg')
    hashAsset "/images/#{image}.#{ext}"
  end

  def public_stylesheet(sheet)
    # Not required for webpack-dev-server mode
    unless development_server?
      path = hashAsset "/stylesheets/#{sheet}.css"
      tag 'link', href: path, rel: 'stylesheet'
    end
  end

  def public_javascript(script)
    path = if development_server?
      "http://localhost:8080/javascripts/#{script}.js"
    else
      hashAsset "/javascripts/#{script}.js"
    end

    opts = { src: path, type: 'text/javascript' }
    tag('script', opts, true) + '</script>'.html_safe
  end

  def show_auth?
    $flipper[:auth].enabled? && !devise_controller?
  end
end
