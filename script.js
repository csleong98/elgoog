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
            amount: 100,
            img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        },
        {
            id: 2,
            name: 'Water',
            amount: 100,
            img: 'https://semantic-ui.com/images/avatar2/large/molly.png',
        },
        {
            id: 3,
            name: 'Clothing',
            amount: 100,
            img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',
        }
    ]
var tweetComponent = { 
    
        data: function () {
            return {
                count: 0,
                selected: false,
                selectedCount: "",
            }
        },
        methods: {
            clear: function() {
                this.supply.amount = ((this.supply.amount) + (this.count));
                this.count = 0;
            },
            decrease50: function() {
                if(this.supply.amount <= 0) {
                    alert("Supply is sufficient.");
                } else {
                    this.count += 50;
                    this.supply.amount -= 50;
                    this.selected = true;
                }
            },
            incrementCounter: function () {
                if(this.supply.amount <= 0) {
                    alert("Supply is sufficient.");
                } else {
                    this.count += 1;
                    this.supply.amount -= 1;
                    this.selected = true;
                }
            },
            decrementCounter: function() {
                if (this.count > 0) {
                    this.count -= 1;
                    this.supply.amount += 1;
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
                this.$emit("SelectedCount", this.count);
                console.log(this.count);
                this.count = 0;
            }
        },
        template: `
    <div class="supply">
      <div class="card">
        <div v-if="this.count > 0" class="card-header">
            <p class="card-header-title">
                
            </p>
            <div class="card-header-icon">
                <span>
                    <button class="button is-danger is-outlined" @click="clear"><i class="fas fa-times"></i></button>
                </span>
            </div>
        </div>
        <article class="card-content">
        <div class="media">
        <div class="media-left">
            <figure class="image is-64x64">
              <img :src="supply.img" alt="Image">
            </figure>
          </div>
            <div class="media-content">
                <p class="title is-4">
                    <strong>{{supply.name}}</strong>
                </p>
                <p class="subtitle is-6">
                    {{supply.amount}}
                </p>
            </div>
            <div class="media-left">
                <button class="button is-outlined" @click="decrease50">Donate 50</button>
            </div>
            <div class="level">
                <div class="level-item">
                    <button class="button is-info" @click="decrementCounter">
                        <i class="fa fa-minus"></i>
                    </button>
                </div>
                <div class="level-item" style="margin: 0 5px 0 5px;">
                    <p>{{count}}</p>
                </div>
                <div class="level-item">
                    <button class="button is-info" @click="incrementCounter">
                        <i class="fa fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
        </article>
        <footer v-if="this.count > 0" class="card-footer">
            <a href="#" class="card-footer-item" @click="addNumber">Confirm<p v-if="count > 0">({{count}})</p></a>            
        </footer>
      </div>
    </div> 

  `,
    props: {
        supply: Object
    }
}

// var resultComponent = {
//     components: {
//         'tweetcomponent': tweetComponent
//     },
//     data: function(){
//         return {
//             data: ""
//         }
//     },
//     template: `
//         <p>{{data}}</p>
//     `,
//     methods: {
//         setCountForComponent() {
//             console.log("it works")
//         }
//     },
// }
    new Vue({
        el: '#root',
        components: {
            'tweetcomponent': tweetComponent,
            // 'resultcomponent': resultComponent
        },
        data: 
         function() {
            return {
                disasterLocation: "Kuala Lumpur",
                disasterCategory: "Flood",
                supplies
            }
         }
    });
});