function calculateCalories() {
    var gender = document.getElementById("gender").value;
    var age = parseInt(document.getElementById("age").value);
    var height = parseInt(document.getElementById("height").value);
    var duration = parseInt(document.getElementById("duration").value);
    var heartRate = parseInt(document.getElementById("heart-rate").value);
    var caloriesBurned;
  
    if (gender === "male") {
      caloriesBurned = ((-55.0969 + (0.6309 * heartRate) + (0.1988 * height) + (0.2017 * age)) / 4.184) * duration / 60;
    } else if (gender === "female") {
      caloriesBurned = ((-20.4022 + (0.4472 * heartRate) - (0.1263 * height) + (0.074 * age)) / 4.184) * duration / 60;
    } else {
      caloriesBurned = 0;
    }
  
    document.getElementById("result").innerText = "Calories burned: " + caloriesBurned.toFixed(2) + " kcal";
  }
  
