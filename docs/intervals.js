export const intervals = [];

const addInterval = (name, duration, header = 'Workout', breakDuration) => {
  intervals.push({ header, name, duration });
  if (breakDuration) {
    intervals.push({ header, name: 'Break', duration: breakDuration });
  }
};

addInterval('Boxer Shuffle', 30, 'Warmup');
addInterval('Squats', 30, 'Warmup');
addInterval('Walk downs', 30, 'Warmup');
addInterval('Side-step punches', 30, 'Warmup');
addInterval('Butt kickers', 30, 'Warmup');
addInterval('Jumping jacks', 30, 'Warmup');

addInterval('Break', 15, 'Break');

addInterval('Jumping Squats', 45, 'Round 1', 15);
addInterval('Plank jacks', 45, 'Round 1', 15);
addInterval('Lateral lunge + raises left', 23, 'Round 1');
addInterval('Lateral lunge + raises right', 22, 'Round 1', 15);
addInterval('Walk out + Push-ups', 45, 'Round 1', 30);

addInterval('Mountain climbers', 45, 'Round 1', 15);
addInterval('Jumping lunges', 45, 'Round 1', 15);
addInterval('High plank to low plank', 45, 'Round 1', 15);
addInterval('Burpee', 45, 'Round 1');

addInterval('Break', 30, 'Break');

addInterval('Jumping Squats', 45, 'Round 2', 15);
addInterval('Plank jacks', 45, 'Round 2', 15);
addInterval('Lateral lunge + raises right', 23, 'Round 2');
addInterval('Lateral lunge + raises left', 22, 'Round 2', 15);
addInterval('Walk out + Push-ups', 45, 'Round 2', 30);

addInterval('Mountain climbers', 45, 'Round 2', 15);
addInterval('Jumping lunges', 45, 'Round 2', 15);
addInterval('High plank to low plank', 45, 'Round 2', 15);
addInterval('Burpee', 45, 'Round 2', 30);

addInterval('Break', 30, 'Break');






