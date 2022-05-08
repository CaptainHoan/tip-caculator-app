app.addEventListener("click", () => {
    if (number.value == "0") {
        document.querySelector(".warning").classList.add("warning_active");
        numberWrap.classList.add("border_active");
    }
    else {
        document.querySelector(".warning").classList.remove("warning_active");
        numberWrap.classList.remove("border_active");
        return true;
    }
})


custom.addEventListener("keypress", (event) => {
            if(event.key === "Enter") {
                let value = custom.value;
                if(value == "0") {
                    tipPrice.innerHTML = "$0.00";
                    tipTotal.innerHTML = "$" + ((x / y).toFixed(2))
                }
                else {
                    tipPrice.innerHTML = "$" + ((x * parseFloat(value)) / (100 * y)).toFixed(2);
                    tipTotal.innerHTML = "$" + (((x / y) + parseFloat(z)).toFixed(2));
                }
                event.preventDefault();
            }
        })