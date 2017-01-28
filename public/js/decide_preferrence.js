export default function(addr1, addr2, priority) {
  if (addr1 == null || addr2 == null || addr1 == addr2) return

  let choice_1 = addr1;
  let choice_1_score = 0;

  let choice_2 = addr2;
  let choice_2_score = 0;

  _.forEach(priority, (value, key) => {
    switch (key) {
      case 'workDistance':
        if (choice_1.workDistance == choice_2.workDistance) {
          choice_1_score += value;
          choice_2_score += value;
        }
        else if (choice_1.workDistance < choice_2.workDistance) {
          choice_1_score += value;
        }
        else {
          choice_2_score += value;
        }
        break;
      case 'nearestCoffeeShop':
        if (choice_1.nearestCoffeeShop == choice_2.nearestCoffeeShop) {
          choice_1_score += value;
          choice_2_score += value;
        }
        else if (choice_1.nearestCoffeeShop == 0) {
          choice_1_score += value;
        }
        else if (choice_2.nearestCoffeeShop == 0) {
          choice_2_score += value;
        }
        break;
      case 'nearbyDogPark':
        if (choice_1.nearbyDogPark == choice_2.nearbyDogPark) {
          choice_1_score += value;
          choice_2_score += value;
        }
        else if (choice_1.nearbyDogPark) {
          choice_1_score += value;
        }
        else if (choice_2.nearbyDogPark) {
          choice_2_score += value;
        }
        break;
      }
    });

  let preferrence = (choice_1_score > choice_2_score) ? 1 : 2;

  return preferrence;
}
