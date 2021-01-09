const buttonNum = document.getElementsByName("buttonNum");
const buttonOp = document.getElementsByName("buttonOp")
const buttonDelete = document.getElementById("buttonDelete");
const buttonResult = document.getElementById("buttonResult");
let screen = document.getElementById("screenInput");


let op1 = "";
let op2 = "";
let operation = undefined;


buttonNum.forEach(function(button){
    button.addEventListener("click", function(){
        addNumber(button.innerText);
    })
})

buttonOp.forEach(function(button){
    button.addEventListener("click", function(){
        operator(button.innerText);
        refreshDisplay()
    })
})

buttonResult.addEventListener("click", function(){
    calculate();
    refreshDisplay();
})

buttonDelete.addEventListener("click", function(){
    clear();
    refreshDisplay();
});

function addNumber(num){
    op1 = op1.toString() + num.toString();       
    refreshDisplay();
}

function refreshDisplay(){
    screen.value=op1;
}

function clear(){
    op1="";
    op2="";
    operation=undefined;   
}

function operator(op){
    if (op1 === "") return;
    if (op2 !== ""){
        calculate();

    }
    operation = op.toString();
    op2 = op1;
    op1 = "";
}

function calculate(){
    let calc;
    let calc1 = parseFloat(op1);
    let calc2 = parseFloat(op2);
    if (isNaN(1) || isNaN(2)) {
        return;
    }
    switch(operation){
        case "+":
            calc = calc2 + calc1;
            break
        case "-":
            calc = calc2 - calc1;
            break
        case "x":
            calc = calc2 * calc1;
            break
        case "/":
            calc = calc2 / calc1;
            break
        default:
            return;
    }
    operation=undefined;
    op1=calc;
    op2="";
    refreshDisplay();
}