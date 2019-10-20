Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDiNL2tVY9jcUFPUGZZBheuRQvKqxlHBxI'
    },
});
document.addEventListener('DOMContentLoaded', function () {
    // gmapCluster *must* be manually imported
    Vue.component('gmap-cluster', VueGoogleMaps.Cluster);
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