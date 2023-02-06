let screen = document.getElementById('screen');
let screenValue = ' ';
btn = document.querySelectorAll('button');
for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == 'X') {
            btntext = "*";
            screenValue += btntext
            screen.value = screenValue;
        }
        else if (btntext == 'C') {
            screenValue = " ";
            screen.value = screenValue;
        }
        else if (btntext == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += btntext
            screen.value = screenValue;
        }
    })
}