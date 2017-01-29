import 'materialize-css/js/materialize.js';
import { TIM_HORTONS, STARBUCKS, SECOND_CUP } from './address.js';

const WORK_KEY = 'workDistance';
const COFFEE_KEY = 'nearestCoffeeShop';
const DOG_PARK_KEY = 'nearbyDogPark';

function calculateWorkAddrScore(choice_1, choice_2, pvalue) {
  let score_1 =0, score_2 = 0;
  if (choice_1[WORK_KEY] == choice_2[WORK_KEY]) {
    score_1 += pvalue;
    score_2 += pvalue;
  }
  else if (choice_1[WORK_KEY] < choice_2[WORK_KEY]) {
    score_1 += pvalue;
  }
  else {
    score_2 += pvalue;
  }
  return [score_1, score_2];
}

function calculateCoffeeShopScore(choice_1, choice_2, pvalue) {
  let score_1 = 0, score_2 = 0;
  if (choice_1[COFFEE_KEY] == choice_2[COFFEE_KEY]) {
    score_1 += pvalue;
    score_2 += pvalue;
  }
  else if (choice_1[COFFEE_KEY] == TIM_HORTONS) {
    score_1 += pvalue;
  }
  else if (choice_2[COFFEE_KEY] == TIM_HORTONS) {
    score_2 += pvalue;
  }

  return [score_1, score_2];
}

function calculateDogParkScore(choice_1, choice_2, pvalue) {
  let score_1 = 0, score_2 = 0;
  if (choice_1[DOG_PARK_KEY] == choice_2[DOG_PARK_KEY]) {
    score_1 += pvalue;
    score_2 += pvalue;
  }
  else if (choice_1[DOG_PARK_KEY]) {
    score_1 += pvalue;
  }
  else if (choice_2[DOG_PARK_KEY]) {
    score_2 += pvalue;
  }

  return [score_1, score_2];
}

export default function(addr1, addr2, priority) {
  if (addr1 == null || addr2 == null) {
    Materialize.toast('Please select 2 addresses for comparison', 3000, 'error-toast');
    return;
  }

  if (addr1.id === addr2.id) {
    Materialize.toast('Please select 2 different addresses for comparison', 3000, 'error-toast');
    return;
  }

  let choice_1_score = 0, choice_2_score = 0;

  let addrScore = calculateWorkAddrScore(addr1, addr2, priority[WORK_KEY]);
  let coffeeScore = calculateCoffeeShopScore(addr1, addr2, priority[COFFEE_KEY]);
  let dogParkScore = calculateDogParkScore(addr1, addr2, priority[DOG_PARK_KEY]);

  choice_1_score = addrScore[0] + coffeeScore[0] + dogParkScore[0];
  choice_2_score = addrScore[1] + coffeeScore[1] + dogParkScore[1];


  if (choice_1_score == choice_2_score) return 3;
  return (choice_1_score > choice_2_score) ? 1 : 2;
}
