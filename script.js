Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyDiNL2tVY9jcUFPUGZZBheuRQvKqxlHBxI',
      v: '3.26',
    },
    // Demonstrating how we can customize the name of the components
    installComponents: false,
  });
  document.addEventListener('DOMContentLoaded', function() {
    Vue.component('google-map', VueGoogleMaps.Map);
    Vue.component('ground-overlay', VueGoogleMaps.MapElementFactory({
      mappedProps: {
        'opacity': {}
      },
      props: {
        'source': {type: String},
        'bounds': {type: Object},
      },
      events: ['click', 'dblclick'],
      name: 'groundOverlay',
      ctr: () => google.maps.GroundOverlay,
      ctrArgs: (options, {source, bounds}) => [source, bounds, options],
    }));

    new Vue({
      el: '#root',
      data: {
        place: '',
        message: 'hi!'
      },
    });
  });