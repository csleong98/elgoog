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
        data: function () {
            return {
                count: 0,
                selected: false,
                selectedCount: ""
            }
        },
        methods: {
            incrementCounter: function () {
                this.count += 1;
                this.selected = true;
            },
            decrementCounter: function() {
                if (this.count > 0) {
                    this.count -= 1;
                    this.selected = true;
                } 
                else if (this.count = 0) {
                    this.selected= false;
                }
                else {
                    this.count = 0;
                }
            },
            addNumber: function() {
                this.count = 
            }
        },
        template: `
    <div class="supply">
      <div class="card">
        <article class="card-content">
        <div class="media">
        <div class="media-left">
            <figure class="image is-64x64">
              <img :src="supply.img" alt="Image">
            </figure>
          </div>
          <div class="content">
            <h4>
                <strong>{{supply.name}}</strong>
            </h4>
            <div class="level">
                <div class="level-item">
                    <button class="button is-info" @click="incrementCounter">
                        <i class="fa fa-plus"></i>
                    </button>
                </div>
                <div class="level-item" style="margin: 0 5px 0 5px;">
                    <p>{{count}}</p>
                </div>
                <div class="level-item">
                    <button class="button is-info" @click="decrementCounter">
                        <i class="fa fa-minus"></i>
                    </button>
                </div>
            </div>
          </div>
        </div>
        </article>
        <footer v-if="selected" class="card-footer">
            <a href="#" class="card-footer-item" @click="addNumber">Select</a>            
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