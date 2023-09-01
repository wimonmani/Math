var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var mark = document.getElementById('mark');
var answer = document.getElementById('answer');
var result = document.getElementById('result');
var scores = document.getElementById('score');

var num1, num2, sum, score = 0, point = 0;
scores.innerHTML = score + "/" + point;

function random() {
    num1 = Math.floor(Math.random() * 11);
    num2 = Math.floor(Math.random() * 11);
    number1.value = num1;
    number2.value = num2;
    answer.value = '';
}

function start() {
    point = 0;
    score = 0;
    score.innerHTML = score + "/" + point;
    random();
}

function selectmark(value) {
    mark.innerHTML = value;
}

function markcheck() {
    if (mark.innerHTML == "+") {
        sum = num1 + num2;
    } else if (mark.innerHTML == "-") {
        sum = num1 - num2;
    } else if (mark.innerHTML == "*") {
        sum = num1 * num2;
    } else if (mark.innerHTML == "÷") {
        sum = num1 / num2;
    }
}

function response() {
    markcheck();
    console.log('sum : ' + sum);
    if (sum == answer.value) {
        result.innerHTML = 'ถูกต้อง';
        result.style.color = 'green';
        score += 1;
    } else {
        result.innerHTML = 'ไม่ถูกต้อง!';
        result.style.color = 'red';
    }
    point += 1;
    scores.innerHTML = score + "/" + point;
    random();
}

random();
