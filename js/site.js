
//get the values from the page
//controler function or starts
function getValues(){
//get values from the page
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;
 

  //need to validat our intput
///parse into ingtegers
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

 if (Number.isInteger(startValue) && Number.isInteger(endValue)){
    ///call generateNumbers
    let numbers = generateNumbers(startValue, endValue);
    //call displayNumbers
 displayNumbers(numbers);

 } else {
    alert("You must enter integers");
 }
}

   



//generate numbers from startValue to endValue
//Logic functions

function generateNumbers(sValue, eValue){
    let numbers= [];

    //we want to get all numbers from start to end
    for (let index = sValue; index <= eValue; index++){
        numbers.push(index);
    }


    return numbers;

}

//display the numbers and mark even bold
//display or view funtion

function displayNumbers(numbers){

    let templateRows ="";

    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];
        templateRows += `<tr><td>${number}</td></tr>`;}
        
    document.getElementById("results").innerHTML = templateRows

}