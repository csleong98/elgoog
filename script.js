Vue.use(VueGoogleMaps, {
    load: {
        key: APIkey,
        v: '3.26',
    },
    installComponents: false,
});

document.addEventListener('DOMContentLoaded', function () {
    Vue.component('google-map', VueGoogleMaps.Map);
    Vue.component('google-marker', VueGoogleMaps.Marker);

    const supplies = [{
        id: 1,
        name: 'Food',
        amount: 300,
        amountCategory: 'packages',
        img: './img/food.png',
    },
    {
        id: 2,
        name: 'Water',
        amount: 300,
        amountCategory: 'bottles',
        img: './img/water.png',
    },
    {
        id: 3,
        name: 'Clothing',
        amount: 300,
        amountCategory: 'sets',
        img: './img/clothes.png',
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
            clear: function () {
                this.supply.amount = ((this.supply.amount) + (this.count));
                this.count = 0;
            },
            decrease50: function () {
                if (this.supply.amount <= 0) {
                    alert("Supply is sufficient.");
                } else {
                    this.count += 50;
                    this.supply.amount -= 50;
                    this.selected = true;
                }
            },
            incrementCounter: function () {
                if (this.supply.amount <= 0) {
                    alert("Supply is sufficient.");
                } else {
                    this.count += 1;
                    this.supply.amount -= 1;
                    this.selected = true;
                }
            },
            decrementCounter: function () {
                if (this.count > 0) {
                    this.count -= 1;
                    this.supply.amount += 1;
                    this.selected = true;
                }
                else if (this.count = 0) {
                    this.selected = false;
                }
                else {
                    this.count = 0;
                }
            },
            addNumber: function () {
                this.$emit("SelectedCount", this.count);
                console.log(this.count);
                alert(this.count + ' ' + this.supply.amountCategory + ' ' + "of" + ' ' + this.supply.name + ' ' + "has been donated");
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
                    <button class="button is-danger is-outlined" @click="clear">Clear</button>
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
                <span class="subtitle is-6">
                    {{supply.amount}}
                </span>
                <span>{{supply.amountCategory}}</span>
            </div>
            <div class="media-left">
                <button class="button is-outlined" @click="decrease50">Donate 50 {{this.supply.amountCategory}} </button>
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

    const mp = new Vue({
        el: '#root',
        components: {
            'tweetcomponent': tweetComponent,
        },
        data:
            function () {
                return {
                    disasterLocation: "Kuala Lumpur",
                    disasterCategory: "Earthquake",
                    supplies,
                    eqCenter: {
                        lat: 30.529,
                        lng: 128.093
                    },
                    ppCenter: {
                        lat: 6,
                        lng: 110.5879166668
                    },
                    earthquakeMarkers: [],
                    populationMarkers: [],
                    moneys: [
                        { moneyamount: 20},
                        { moneyamount: 50 },
                        { moneyamount: 100 }
                    ],
                }
            },
            methods: {
                donateMoney: function() {
                    if ("{{money.moneyamount}}" == 20) {
                        alert("You donated"+ " " + 20);
                    } else if ("{{money.moneyamount}}" == 50) {
                        alert("You donated"+ " "+ 50);
                    } else {
                        alert("You donated"+ " "+ 100);
                    }
                }
            },
    });
    fetch("./data/earthquake.json").then(function (resp) {
        return resp.json();
    }).then(function (data) {
        mp.earthquakeMarkers = data
    });

    fetch("./data/msia.json").then(function (resp) {
        return resp.json();
    }).then(function (data) {
        mp.populationMarkers = data
    })
});
