let number = document.querySelector(".number_input");
let numberWrap = document.querySelector(".number_wrap");
let app = document.querySelector(".app");
let bill = document.querySelector(".bill_input");
let tipCard = document.querySelectorAll(".tip_card");
let custom = document.getElementById("tip_input");
let tipPrice = document.getElementById("tip_price");
let tipTotal = document.getElementById("tip_total");
let reset = document.querySelector(".reset_amount");
let tipWrap = document.querySelector(".tip_wrap");
let caculator = document.querySelector(".caculator");
let billWrap = document.querySelector(".bill_input_wrap");

//event to prevent number of customer input = 0
caculator.addEventListener("click", () => {
    if (number.value == "0") {
        document.querySelector(".warning").classList.add("warning_active");
        numberWrap.classList.add("border_active");
        tipPrice.innerHTML = "$0.00";
        tipTotal.innerHTML = "$0.00";
    }
    else {
        document.querySelector(".warning").classList.remove("warning_active");
        numberWrap.classList.remove("border_active");
        return true;
    } 
})

//event to caculate price with each amount of tip available
for(let i = 0; i < tipCard.length; i++) {

    tipCard[i].addEventListener("click", () => {
        for(let i = 0; i < tipCard.length; i++) {
            tipCard[i].classList.contains("selected");
            tipCard[i].classList.remove("selected");
        }
        tipCard[i].classList.add("selected");

        let x = bill.value;
        let y = number.value;
        tipPrice.innerHTML = "$" + ((x * parseFloat(tipCard[i].innerHTML)) / (100 * y)).toFixed(2);

        let z = tipPrice.innerHTML.slice(1);
        tipTotal.innerHTML = "$" + (((x / y) + parseFloat(z)).toFixed(2));

        reset.classList.add("reset_active");

        custom.value = "";

        if((x == "") || (y == "")) {
            tipPrice.innerHTML = "$0.00";
            tipTotal.innerHTML = "$0.00";
        }
    })
}

//event to remove style of available tips when input custom tip
custom.addEventListener("click", () => {
    for(let i = 0; i < tipCard.length; i++) {
        tipCard[i].classList.contains("selected");
        tipCard[i].classList.remove("selected");
    }
})

//event to caculate price with custom tip input
custom.addEventListener("keypress", (event) => {
    if(event.key === "Enter") {
        let value = custom.value;
        let x = bill.value;
        let y = number.value;

        if(value == "0") {
            tipPrice.innerHTML = "$0.00";
            tipTotal.innerHTML = "$" + ((x / y).toFixed(2))
        }
        else {
            tipPrice.innerHTML = "$" + ((x * parseFloat(value)) / (100 * y)).toFixed(2);
            let z = tipPrice.innerHTML.slice(1);
            tipTotal.innerHTML = "$" + (((x / y) + parseFloat(z)).toFixed(2));
        }
        event.preventDefault();
        reset.classList.add("reset_active");

        if((x == "") || (y == "")) {
            tipPrice.innerHTML = "$0.00";
            tipTotal.innerHTML = "$0.00"
        }
    }
})

//click reset button to return to origional state with no input
reset.addEventListener("click", () => {
    bill.value = "";
    number.value = "";
    custom.value = "";
    tipPrice.innerHTML = "$0.00";
    tipTotal.innerHTML = "$0.00";

    for(let i = 0; i < tipCard.length; i++) {
        tipCard[i].classList.contains("selected");
        tipCard[i].classList.remove("selected");
    }
})


