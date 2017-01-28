/*
- Changing how data is stored
-- We should store the workDistance in a single metric, lets assume meters as integers
-- True/False for storing nearbyDogPark
-- Use integers to store coffee shops instead of strings
*/

const coffeeShops = {
  0: 'Tim Hortons',
  1: 'Starbucks',
  2: 'Second Cup'
};

const addresses =  {
  0: {
    id: 0,
    address: '10 King st E, Toronto, ON',
    nearestCoffeeShop: 1,
    workDistance: 900,
    nearbyDogPark: true,
  },
  1: {
    id: 1,
    address: '20 Queen st E, Toronto, ON',
    nearestCoffeeShop: 0,
    workDistance: 1000,
    nearbyDogPark: true,
  },
  2: {
    id: 2,
    address: '30 Richmond st E, Toronto, ON',
    nearestCoffeeShop: 1,
    workDistance: 900,
    nearbyDogPark: false,
  },
  3: {
    id: 3,
    address: '40 Front st, Toronto, ON',
    nearestCoffeeShop: 0,
    workDistance: 800,
    nearbyDogPark: true,
  },
  4: {
    id: 4,
    address: '50 Adelaide st, Toronto, ON',
    nearestCoffeeShop: 1,
    workDistance: 10,
    nearbyDogPark: false,
  },
  5: {
    id: 5,
    address: '60 Bay st, Toronto, ON',
    nearestCoffeeShop: 1,
    workDistance: 1200,
    nearbyDogPark: true,
  },
  6: {
    id: 6,
    address: '70 Church st, Toronto, ON',
    nearestCoffeeShop: 0,
    workDistance: 700,
    nearbyDogPark: false,
  },
  7: {
    id: 7,
    address: '80 Dundas st, Toronto, ON',
    nearestCoffeeShop: 2,
    workDistance: 1200,
    nearbyDogPark: true,
  },
  8: {
    id: 8,
    address: '90 Yonge st, Toronto, ON',
    nearestCoffeeShop: 1,
    workDistance: 900,
    nearbyDogPark: false,
  },
  9: {
    id: 9,
    address: '100 College st, Toronto, ON',
    nearestCoffeeShop: 1,
    workDistance: 800,
    nearbyDogPark: true,
  }
}

export {addresses, coffeeShops}
