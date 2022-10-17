import { writable } from "svelte/store";
import { HouseholdType, questions, QuestionType, type MultipleChoiceQuestion, type NumberQuestion, type Tip } from "./questions";

let $values: any[] = [];
for (let q of questions) {
  switch (q.type) {
  case QuestionType.MultipleChoice:
    $values.push(Object.values((q.data as MultipleChoiceQuestion<any>).choices)[0]);
    break;
  
  case QuestionType.Number:
    $values.push((q.data as NumberQuestion).default);
    break;
  }
}

export let values = writable($values);
values.subscribe(v => {$values = v});

export let tips: Tip[];

function bathrooms(): number {
  let res = 0;

  // Shower
  let mult = 0;
  switch ($values[0]) {
  case HouseholdType.Old:
    mult = 5;
    break;

  case HouseholdType.Standard:
    mult = 3.8;
    break;

  case HouseholdType.Efficient:
    mult = 2.5;
    break;
  }
  res += mult * $values[2] * $values[1];
  if ($values[0] != HouseholdType.Efficient) {
    tips.push({
      title: "Low-flow Showerhead",
      description: "Write a few sentences here. I don't really like writing, but I do enjoy saving water!",
      save: (mult - 2.5) * $values[2] * $values[1]
    })
  }

  // Baths
  res += 35 * $values[3] * $values[1]; // Average bath takes 35 gallons

  // Sinks
  switch ($values[0]) {
  case HouseholdType.Old:
    mult = 5;
    break;

  case HouseholdType.Standard:
    mult = 3.3
    break;

  case HouseholdType.Efficient:
    mult = 1.5;
    break;
  }
  res += $values[4] * mult * $values[1];
  if ($values[0] != HouseholdType.Efficient) {
    tips.push({
      title: "Low-flow Bathroom Faucet",
      description: "Write a few sentences here. I don't really like writing, but I do enjoy saving water!",
      save: $values[4] * (mult - 1.5) * $values[1]
    })
  }

  // Toilets
  switch ($values[0]) {
  case HouseholdType.Old:
    mult = 5;
    break;

  case HouseholdType.Standard:
    mult = 3.3
    break;

  case HouseholdType.Efficient:
    mult = 1.6;
    break;
  }
  res += 5 * mult * $values[1]; // Average person flushes 5x a day
  if ($values[0] != HouseholdType.Efficient) {
    tips.push({
      title: "WaterSense Toilet",
      description: "Write a few sentences here. I don't really like writing, but I do enjoy saving water!",
      save: 5 * (mult - 1.6) * $values[1]
    })
  }

  return res;
}

function household(): number {
  let res = 0;

  // Kitchen sink
  let mult = 0;
  if ($values[0] === HouseholdType.Efficient) {
    mult = 1.5;
  } else {
    mult = 5;
  }
  res += $values[5] * mult * $values[1];
  if ($values[0] != HouseholdType.Efficient) {
    tips.push({
      title: "Low-flow Kitchen Faucet",
      description: "Write a few sentences here. I don't really like writing, but I do enjoy saving water!",
      save: $values[5] * (mult - 1.5) * $values[1]
    })
  }

  // Dishes
  if ($values[0] === HouseholdType.Efficient) {
    mult = 4.3;
  } else {
    mult = 15;
  }
  if ($values[7]) {
    mult = 27;
  }
  res += $values[6] * mult;
  if ($values[0] != HouseholdType.Efficient) {
    tips.push({
      title: "Use EnergyStar Dishwasher",
      description: "Write a few sentences here. I don't really like writing, but I do enjoy saving water!",
      save: $values[6] * (mult - 4.3)
    })
  }

  // Laundry
  if ($values[0] === HouseholdType.Efficient) {
    mult = 20;
  } else {
    mult = 41;
  }
  res += $values[8] * mult;
  if ($values[0] != HouseholdType.Efficient) {
    tips.push({
      title: "WaterSense Washing Machine",
      description: "Write a few sentences here. I don't really like writing, but I do enjoy saving water!",
      save: $values[8] * (mult - 20)
    })
  }

  return res;
}

function outdoor(): number {
  let res = 0;

  // Lawn
  res += $values[9] * $values[10];

  // Swimming pool
  if ($values[11]) {
    res += (18000 + $values[12])/365;
  }

  // Car
  res += $values[13] * $values[14];

  return res;
}

export function calculate(): number {
  tips = [];
  let res = 0;

  res += bathrooms();
  res += household();
  res += outdoor();

  return Math.round(res);
}