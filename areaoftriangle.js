const baseHeight = document.querySelectorAll(".base-height");
const areaBtn = document.querySelector("#calculate-area");
const output = document.querySelector("#output");

function calculateArea(){
    const areaOfTriangle= 1/2 * Number(baseHeight[0].value) * Number(baseHeight[1].value);
    output.innerText = "Area of Triangle is " + areaOfTriangle + "cm²";
}

areaBtn.addEventListener("click", calculateArea);