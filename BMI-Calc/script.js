function Calc(){
    // Get value from User..
    const Height = document.getElementById('input').value  
    const weight = document.getElementById('input1').value

    // 2time squre in user Heigth..
    let cm_Sqr = Height*Height;

    // Convert to Whole Number..
    let BMI = Math.floor(weight/cm_Sqr*10000);

    // Give a Condition to Check Body Health..
    if(Height.length == "" || weight.length == ""){
        alert("Enter your Details in the input box")
    }
    else{

    if(BMI<18.5){
        document.getElementById('span').innerText = `Your Body Healthy Range is ${BMI}\n Your Body Health is "UNDERWEIGHT" `
    }
    else if(BMI >= 18.5 && BMI < 25){
        document.getElementById('span').innerText = `Your Body Healthy Range is ${BMI}\nYour Body Health is "GOOD" `
    }
    else if(BMI >= 25 && BMI<30){
        document.getElementById('span').innerText = `Your Body Healthy Range is ${BMI}\nYour Body Health is "OVER WEIGHT" `
    }
    else{
        document.getElementById('span').innerText = `Your Body Healthy Range is ${BMI}\nYour Body Health is "Energy lost Eat well"`
    }
}
}
