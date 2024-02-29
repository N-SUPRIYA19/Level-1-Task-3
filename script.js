document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("input");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const display = document.querySelector("input[name=display]");

            if (button.value === "AC") {
                display.value = '';
            } else if (button.value === "DE") {
                display.value = display.value.toString().slice(0, -1);
            } else if (button.value === "=") {
                display.value = eval(display.value);
            } else {
                display.value += button.value;
            }
        });
    });
});
