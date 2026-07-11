const screen = document.querySelector("#screen")
const btns = document.querySelectorAll(
    ".grid button:not(.itemBMICalculation):not(.itemSolve):not(.itemClear)"
    )
const bmiCalculation = document.querySelector(".itemBMICalculation")

const clear = document.querySelector(".itemClear")

const solve = document.querySelector(".itemSolve")

const close = document.querySelector("#closeWindow")

const calculate = document.querySelector("#calculateBMI")

const menuToggle = document.getElementById("menuToggle")

const menuContent = document.getElementById("content")

const content = document.getElementById("content")

const dialog = document.getElementById("modal");
    const weight = document.querySelector("#weight")
    const height = document.querySelector("#height")

//function to register button clicks and log them to the screen
function onButtonClick(button){
    screen.textContent += String(button.innerText)
}

//function to accept a math operation string and return the result
function evaluateMathString(str) {
    let stringNum = str.replace(/[\+\-\*\/]/g, " || ")
    let stringOp = str.replace(/[1234567890]/g, " ")
    let unStringOpArr = stringOp.trim().split(" ")
    let stringOpArr = unStringOpArr.filter(item => item !== "");
    let stringNumArr = stringNum.split(" ")
    let stringLength = stringNumArr[stringNumArr.length - 1]
    for(let i = 0; i < stringNumArr.length; i++){
    if(stringNumArr[i].length == 0){
         return "Syntax Error"
    }}
    for (let i = 0; i < stringOpArr.length; i++){
        stringNumArr.splice(stringNumArr.indexOf("||"), 1,stringOpArr[i])
    }

   
        do{if (stringNumArr.indexOf("*") != -1){
            let a = stringNumArr[stringNumArr.indexOf("*")-1]
            let b = stringNumArr[stringNumArr.indexOf("*")+1]
            let product = a * b
            stringNumArr.splice(stringNumArr.indexOf("*")-1, 3,  product)
        }}
        while(stringNumArr.indexOf("*") != -1)

        do{if (stringNumArr.indexOf("/") != -1){
            let a = stringNumArr[stringNumArr.indexOf("/")-1]
            let b = stringNumArr[stringNumArr.indexOf("/")+1]
            let division = a / b
            stringNumArr.splice(stringNumArr.indexOf("/")-1, 3,  division)
        }}
        while(stringNumArr.indexOf("/") != -1)

        do{if (stringNumArr.indexOf("+") != -1){
            let a = stringNumArr[stringNumArr.indexOf("+")-1]
            let b = stringNumArr[stringNumArr.indexOf("+")+1]
            let sum = Number(a) + Number(b)
            stringNumArr.splice(stringNumArr.indexOf("+")-1, 3,  sum)
        }}
        while(stringNumArr.indexOf("+") != -1)

        do{if (stringNumArr.indexOf("-") != -1){
            let a = stringNumArr[stringNumArr.indexOf("-")-1]
            let b = stringNumArr[stringNumArr.indexOf("-")+1]
            let difference = Number(a) - Number(b)
            stringNumArr.splice(stringNumArr.indexOf("-")-1, 3,  difference)
        }}
        while(stringNumArr.indexOf("-") != -1)
    
    if (stringNumArr.length == 1){
        return stringNumArr[0]}
}


function calculations(){
    let display = screen.innerText
    let display1;
    let display2;
    if(display.includes("×")){
        display1 = display.replaceAll("×", "*")
    }else{
        display1 = display
    }
    if(display1.includes("÷")){
        display2 = display1.replaceAll("÷", "/")
    }else{
        display2 = display1
    }
    screen.innerText = evaluateMathString(display2)
    console.log(evaluateMathString(display2))
}

function bmiCalculations (event){
    event.preventDefault(event)
    dialog.showModal();
}

function bmiSolutionDisplay(event){
    event.preventDefault()
    if(weight.value == "" && height.value == ""){
        screen.innerText = ""
        dialog.close();
        return

    }
    const bmi = Number(weight.value)/(Number(height.value) * Number(height.value))
    
    if (Number.isNaN(bmi)){
        screen.innerText = "Syntax Error"
        dialog.close();
        return
    }
    screen.innerText = bmi.toFixed(2)
}

function clearScreen (){
    screen.innerText = ""
}


btns.forEach((btn) => btn.addEventListener("click", (btn) => {
    if(screen.innerText == "Syntax Error" || screen.innerText == "Infinity" || screen.innerText == "NaN"){
        screen.innerText = ""
    }
    onButtonClick(btn.target)
}))

//for (const [index, btn] of btns.entries()) {
//  console.log(index, btn);
//}
solve.addEventListener("click", () => {
    if(screen.innerText == "Syntax Error" || screen.innerText == "Infinity" || screen.innerText == "" || screen.innerText == "NaN"){
        return screen.innerText = ""
    }
    calculations()})

bmiCalculation.addEventListener("click", (event) => bmiCalculations(event))

clear.addEventListener("click", () => clearScreen())

calculate.addEventListener("click", (event) => {
    bmiSolutionDisplay(event)
    dialog.close();
    weight.value = ""
    height.value = ""
})

close.addEventListener("click", () => {
    dialog.close()
    weight.value = ""
    height.value = ""
})

window.addEventListener("click", () => {content.style.display = "none"})

menuToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    content.style.display = content.style.display == "block" ? "none" : "block";
})

