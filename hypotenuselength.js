const sides= document.querySelectorAll(".side-input");
const hypotenuseBtn=document.querySelector("#hypotenuse-btn");
const output=document.querySelector("#output");

function calculateSumOfSquares(a,b){
  const sumOfSquares= a*a + b*b;
  return sumOfSquares;
}

function calculateHypotenuse(){
    const sumOfSquares= calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
    lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    output.innerText="The length of hypotenuse is: " + lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);