const EXERCISES = {
  fullgym: {
    push: [
      { id:'fg_bench', name:'Barbell Bench Press', sets:4, reps:'8–10', tip:'Tuck elbows at 45°, full range of motion' },
      { id:'fg_ohp', name:'Overhead Press', sets:3, reps:'8–10', tip:'Brace your core, don\'t flare elbows' },
      { id:'fg_incline', name:'Incline Dumbbell Press', sets:3, reps:'10–12', tip:'Control the descent' },
      { id:'fg_lateral', name:'Lateral Raises', sets:3, reps:'12–15', tip:'Lead with elbows, slow tempo' },
      { id:'fg_tricep', name:'Cable Tricep Pushdown', sets:3, reps:'12–15', tip:'Keep elbows locked at sides' }
    ],
    pull: [
      { id:'fg_pullup', name:'Pull-ups', sets:4, reps:'6–10', tip:'Dead hang at bottom, chin over bar' },
      { id:'fg_row', name:'Barbell Bent-over Row', sets:4, reps:'8–10', tip:'Hinge at hip, squeeze shoulder blades' },
      { id:'fg_cable_row', name:'Seated Cable Row', sets:3, reps:'10–12', tip:'Don\'t rock — isolate the pull' },
      { id:'fg_face_pull', name:'Face Pulls', sets:3, reps:'15', tip:'Protects your rotator cuff — don\'t skip' },
      { id:'fg_curl', name:'Barbell Curl', sets:3, reps:'10–12', tip:'No swinging, full supination at top' }
    ],
    legs: [
      { id:'fg_squat', name:'Barbell Back Squat', sets:4, reps:'6–8', tip:'Knees track toes, chest up' },
      { id:'fg_rdl', name:'Romanian Deadlift', sets:3, reps:'8–10', tip:'Hinge — don\'t squat. Feel hamstrings stretch' },
      { id:'fg_leg_press', name:'Leg Press', sets:3, reps:'10–12', tip:'Don\'t lock knees at the top' },
      { id:'fg_lunge', name:'Walking Lunges', sets:3, reps:'12 each', tip:'Big step, back knee nearly touches floor' },
      { id:'fg_calf', name:'Standing Calf Raises', sets:4, reps:'15–20', tip:'Full range, pause at top' }
    ],
    full: [
      { id:'fg_deadlift', name:'Deadlift', sets:4, reps:'5–6', tip:'Hips hinge back, bar stays close to legs' },
      { id:'fg_bench_f', name:'Bench Press', sets:3, reps:'8–10', tip:'Control the eccentric' },
      { id:'fg_pullup_f', name:'Pull-ups', sets:3, reps:'6–8', tip:'Full dead hang each rep' },
      { id:'fg_goblet', name:'Goblet Squat', sets:3, reps:'12', tip:'Elbows inside knees at bottom' },
      { id:'fg_plank', name:'Weighted Plank', sets:3, reps:'45 sec', tip:'Squeeze glutes and abs simultaneously', isBodyweight:true }
    ],
    upper: [
      { id:'fg_bench_u', name:'Bench Press', sets:4, reps:'8–10', tip:'Tuck elbows, arch naturally' },
      { id:'fg_row_u', name:'Bent-over Row', sets:4, reps:'8–10', tip:'Squeeze at the top' },
      { id:'fg_ohp_u', name:'Overhead Press', sets:3, reps:'8–10', tip:'Press in a slight arc' },
      { id:'fg_lat_u', name:'Lat Pulldown', sets:3, reps:'10–12', tip:'Drive elbows to hips' },
      { id:'fg_curl_u', name:'Curl + Tricep Extension', sets:3, reps:'10 each', tip:'Superset — minimal rest between' }
    ],
    core: [
      { id:'fg_ab_wheel', name:'Ab Wheel Rollout', sets:3, reps:'8–12', tip:'Don\'t let your hips sag', isBodyweight:true },
      { id:'fg_hanging', name:'Hanging Knee Raises', sets:3, reps:'12–15', tip:'Control the swing', isBodyweight:true },
      { id:'fg_cable_crunch', name:'Cable Crunch', sets:3, reps:'15', tip:'Round your spine, don\'t pull with neck' },
      { id:'fg_pallof', name:'Pallof Press', sets:3, reps:'12 each side', tip:'Resist rotation — that\'s the point' },
      { id:'fg_cardio', name:'Cardio Finisher', sets:1, reps:'15 min', tip:'Treadmill, bike or rower', isBodyweight:true }
    ]
  },
  cables: {
    push: [
      { id:'cb_chest_fly', name:'Cable Chest Fly', sets:4, reps:'10–12', tip:'Arms slightly bent, squeeze at center' },
      { id:'cb_pushdown', name:'Tricep Pushdown', sets:3, reps:'12–15', tip:'Elbows pinned, full extension' },
      { id:'cb_overhead_ext', name:'Overhead Tricep Extension', sets:3, reps:'12–15', tip:'Keep elbows close to head' },
      { id:'cb_lateral', name:'Cable Lateral Raise', sets:3, reps:'15', tip:'Lead with elbow, not hand' },
      { id:'cb_front_raise', name:'Cable Front Raise', sets:3, reps:'12', tip:'Keep core braced, no swinging' }
    ],
    pull: [
      { id:'cb_lat_pull', name:'Lat Pulldown', sets:4, reps:'10–12', tip:'Drive elbows to hips, lean back slightly' },
      { id:'cb_seated_row', name:'Seated Cable Row', sets:4, reps:'10–12', tip:'Squeeze shoulder blades together' },
      { id:'cb_face_pull', name:'Face Pull', sets:3, reps:'15', tip:'Rope to forehead, elbows high' },
      { id:'cb_straight_pull', name:'Straight-arm Pulldown', sets:3, reps:'12–15', tip:'Engages lats — constant tension' },
      { id:'cb_curl', name:'Cable Curl', sets:3, reps:'12–15', tip:'Constant tension vs dumbbell' }
    ],
    legs: [
      { id:'cb_pull_through', name:'Cable Pull-through', sets:4, reps:'12–15', tip:'Hip hinge, glutes drive the movement' },
      { id:'cb_kickback', name:'Cable Glute Kickback', sets:3, reps:'15 each', tip:'Squeeze glute at top, no momentum' },
      { id:'cb_hip_ab', name:'Cable Hip Abduction', sets:3, reps:'15 each', tip:'Stand tall, controlled arc outward' },
      { id:'cb_leg_curl', name:'Cable Leg Curl', sets:3, reps:'12–15', tip:'Brace against something, isolate the curl' },
      { id:'cb_squat', name:'Cable Squat (low pulley)', sets:3, reps:'12', tip:'Hold cable at chest, squat deep' }
    ],
    full: [
      { id:'cb_woodchop', name:'Cable Woodchop', sets:3, reps:'12 each', tip:'Rotate from hips, not just arms' },
      { id:'cb_row_f', name:'Seated Cable Row', sets:3, reps:'10–12', tip:'Full stretch at start' },
      { id:'cb_fly_f', name:'Cable Chest Fly', sets:3, reps:'12', tip:'Keep slight elbow bend throughout' },
      { id:'cb_pull_f', name:'Cable Pull-through', sets:3, reps:'12', tip:'Full hip extension at top' },
      { id:'cb_pallof_f', name:'Pallof Press', sets:3, reps:'12 each', tip:'Anti-rotation — brace hard' }
    ],
    upper: [
      { id:'cb_fly_u', name:'Cable Chest Fly', sets:4, reps:'10–12', tip:'Three angles: low, mid, high over 3 sets' },
      { id:'cb_lat_u', name:'Lat Pulldown', sets:4, reps:'10–12', tip:'Wide grip, chest to bar' },
      { id:'cb_row_u', name:'Cable Row (wide grip)', sets:3, reps:'10–12', tip:'Targets mid-back and rear delts' },
      { id:'cb_curl_u', name:'Cable Curl', sets:3, reps:'12', tip:'Try single-arm for better mind-muscle' },
      { id:'cb_push_u', name:'Tricep Pushdown', sets:3, reps:'12–15', tip:'Superset with curls for efficiency' }
    ],
    core: [
      { id:'cb_crunch', name:'Cable Crunch', sets:4, reps:'15–20', tip:'Round spine to floor, elbows to knees' },
      { id:'cb_pallof_c', name:'Pallof Press', sets:3, reps:'12 each', tip:'Best cable core exercise there is' },
      { id:'cb_woodchop_c', name:'Cable Woodchop (high-low)', sets:3, reps:'12 each', tip:'Rotate from hips, arms follow' },
      { id:'cb_side_bend', name:'Cable Side Bend', sets:3, reps:'15 each', tip:'Slow and controlled, not heavy' },
      { id:'cb_cardio_c', name:'Cardio Finisher', sets:1, reps:'15 min', tip:'Bike or treadmill after cables', isBodyweight:true }
    ]
  },
  freeweights: {
    push: [
      { id:'fw_bench', name:'Dumbbell Bench Press', sets:4, reps:'8–10', tip:'Greater range than barbell — use it' },
      { id:'fw_ohp', name:'Dumbbell Overhead Press', sets:3, reps:'10–12', tip:'Neutral grip reduces shoulder strain' },
      { id:'fw_incline', name:'Incline Dumbbell Fly', sets:3, reps:'12', tip:'Slight bend in elbows, stretch at bottom' },
      { id:'fw_lateral', name:'Dumbbell Lateral Raise', sets:3, reps:'15', tip:'Thumbs slightly down, lead with elbows' },
      { id:'fw_kickback', name:'Tricep Kickback', sets:3, reps:'12–15', tip:'Upper arm parallel to floor throughout' }
    ],
    pull: [
      { id:'fw_row', name:'Single-arm Dumbbell Row', sets:4, reps:'10 each', tip:'Knee on bench, big range of motion' },
      { id:'fw_renegade', name:'Renegade Row', sets:3, reps:'8 each', tip:'Hips square to floor — no rotation' },
      { id:'fw_shrug', name:'Dumbbell Shrug', sets:3, reps:'15', tip:'Straight up — no rolling' },
      { id:'fw_rear_delt', name:'Rear Delt Fly', sets:3, reps:'15', tip:'Hinge forward, lead with elbows' },
      { id:'fw_hammer', name:'Hammer Curl', sets:3, reps:'10–12', tip:'Builds brachialis — thickens the arm' }
    ],
    legs: [
      { id:'fw_goblet', name:'Goblet Squat', sets:4, reps:'10–12', tip:'Elbows inside knees at the bottom' },
      { id:'fw_rdl', name:'Dumbbell RDL', sets:4, reps:'10–12', tip:'Feel the hamstring stretch, not lower back' },
      { id:'fw_lunge', name:'Dumbbell Reverse Lunge', sets:3, reps:'10 each', tip:'Easier on knees than forward lunge' },
      { id:'fw_sumo', name:'Dumbbell Sumo Squat', sets:3, reps:'12', tip:'Wide stance, toes out, targets inner thigh' },
      { id:'fw_calf', name:'Single-leg Calf Raise', sets:3, reps:'15 each', tip:'Hold dumbbell same side, balance challenge' }
    ],
    full: [
      { id:'fw_thruster', name:'Dumbbell Thruster', sets:4, reps:'10', tip:'Squat drives into overhead press — explosive' },
      { id:'fw_row_f', name:'Single-arm Row', sets:3, reps:'10 each', tip:'Full stretch at bottom' },
      { id:'fw_rdl_f', name:'Dumbbell RDL', sets:3, reps:'10', tip:'Hamstrings stretch = hip hinge working' },
      { id:'fw_curl_press', name:'Curl to Press', sets:3, reps:'10', tip:'Combine for time efficiency' },
      { id:'fw_plank_pull', name:'Plank Dumbbell Pull', sets:3, reps:'10 each', tip:'Anti-rotation core work', isBodyweight:true }
    ],
    upper: [
      { id:'fw_bench_u', name:'Dumbbell Bench Press', sets:4, reps:'8–10', tip:'Feel the stretch at the bottom' },
      { id:'fw_row_u', name:'Single-arm Row', sets:4, reps:'10 each', tip:'Elbow past hip line at top' },
      { id:'fw_fly_u', name:'Dumbbell Fly', sets:3, reps:'12', tip:'Chest stretch is the whole point' },
      { id:'fw_ohp_u', name:'Seated Overhead Press', sets:3, reps:'10–12', tip:'Seated removes the cheat' },
      { id:'fw_21s', name:'21s Bicep Curl', sets:3, reps:'21', tip:'7 lower + 7 upper + 7 full — brutal' }
    ],
    core: [
      { id:'fw_russian', name:'Russian Twist', sets:3, reps:'20 total', tip:'Feet off floor for more challenge', isBodyweight:true },
      { id:'fw_situp', name:'Weighted Sit-up', sets:3, reps:'15', tip:'Hold plate at chest' },
      { id:'fw_suitcase', name:'Suitcase Carry', sets:3, reps:'30m each', tip:'Heavy dumbbell, stand tall, don\'t lean' },
      { id:'fw_side_bend', name:'Dumbbell Side Bend', sets:3, reps:'15 each', tip:'Controlled, not explosive' },
      { id:'fw_cardio_fw', name:'Cardio Finisher', sets:1, reps:'15 min', tip:'Jump rope or treadmill', isBodyweight:true }
    ]
  },
  bodyweight: {
    push: [
      { id:'bw_pushup', name:'Push-ups', sets:4, reps:'10–20', tip:'Hands shoulder-width, body straight', isBodyweight:true },
      { id:'bw_pike', name:'Pike Push-up', sets:3, reps:'8–12', tip:'Hips high, head toward floor — shoulders', isBodyweight:true },
      { id:'bw_dip', name:'Tricep Dips', sets:3, reps:'10–15', tip:'Elbows track back, not out to sides', isBodyweight:true },
      { id:'bw_diamond', name:'Diamond Push-up', sets:3, reps:'8–12', tip:'Hands form diamond under chest', isBodyweight:true },
      { id:'bw_decline', name:'Decline Push-up', sets:3, reps:'10–15', tip:'Feet elevated — upper chest focus', isBodyweight:true }
    ],
    pull: [
      { id:'bw_pullup', name:'Pull-ups', sets:4, reps:'5–10', tip:'Dead hang start, chin clearly over bar', isBodyweight:true },
      { id:'bw_chinup', name:'Chin-ups', sets:3, reps:'6–10', tip:'Underhand grip hits biceps more', isBodyweight:true },
      { id:'bw_inv_row', name:'Inverted Row', sets:3, reps:'10–15', tip:'Body straight, pull chest to bar', isBodyweight:true },
      { id:'bw_superman', name:'Superman Hold', sets:3, reps:'12–15', tip:'Squeeze glutes and back together', isBodyweight:true },
      { id:'bw_rev_snow', name:'Reverse Snow Angel', sets:3, reps:'15', tip:'Trains rear delts without equipment', isBodyweight:true }
    ],
    legs: [
      { id:'bw_squat', name:'Bodyweight Squat', sets:4, reps:'15–20', tip:'Drive knees out, sit back into it', isBodyweight:true },
      { id:'bw_lunge', name:'Reverse Lunge', sets:3, reps:'12 each', tip:'Back knee nearly touches floor', isBodyweight:true },
      { id:'bw_glute_bridge', name:'Glute Bridge', sets:4, reps:'15–20', tip:'Squeeze glutes at top, pause 1 sec', isBodyweight:true },
      { id:'bw_sl_rdl', name:'Single-leg RDL', sets:3, reps:'10 each', tip:'Balance challenge + hamstring stretch', isBodyweight:true },
      { id:'bw_wall_sit', name:'Wall Sit', sets:3, reps:'45 sec', tip:'Thighs parallel to floor, back flat', isBodyweight:true }
    ],
    full: [
      { id:'bw_burpee', name:'Burpees', sets:4, reps:'10', tip:'Explosive jump at top — full effort', isBodyweight:true },
      { id:'bw_mtn', name:'Mountain Climbers', sets:3, reps:'20 each', tip:'Hips level, drive knee to chest fast', isBodyweight:true },
      { id:'bw_jump_squat', name:'Jump Squats', sets:3, reps:'12', tip:'Land soft, absorb through hips and knees', isBodyweight:true },
      { id:'bw_pushup_f', name:'Push-ups', sets:3, reps:'15', tip:'Full range every rep', isBodyweight:true },
      { id:'bw_plank_f', name:'Plank', sets:3, reps:'45 sec', tip:'Squeeze everything — glutes, abs, quads', isBodyweight:true }
    ],
    upper: [
      { id:'bw_pushup_u', name:'Push-up Circuit', sets:4, reps:'10 each', tip:'Wide / regular / diamond back to back', isBodyweight:true },
      { id:'bw_pullup_u', name:'Pull-ups', sets:4, reps:'Max reps', tip:'Every rep counts — stop before form breaks', isBodyweight:true },
      { id:'bw_pike_u', name:'Pike Push-up', sets:3, reps:'10–12', tip:'Shoulder press substitute', isBodyweight:true },
      { id:'bw_dip_u', name:'Tricep Dips', sets:3, reps:'12–15', tip:'Lean forward for chest, upright for triceps', isBodyweight:true },
      { id:'bw_curl_towel', name:'Towel Bicep Curl', sets:3, reps:'12–15', tip:'Loop towel around door handle, lean and curl', isBodyweight:true }
    ],
    core: [
      { id:'bw_plank_c', name:'Plank Hold', sets:4, reps:'45–60 sec', tip:'Brace everything — hardest part is breathing', isBodyweight:true },
      { id:'bw_hollow', name:'Hollow Body Hold', sets:3, reps:'30 sec', tip:'Lower back pressed to floor at all times', isBodyweight:true },
      { id:'bw_bicycle', name:'Bicycle Crunches', sets:3, reps:'20 each', tip:'Slow and deliberate beats fast and sloppy', isBodyweight:true },
      { id:'bw_leg_raise', name:'Lying Leg Raise', sets:3, reps:'15', tip:'Lower back stays pressed to floor', isBodyweight:true },
      { id:'bw_bear_crawl', name:'Bear Crawl', sets:3, reps:'20m', tip:'Knees 1 inch off floor — total body burn', isBodyweight:true }
    ]
  }
};

const DEFAULT_SPLITS = {
  3: ['push','pull','full'],
  4: ['push','pull','legs','full'],
  5: ['push','pull','legs','upper','core']
};

const LOCATION_LABELS = {
  fullgym:'Full Gym',
  cables:'Cable Machines',
  freeweights:'Free Weights',
  bodyweight:'Bodyweight'
};

const SPLIT_LABELS = {
  push:'Upper Push',
  pull:'Upper Pull',
  legs:'Lower Body',
  full:'Full Body',
  upper:'Upper Body',
  core:'Core & Cardio'
};
