const EXERCISES = {
  fullgym: {
    push: [
      { id:'fg_bench', name:'Barbell Bench Press', sets:4, reps:'8–10', tip:'Tuck elbows at 45°', muscle:'chest' },
      { id:'fg_ohp', name:'Overhead Press', sets:3, reps:'8–10', tip:'Brace core, don\'t flare elbows', muscle:'shoulders' },
      { id:'fg_incline', name:'Incline Dumbbell Press', sets:3, reps:'10–12', tip:'Control the descent', muscle:'chest' },
      { id:'fg_lateral', name:'Lateral Raises', sets:3, reps:'12–15', tip:'Lead with elbows, slow tempo', muscle:'shoulders' },
      { id:'fg_tricep', name:'Cable Tricep Pushdown', sets:3, reps:'12–15', tip:'Keep elbows locked at sides', muscle:'triceps' }
    ],
    pull: [
      { id:'fg_pullup', name:'Pull-ups', sets:4, reps:'6–10', tip:'Dead hang at bottom, chin over bar', muscle:'back' },
      { id:'fg_row', name:'Barbell Bent-over Row', sets:4, reps:'8–10', tip:'Hinge at hip, squeeze shoulder blades', muscle:'back' },
      { id:'fg_cable_row', name:'Seated Cable Row', sets:3, reps:'10–12', tip:'Don\'t rock — isolate the pull', muscle:'back' },
      { id:'fg_face_pull', name:'Face Pulls', sets:3, reps:'15', tip:'Protects your rotator cuff', muscle:'shoulders' },
      { id:'fg_curl', name:'Barbell Curl', sets:3, reps:'10–12', tip:'No swinging, full supination at top', muscle:'biceps' }
    ],
    legs: [
      { id:'fg_squat', name:'Barbell Back Squat', sets:4, reps:'6–8', tip:'Knees track toes, chest up', muscle:'quads' },
      { id:'fg_rdl', name:'Romanian Deadlift', sets:3, reps:'8–10', tip:'Hinge — feel hamstrings stretch', muscle:'hamstrings' },
      { id:'fg_leg_press', name:'Leg Press', sets:3, reps:'10–12', tip:'Don\'t lock knees at the top', muscle:'quads' },
      { id:'fg_lunge', name:'Walking Lunges', sets:3, reps:'12 each', tip:'Big step, back knee nearly touches floor', muscle:'quads' },
      { id:'fg_calf', name:'Standing Calf Raises', sets:4, reps:'15–20', tip:'Full range, pause at top', muscle:'calves' }
    ],
    full: [
      { id:'fg_deadlift', name:'Deadlift', sets:4, reps:'5–6', tip:'Hips hinge back, bar stays close to legs', muscle:'back' },
      { id:'fg_bench_f', name:'Bench Press', sets:3, reps:'8–10', tip:'Control the eccentric', muscle:'chest' },
      { id:'fg_pullup_f', name:'Pull-ups', sets:3, reps:'6–8', tip:'Full dead hang each rep', muscle:'back' },
      { id:'fg_goblet', name:'Goblet Squat', sets:3, reps:'12', tip:'Elbows inside knees at bottom', muscle:'quads' },
      { id:'fg_plank', name:'Weighted Plank', sets:3, reps:'45 sec', tip:'Squeeze glutes and abs simultaneously', isBodyweight:true, muscle:'core' }
    ],
    upper: [
      { id:'fg_bench_u', name:'Bench Press', sets:4, reps:'8–10', tip:'Tuck elbows, arch naturally', muscle:'chest' },
      { id:'fg_row_u', name:'Bent-over Row', sets:4, reps:'8–10', tip:'Squeeze at the top', muscle:'back' },
      { id:'fg_ohp_u', name:'Overhead Press', sets:3, reps:'8–10', tip:'Press in a slight arc', muscle:'shoulders' },
      { id:'fg_lat_u', name:'Lat Pulldown', sets:3, reps:'10–12', tip:'Drive elbows to hips', muscle:'back' },
      { id:'fg_curl_u', name:'Curl + Tricep Extension', sets:3, reps:'10 each', tip:'Superset — minimal rest between', muscle:'biceps' }
    ],
    core: [
      { id:'fg_ab_wheel', name:'Ab Wheel Rollout', sets:3, reps:'8–12', tip:'Don\'t let hips sag', isBodyweight:true, muscle:'core' },
      { id:'fg_hanging', name:'Hanging Knee Raises', sets:3, reps:'12–15', tip:'Control the swing', isBodyweight:true, muscle:'core' },
      { id:'fg_cable_crunch', name:'Cable Crunch', sets:3, reps:'15', tip:'Round your spine, don\'t pull with neck', muscle:'core' },
      { id:'fg_pallof', name:'Pallof Press', sets:3, reps:'12 each side', tip:'Resist rotation — that\'s the point', muscle:'core' },
      { id:'fg_cardio', name:'Cardio Finisher', sets:1, reps:'15 min', tip:'Treadmill, bike or rower', isBodyweight:true, muscle:'cardio' }
    ]
  },
  cables: {
    push: [
      { id:'cb_fly', name:'Cable Chest Fly', sets:4, reps:'10–12', tip:'Arms slightly bent, squeeze at center', muscle:'chest' },
      { id:'cb_push', name:'Tricep Pushdown', sets:3, reps:'12–15', tip:'Elbows pinned, full extension', muscle:'triceps' },
      { id:'cb_oh_ext', name:'Overhead Tricep Extension', sets:3, reps:'12–15', tip:'Keep elbows close to head', muscle:'triceps' },
      { id:'cb_lat', name:'Cable Lateral Raise', sets:3, reps:'15', tip:'Lead with elbow, not hand', muscle:'shoulders' },
      { id:'cb_front', name:'Cable Front Raise', sets:3, reps:'12', tip:'Keep core braced, no swinging', muscle:'shoulders' }
    ],
    pull: [
      { id:'cb_lat_pull', name:'Lat Pulldown', sets:4, reps:'10–12', tip:'Drive elbows to hips', muscle:'back' },
      { id:'cb_row', name:'Seated Cable Row', sets:4, reps:'10–12', tip:'Squeeze shoulder blades together', muscle:'back' },
      { id:'cb_face_pull', name:'Face Pull', sets:3, reps:'15', tip:'Rope to forehead, elbows high', muscle:'shoulders' },
      { id:'cb_straight', name:'Straight-arm Pulldown', sets:3, reps:'12–15', tip:'Engages lats — constant tension', muscle:'back' },
      { id:'cb_curl', name:'Cable Curl', sets:3, reps:'12–15', tip:'Constant tension throughout', muscle:'biceps' }
    ],
    legs: [
      { id:'cb_through', name:'Cable Pull-through', sets:4, reps:'12–15', tip:'Hip hinge, glutes drive the movement', muscle:'glutes' },
      { id:'cb_kick', name:'Cable Glute Kickback', sets:3, reps:'15 each', tip:'Squeeze glute at top, no momentum', muscle:'glutes' },
      { id:'cb_hip_ab', name:'Cable Hip Abduction', sets:3, reps:'15 each', tip:'Stand tall, controlled arc outward', muscle:'glutes' },
      { id:'cb_leg_curl', name:'Cable Leg Curl', sets:3, reps:'12–15', tip:'Brace against something, isolate the curl', muscle:'hamstrings' },
      { id:'cb_squat', name:'Cable Squat', sets:3, reps:'12', tip:'Hold cable at chest, squat deep', muscle:'quads' }
    ],
    full: [
      { id:'cb_chop', name:'Cable Woodchop', sets:3, reps:'12 each', tip:'Rotate from hips, not just arms', muscle:'core' },
      { id:'cb_row_f', name:'Seated Cable Row', sets:3, reps:'10–12', tip:'Full stretch at start', muscle:'back' },
      { id:'cb_fly_f', name:'Cable Chest Fly', sets:3, reps:'12', tip:'Keep slight elbow bend', muscle:'chest' },
      { id:'cb_pull_f', name:'Cable Pull-through', sets:3, reps:'12', tip:'Full hip extension at top', muscle:'glutes' },
      { id:'cb_pallof', name:'Pallof Press', sets:3, reps:'12 each', tip:'Anti-rotation — brace hard', muscle:'core' }
    ],
    upper: [
      { id:'cb_fly_u', name:'Cable Chest Fly', sets:4, reps:'10–12', tip:'Three angles: low, mid, high', muscle:'chest' },
      { id:'cb_lat_u', name:'Lat Pulldown', sets:4, reps:'10–12', tip:'Wide grip, chest to bar', muscle:'back' },
      { id:'cb_row_u', name:'Cable Row (wide grip)', sets:3, reps:'10–12', tip:'Targets mid-back and rear delts', muscle:'back' },
      { id:'cb_curl_u', name:'Cable Curl', sets:3, reps:'12', tip:'Try single-arm for better mind-muscle', muscle:'biceps' },
      { id:'cb_push_u', name:'Tricep Pushdown', sets:3, reps:'12–15', tip:'Superset with curls for efficiency', muscle:'triceps' }
    ],
    core: [
      { id:'cb_crunch', name:'Cable Crunch', sets:4, reps:'15–20', tip:'Round spine to floor, elbows to knees', muscle:'core' },
      { id:'cb_pallof_c', name:'Pallof Press', sets:3, reps:'12 each', tip:'Best cable core exercise there is', muscle:'core' },
      { id:'cb_chop_c', name:'Cable Woodchop', sets:3, reps:'12 each', tip:'Rotate from hips, arms follow', muscle:'core' },
      { id:'cb_bend', name:'Cable Side Bend', sets:3, reps:'15 each', tip:'Slow and controlled, not heavy', muscle:'core' },
      { id:'cb_cardio', name:'Cardio Finisher', sets:1, reps:'15 min', tip:'Bike or treadmill', isBodyweight:true, muscle:'cardio' }
    ]
  },
  freeweights: {
    push: [
      { id:'fw_bench', name:'Dumbbell Bench Press', sets:4, reps:'8–10', tip:'Greater range than barbell', muscle:'chest' },
      { id:'fw_ohp', name:'Dumbbell Overhead Press', sets:3, reps:'10–12', tip:'Neutral grip reduces shoulder strain', muscle:'shoulders' },
      { id:'fw_fly', name:'Incline Dumbbell Fly', sets:3, reps:'12', tip:'Slight bend in elbows, stretch at bottom', muscle:'chest' },
      { id:'fw_lat', name:'Dumbbell Lateral Raise', sets:3, reps:'15', tip:'Thumbs slightly down, lead with elbows', muscle:'shoulders' },
      { id:'fw_kick', name:'Tricep Kickback', sets:3, reps:'12–15', tip:'Upper arm parallel to floor throughout', muscle:'triceps' }
    ],
    pull: [
      { id:'fw_row', name:'Single-arm Dumbbell Row', sets:4, reps:'10 each', tip:'Knee on bench, big range of motion', muscle:'back' },
      { id:'fw_ren', name:'Renegade Row', sets:3, reps:'8 each', tip:'Hips square to floor — no rotation', muscle:'back' },
      { id:'fw_shrug', name:'Dumbbell Shrug', sets:3, reps:'15', tip:'Straight up — no rolling', muscle:'traps' },
      { id:'fw_rd', name:'Rear Delt Fly', sets:3, reps:'15', tip:'Hinge forward, lead with elbows', muscle:'shoulders' },
      { id:'fw_hammer', name:'Hammer Curl', sets:3, reps:'10–12', tip:'Builds brachialis — thickens the arm', muscle:'biceps' }
    ],
    legs: [
      { id:'fw_goblet', name:'Goblet Squat', sets:4, reps:'10–12', tip:'Elbows inside knees at the bottom', muscle:'quads' },
      { id:'fw_rdl', name:'Dumbbell RDL', sets:4, reps:'10–12', tip:'Feel the hamstring stretch', muscle:'hamstrings' },
      { id:'fw_lunge', name:'Dumbbell Reverse Lunge', sets:3, reps:'10 each', tip:'Easier on knees than forward lunge', muscle:'quads' },
      { id:'fw_sumo', name:'Dumbbell Sumo Squat', sets:3, reps:'12', tip:'Wide stance, toes out, inner thigh', muscle:'quads' },
      { id:'fw_calf', name:'Single-leg Calf Raise', sets:3, reps:'15 each', tip:'Hold dumbbell, balance challenge', muscle:'calves' }
    ],
    full: [
      { id:'fw_thrust', name:'Dumbbell Thruster', sets:4, reps:'10', tip:'Squat drives into overhead press', muscle:'full' },
      { id:'fw_row_f', name:'Single-arm Row', sets:3, reps:'10 each', tip:'Full stretch at bottom', muscle:'back' },
      { id:'fw_rdl_f', name:'Dumbbell RDL', sets:3, reps:'10', tip:'Hamstrings stretch = hip hinge working', muscle:'hamstrings' },
      { id:'fw_cp', name:'Curl to Press', sets:3, reps:'10', tip:'Combine for time efficiency', muscle:'shoulders' },
      { id:'fw_plank', name:'Plank Dumbbell Pull', sets:3, reps:'10 each', tip:'Anti-rotation core work', isBodyweight:true, muscle:'core' }
    ],
    upper: [
      { id:'fw_bench_u', name:'Dumbbell Bench Press', sets:4, reps:'8–10', tip:'Feel the stretch at the bottom', muscle:'chest' },
      { id:'fw_row_u', name:'Single-arm Row', sets:4, reps:'10 each', tip:'Elbow past hip line at top', muscle:'back' },
      { id:'fw_fly_u', name:'Dumbbell Fly', sets:3, reps:'12', tip:'Chest stretch is the whole point', muscle:'chest' },
      { id:'fw_ohp_u', name:'Seated Overhead Press', sets:3, reps:'10–12', tip:'Seated removes the cheat', muscle:'shoulders' },
      { id:'fw_21s', name:'21s Bicep Curl', sets:3, reps:'21', tip:'7 lower + 7 upper + 7 full — brutal', muscle:'biceps' }
    ],
    core: [
      { id:'fw_russian', name:'Russian Twist', sets:3, reps:'20 total', tip:'Feet off floor for more challenge', isBodyweight:true, muscle:'core' },
      { id:'fw_situp', name:'Weighted Sit-up', sets:3, reps:'15', tip:'Hold plate at chest', muscle:'core' },
      { id:'fw_suit', name:'Suitcase Carry', sets:3, reps:'30m each', tip:'Heavy dumbbell, stand tall', muscle:'core' },
      { id:'fw_bend', name:'Dumbbell Side Bend', sets:3, reps:'15 each', tip:'Controlled, not explosive', muscle:'core' },
      { id:'fw_cardio', name:'Cardio Finisher', sets:1, reps:'15 min', tip:'Jump rope or treadmill', isBodyweight:true, muscle:'cardio' }
    ]
  },
  bodyweight: {
    push: [
      { id:'bw_push', name:'Push-ups', sets:4, reps:'10–20', tip:'Hands shoulder-width, body straight', isBodyweight:true, muscle:'chest' },
      { id:'bw_pike', name:'Pike Push-up', sets:3, reps:'8–12', tip:'Hips high, head toward floor', isBodyweight:true, muscle:'shoulders' },
      { id:'bw_dip', name:'Tricep Dips', sets:3, reps:'10–15', tip:'Elbows track back, not out', isBodyweight:true, muscle:'triceps' },
      { id:'bw_diamond', name:'Diamond Push-up', sets:3, reps:'8–12', tip:'Hands form diamond under chest', isBodyweight:true, muscle:'triceps' },
      { id:'bw_decline', name:'Decline Push-up', sets:3, reps:'10–15', tip:'Feet elevated — upper chest focus', isBodyweight:true, muscle:'chest' }
    ],
    pull: [
      { id:'bw_pullup', name:'Pull-ups', sets:4, reps:'5–10', tip:'Dead hang start, chin over bar', isBodyweight:true, muscle:'back' },
      { id:'bw_chinup', name:'Chin-ups', sets:3, reps:'6–10', tip:'Underhand grip hits biceps more', isBodyweight:true, muscle:'biceps' },
      { id:'bw_inv', name:'Inverted Row', sets:3, reps:'10–15', tip:'Body straight, pull chest to bar', isBodyweight:true, muscle:'back' },
      { id:'bw_super', name:'Superman Hold', sets:3, reps:'12–15', tip:'Squeeze glutes and back at top', isBodyweight:true, muscle:'back' },
      { id:'bw_rev', name:'Reverse Snow Angel', sets:3, reps:'15', tip:'Trains rear delts without equipment', isBodyweight:true, muscle:'shoulders' }
    ],
    legs: [
      { id:'bw_squat', name:'Bodyweight Squat', sets:4, reps:'15–20', tip:'Drive knees out, sit back', isBodyweight:true, muscle:'quads' },
      { id:'bw_lunge', name:'Reverse Lunge', sets:3, reps:'12 each', tip:'Back knee nearly touches floor', isBodyweight:true, muscle:'quads' },
      { id:'bw_glute', name:'Glute Bridge', sets:4, reps:'15–20', tip:'Squeeze glutes at top, pause 1 sec', isBodyweight:true, muscle:'glutes' },
      { id:'bw_slrdl', name:'Single-leg RDL', sets:3, reps:'10 each', tip:'Balance challenge + hamstring stretch', isBodyweight:true, muscle:'hamstrings' },
      { id:'bw_wall', name:'Wall Sit', sets:3, reps:'45 sec', tip:'Thighs parallel to floor, back flat', isBodyweight:true, muscle:'quads' }
    ],
    full: [
      { id:'bw_burp', name:'Burpees', sets:4, reps:'10', tip:'Explosive jump at top — full effort', isBodyweight:true, muscle:'full' },
      { id:'bw_mtn', name:'Mountain Climbers', sets:3, reps:'20 each', tip:'Hips level, drive knee to chest fast', isBodyweight:true, muscle:'core' },
      { id:'bw_jsq', name:'Jump Squats', sets:3, reps:'12', tip:'Land soft, absorb through hips and knees', isBodyweight:true, muscle:'quads' },
      { id:'bw_push_f', name:'Push-ups', sets:3, reps:'15', tip:'Full range every rep', isBodyweight:true, muscle:'chest' },
      { id:'bw_plank', name:'Plank', sets:3, reps:'45 sec', tip:'Squeeze everything — glutes, abs, quads', isBodyweight:true, muscle:'core' }
    ],
    upper: [
      { id:'bw_push_u', name:'Push-up Circuit', sets:4, reps:'10 each variation', tip:'Wide / regular / diamond back to back', isBodyweight:true, muscle:'chest' },
      { id:'bw_pull_u', name:'Pull-ups', sets:4, reps:'Max reps', tip:'Every rep counts — stop before form breaks', isBodyweight:true, muscle:'back' },
      { id:'bw_pike_u', name:'Pike Push-up', sets:3, reps:'10–12', tip:'Shoulder press substitute', isBodyweight:true, muscle:'shoulders' },
      { id:'bw_dip_u', name:'Tricep Dips', sets:3, reps:'12–15', tip:'Lean forward for chest, upright for triceps', isBodyweight:true, muscle:'triceps' },
      { id:'bw_towel', name:'Towel Bicep Curl', sets:3, reps:'12–15', tip:'Loop towel around door handle, lean and curl', isBodyweight:true, muscle:'biceps' }
    ],
    core: [
      { id:'bw_plank_c', name:'Plank Hold', sets:4, reps:'45–60 sec', tip:'Brace everything — hardest part is breathing', isBodyweight:true, muscle:'core' },
      { id:'bw_hollow', name:'Hollow Body Hold', sets:3, reps:'30 sec', tip:'Lower back pressed to floor at all times', isBodyweight:true, muscle:'core' },
      { id:'bw_bike', name:'Bicycle Crunches', sets:3, reps:'20 each', tip:'Slow and deliberate beats fast and sloppy', isBodyweight:true, muscle:'core' },
      { id:'bw_leg_r', name:'Lying Leg Raise', sets:3, reps:'15', tip:'Lower back stays pressed to floor', isBodyweight:true, muscle:'core' },
      { id:'bw_bear', name:'Bear Crawl', sets:3, reps:'20m', tip:'Knees 1 inch off floor — total body burn', isBodyweight:true, muscle:'core' }
    ]
  }
};

// All exercises flat list for swap search
const ALL_EXERCISES_FLAT = Object.values(EXERCISES).flatMap(loc =>
  Object.values(loc).flatMap(split => split)
).filter((ex, i, arr) => arr.findIndex(e => e.id === ex.id) === i);

const DEFAULT_SPLITS = {
  3: ['push','pull','full'],
  4: ['push','pull','legs','full'],
  5: ['push','pull','legs','upper','core']
};

const LOCATION_LABELS = {
  fullgym: 'Full Gym',
  cables: 'Cable Machines',
  freeweights: 'Free Weights',
  bodyweight: 'Bodyweight'
};

const SPLIT_LABELS = {
  push: 'Upper Push',
  pull: 'Upper Pull',
  legs: 'Lower Body',
  full: 'Full Body',
  upper: 'Upper Body',
  core: 'Core & Cardio'
};

const MUSCLE_LABELS = {
  chest: 'Chest', shoulders: 'Shoulders', triceps: 'Triceps',
  back: 'Back', biceps: 'Biceps', traps: 'Traps',
  quads: 'Quads', hamstrings: 'Hamstrings', glutes: 'Glutes',
  calves: 'Calves', core: 'Core', cardio: 'Cardio', full: 'Full Body'
};
