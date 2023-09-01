var Webflow = Webflow || [];
Webflow.push(function () {
  var namespace = '.carousel-slider-white.w-slide';

  function slideChangeEvent(evt) {
    var slider;
    if($(evt.target).is(namespace)) {
      slider = $(evt.target);
    } else {
      slider = $(evt.target).closest(namespace)
    }
    if(slider) {
      $(slider).trigger('slider-event', $(slider).data(namespace));
    }
  }

  var tap_selector = $.map(['.w-slider-arrow-left', '.w-slider-arrow-right', '.w-slider-dot'], function(s) { return namespace + ' ' + s; }).join(', ');

  // listeners
  $(document).off('tap' + namespace, tap_selector, slideChangeEvent).on('tap' + namespace, tap_selector, slideChangeEvent);
  $(document).off('swipe' + namespace, namespace, slideChangeEvent).on('swipe' + namespace, namespace, slideChangeEvent);

  // initial slide - manually trigger the event
  $(namespace + ':visible').each(function(i, s) {
    slideChangeEvent({ target: s });
  });

});
