const calculateBmr = (gender, age, height, weight, activity = 0) => {
  const byGender = {
    male: (age, height, weight) => 13.7 * weight + 5 * height - 6.8 * age + 66,
    female: (age, height, weight) =>
      9.6 * weight + 1.85 * height - 4.7 * age + 655,
  };
  const byActivity = {
    0: (bmr) => bmr * 1.2,
    1: (bmr) => bmr * 1.375,
    2: (bmr) => bmr * 1.55,
    3: (bmr) => bmr * 1.725,
    4: (bmr) => bmr * 1.9,
  };
  const bmr = byGender[gender](age, height, weight);
  return Math.floor(byActivity[activity](bmr));
};

export default calculateBmr;
