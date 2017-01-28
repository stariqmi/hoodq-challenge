/*
- Changing how data is stored
-- We should store the workDistance in a single metric, lets assume meters
-- True/False for storing nearbyDogPark
-- Use integers to store coffee shops instead of strings
*/

const coffeeShops = {
  starbucks: 0,
  tim_hortons: 1
};

export default {
  0: {
    address: '10 King st E, Toronto, ON',
    nearestCoffeeShop: 0,
    workDistance: '900',
    nearbyDogPark: true,
  },
  1: {
    address: '20 Queen st E, Toronto, ON',
    nearestCoffeeShop: 1,
    workDistance: '1000',
    nearbyDogPark: true,
  },
  2: {
    address: '30 Richmond st E, Toronto, ON',
    nearestCoffeeShop: 0,
    workDistance: '900',
    nearbyDogPark: false,
  },
  3: {
    address: '40 Front st, Toronto, ON',
    nearestCoffeeShop: 1,
    workDistance: '800',
    nearbyDogPark: true,
  },
  4: {
    address: '50 Adelaide st, Toronto, ON',
    nearestCoffeeShop: 0,
    workDistance: '10',
    nearbyDogPark: false,
  },
  5: {
    address: '60 Bay st, Toronto, ON',
    nearestCoffeeShop: 0,
    workDistance: '1200',
    nearbyDogPark: true,
  },
  6: {
    address: '70 Church st, Toronto, ON',
    nearestCoffeeShop: 1,
    workDistance: '700',
    nearbyDogPark: false,
  },
  7: {
    address: '80 Dundas st, Toronto, ON',
    nearestCoffeeShop: 'Second Cup',
    workDistance: '1200',
    nearbyDogPark: true,
  },
  8: {
    address: '90 Yonge st, Toronto, ON',
    nearestCoffeeShop: 0,
    workDistance: '900',
    nearbyDogPark: false,
  },
  9: {
    address: '100 College st, Toronto, ON',
    nearestCoffeeShop: 0,
    workDistance: '800',
    nearbyDogPark: true,
  },
}
