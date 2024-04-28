document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('caloric-needs-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const age = parseInt(form.age.value);
        const height = parseInt(form.height.value);
        const weight = parseInt(form.weight.value);
        const gender = form.gender.value;
        const activityLevel = form['activity-level'].value;

        // Calculate BMR (Basal Metabolic Rate)
        let bmr;
        if (gender === 'male') {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }

        // Adjust BMR based on activity level
        let activityFactor;
        switch (activityLevel) {
            case 'sedentary':
                activityFactor = 1.2;
                break;
            case 'lightly-active':
                activityFactor = 1.375;
                break;
            case 'moderately-active':
                activityFactor = 1.55;
                break;
            case 'very-active':
                activityFactor = 1.725;
                break;
            case 'super-active':
                activityFactor = 1.9;
                break;
            default:
                activityFactor = 1.2; // Default to sedentary
        }

        // Calculate total caloric needs
        const caloricNeeds = Math.round(bmr * activityFactor);

        // Display result
        resultDiv.innerHTML = `<p>Your estimated daily caloric needs are: <strong>${caloricNeeds}</strong> calories.</p>`;
    });
});
