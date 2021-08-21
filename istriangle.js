//in this program user will give the value of the 3 angles and if the sum of the three angles equals 180 then a triangle is formed.
const inputs= document.querySelectorAll(".angle-input");
const isTriangleBtn= document.querySelector("#is-triangle");
const output = document.querySelector("#output");

function calculateSumOfAngles(angle1,angle2,angle3){
 const sumOfAngles = angle1 + angle2 + angle3;
 return sumOfAngles;   
}

function isTriangle(){
  const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value) , Number(inputs[2].value));
  if(sumOfAngles===180){
      output.innerText= "Yay, the angles form a triangle."
  }
  else{
      output.innerText="Oops, the angles don't form a traingle."
  }
}

isTriangleBtn.addEventListener("click", isTriangle);