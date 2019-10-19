Vue.use(VueGoogleMaps, {
    load: {
        //   key: 'AIzaSyDiNL2tVY9jcUFPUGZZBheuRQvKqxlHBxI',
        v: '3.26',
    },
    // Demonstrating how we can customize the name of the components
    installComponents: false,
});

document.addEventListener('DOMContentLoaded', function () {
    Vue.component('google-map', VueGoogleMaps.Map);
    Vue.component('ground-overlay', VueGoogleMaps.MapElementFactory({
        mappedProps: {
            'opacity': {}
        },
        props: {
            'source': {
                type: String
            },
            'bounds': {
                type: Object
            },
        },
        events: ['click', 'dblclick'],
        name: 'groundOverlay',
        ctr: () => google.maps.GroundOverlay,
        ctrArgs: (options, {
            source,
            bounds
        }) => [source, bounds, options],
    }));

    const supplies = [{
            id: 1,
            name: 'Food',
            img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        },
        {
            id: 2,
            name: 'Water',
            img: 'https://semantic-ui.com/images/avatar2/large/molly.png',
        },
        {
            id: 3,
            name: 'Clothing',
            img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',
        }
    ]

    Vue.component('tweet-component', {
        template: `
    <div class="supply">
      <div class="card" @click="select">
        <article class="card-content">
        <div class="media">
        <div class="media-left">
            <figure class="image is-64x64">
              <img :src="supply.img" alt="Image">
            </figure>
          </div>
          <div class="content">
            <p>
                <strong>{{supply.name}}</strong>
            </p>
          </div>
        </div>
        </article>
        <footer class="card-footer">
            <a href="#" class="card-footer-item">Select</a>            
        </footer>
      </div>
    </div> 
  `,
        props: {
            supply: Object
        }
    });

    new Vue({
        el: '#root',
        data: {
            disasterLocation: "Kuala Lumpur",
            disasterCategory: "Flood",
            supplies
        }
    });
});

// supplies: [{
//         id: 1,
//         supply: 'Food'
//     },
//     {
//         id: 2,
//         supply: 'Water'
//     },
//     {
//         id: 3,
//         supply: 'Medicine'
//     },
//     {
//         id: 4,
//         supply: 'Children`s` Needs'
//     },
//     {
//         id: 5,
//         supply: 'Clothing'
//     },
// ],
// services: [{
//         service: 'medical volunteers'
//     },
//     {
//         service: 'transportation'
//     },
//     {
//         service: 'moving'
//     },
//     {
//         service: 'clearing debris'
//     },
//     {
//         services: 'cleaning'
//     }
// ]