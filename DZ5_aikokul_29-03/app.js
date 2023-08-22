let count = 0;

function increment() {
    count++;
    console.log(count);
}

let num1 = prompt('первое число');
num1 = Number(num1);

let num2 = prompt('второе число');
num2 = Number(num2);


let operator = prompt('выберите действие(/,+,*,-)');


switch (operator) {
    case '+':
        alert (num1 + num2);
        break;
    case '-':
        alert (num1 - num2);
        break;
    case '/':
        alert (num1 / num2);
        break;
    case '*':
        alert (num1 * num2);
        break;

    default:
        alert("Такого действия не существует");
}

var button = document.createElement('button');
button.textContent = 'Нажми меня';
document.body.appendChild(button);

button.addEventListener('click', function() {
var input = prompt('Введите текст:');

var resultDiv = document.getElementById('result');
resultDiv.textContent += input + ' ';
});