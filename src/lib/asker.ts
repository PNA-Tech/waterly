import { writable } from "svelte/store";
import { HouseholdType, questions, QuestionType, type MultipleChoiceQuestion, type NumberQuestion } from "./questions";

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

export function calculate(): number {
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

  // Kitchen sink
  if ($values[0] === HouseholdType.Efficient) {
    mult = 1.5;
  } else {
    mult = 5;
  }
  res += $values[5] * mult * $values[1];

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

  // Laundry
  if ($values[0] === HouseholdType.Efficient) {
    mult = 20;
  } else {
    mult = 41;
  }
  res += $values[8] * mult;

  // Lawn
  res += $values[9] * $values[10];

  // Swimming pool
  if ($values[10]) {
    res += (18000 + $values[11])/365;
  }

  // Car
  res += $values[12] * $values[13];

  return res;
}