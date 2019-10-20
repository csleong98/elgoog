Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDiNL2tVY9jcUFPUGZZBheuRQvKqxlHBxI'
    },
    // Demonstrating how we can customize the name of the components
    installComponents: false,
});
document.addEventListener('DOMContentLoaded', function () {
    Vue.component('google-map', VueGoogleMaps.Map);
    Vue.component('google-marker', VueGoogleMaps.Marker);
    new Vue({
        el: '#root',
        data: {
            center: {
                lat: 10.0,
                lng: 10.0
            },
            markers: [{
                position: {
                    lat: 10.0,
                    lng: 10.0
                }
            }, {
                position: {
                    lat: 11.0,
                    lng: 11.0
                }
            }]
        },
    });
});