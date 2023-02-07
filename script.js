let screen = document.getElementById('screen');
let screenValue = ' ';
btn = document.querySelectorAll('button');

const audio = new Audio ("Assets/button.ogg")
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

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
        else if (btntext == '←') {
            let str = screenValue.toString();
            screenValue = str.substring(0, str.length - 1);
            
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
