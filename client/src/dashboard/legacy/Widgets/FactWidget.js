let $ = window.jQuery;

/**
 * A jQuery widget *not a D3 widget* to render a Fact
 *
 * @constructor
 */
class FactWidget {

  constructor(options){
    this.description = options.description || 'No fact available';
    this.el = options.el;  // is d3 element not jQuery element
    this.$el = $(this.el);
    this.init();
    return this;
  }

  render() {
    let $tmpl = $(`<div class="fact__inner"><p>${this.description}</p></div>`);
    $tmpl.appendTo(this.el);

    if ($(window).innerWidth() > 992) { // sass: $screen-md

      // resize the font-size if it overflows the container
      let $parent = this.$el.parent('.widget');
      let $child = $parent.find('p');

      let size;
      let minSize = 10;
      let exitHatch = 0;

      while ($child.height() > $parent.innerHeight()) {
        exitHatch++;
        if (exitHatch === 50) {
          break;
        }
        size = (parseInt($child.css('font-size')) - 1);
        console.log(size)
        if (size < minSize) {
          break;
        }
        $child.css('font-size', size + "px");
      }
      // end resize the font-size
    }
  }

  init(){
    this.render();
  }

}

module.exports = FactWidget;
