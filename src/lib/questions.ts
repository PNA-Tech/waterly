export interface Question<T> {
  title: string,
  type: QuestionType,
  data: MultipleChoiceQuestion<T> | NumberQuestion,
  condition?: Condition,
}

export enum QuestionType {
  MultipleChoice,
  Number,
}

export interface MultipleChoiceQuestion<T> {
  choices: Record<string, T>,
}

export interface NumberQuestion {
  min: number,
  max?: number,
  default: number,
}

export interface Condition{
  offset: number,
  check: (v: any) => boolean,
}

// Questions
export enum HouseholdType {
  Old,
  Standard,
  Efficient
}

export const questions: Question<any>[] = [
  {
    title: "What type of household do you have?",
    type: QuestionType.MultipleChoice,
    data: {
      choices: {
        "Pre-1980": HouseholdType.Old,
        "Standard": HouseholdType.Standard,
        "Efficient (WaterSense appliances, low-flow showerheads, etc.)": HouseholdType.Efficient,
      }
    },
  },
  {
    title: "How many people live in your household?",
    type: QuestionType.Number,
    data: {
      min: 1,
      default: 1,
    },
  },
  {
    title: "How long is the average shower in your household?",
    type: QuestionType.MultipleChoice,
    data: {
      choices: {
        "<5 minutes": 4,
        "5-10 minutes": 8,
        "11-15 minutes": 13,
        "15+ minutes": 15,
      }
    },
  },
  {
    title: "How often do people in your household take baths?",
    type: QuestionType.MultipleChoice,
    data: {
      choices: {
        "Never": 0,
        "Once a year": 1/365,
        "Once a month": 1/30,
        "Once a week": 1/7,
        "Once a day": 1,
      }
    }
  },
  {
    title: "How long do people in your household leave the bathroom sink running?",
    type: QuestionType.MultipleChoice,
    data: {
      choices: {
        "<4 minutes": 4,
        "4-10 minutes": 8,
        "11-30 minutes": 20,
        "30+ minutes": 30,
      }
    },
  },
  {
    title: "How long do members of your household leave the kitchen sink running (not including washing dishes)?",
    type: QuestionType.MultipleChoice,
    data: {
      choices: {
        "Under 5 minutes": 4,
        "5-20 minutes": 13,
        "21-45 minutes": 33,
        "Over 45 minutes": 45,
      }
    }
  },
  {
    title: "How often does your household wash dishes?",
    type: QuestionType.MultipleChoice,
    data: {
      choices: {
        "Disposable dishes": 0,
        "Once a week": 1/7,
        "Once a day": 1,
        "Twice a day": 2,
      }
    }
  },
  {
    title: "How are dishes washed?",
    type: QuestionType.MultipleChoice,
    data: {
      choices: {
        "By hand": true,
        "Dishwasher": false,
      },
    },
    condition: {
      offset: -1,
      check: (v: number) => v != 0,
    },
  },
  {
    title: "How often does your household do laundry?",
    type: QuestionType.MultipleChoice,
    data: {
      choices: {
        "Never": 0,
        "Once a month": 1/30,
        "Once a week": 1/7,
        "Once a day": 1,
      }
    }
  },
  {
    title: "How often do you water your lawn?",
    type: QuestionType.MultipleChoice,
    data: {
      choices: {
        "Never": 0,
        "Once a month": 1/30,
        "Once a week": 1/7,
        "Once a day": 1,
      },
    },
  },
  {
    title: "How large is the are of your lawn you water?",
    type: QuestionType.MultipleChoice,
    data: {
      choices: {
        "1-99 square feet": 17,
        "100-500 square feet": 99,
        "500-1,000 square feet": 248,
        "1,000-5,000 square feet": 990,
        "5,000-10,000 square feet": 2470,
        "10,000-40,000 square feet": 8250,
        "40,000+ square feet": 14375,
      },
    },
    condition: {
      offset: -1,
      check: (v: number) => v != 0,
    },
  },
  {
    title: "Do you have a swimming pool?",
    type: QuestionType.MultipleChoice,
    data: {
      choices: {
        "No": false,
        "Yes": true,
      },
    },
  },
  {
    title: "How long do you leave the pool uncovered?",
    type: QuestionType.MultipleChoice,
    data: {
      choices: {
        "1": 1000,
        "2": 2000,
        "3": 3000,
        "4": 4000,
        "5": 5000,
        "6": 6000,
        "7": 7000,
        "8": 8000,
        "9": 9000,
        "10": 10000,
        "11": 11000,
        "12": 12000,
      },
    },
    condition: {
      offset: -1,
      check: (v: boolean) => v,
    },
  },
  {
    title: "How often do you wash your car?",
    type: QuestionType.MultipleChoice,
    data: {
      choices: {
        "I don't have a car": 0,
        "Once a year": 1/365,
        "Once a month": 1/30,
        "Once a week": 1/7,
        "Once a day": 1,
      },
    },
  },
  {
    title: "How do you wash your car?",
    type: QuestionType.MultipleChoice,
    data: {
      choices: {
        "At home": 100,
        "Car wash": 58,
      },
    },
    condition: {
      offset: -1,
      check: (v: number) => v != 0,
    },
  }
];