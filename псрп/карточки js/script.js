function names() {
    let sI = "Строк";
    let s2 = "Учусь в политехническом колледже";

    console.log(sI.length);

    let s3 = sI + ", " + s2;
    console.log(s3);

    let s4 = s2.toUpperCase();
    console.log(s4);
}
window.onload = names;
let fullUrl = window.location.href;

// Выводим его в консоль браузера
console.log(fullUrl);

function lol() {
    function calculate(a, b, c, x) {
        if (a < 0 && c != 0) {
            return a * x * x + b * x + c;
        } else if (a > 0 && c == 0) {
            return -a / (x - c);
        } else {
            return a * (r + c);
        }
    }
    console.log("Результат расчета: " + calculate(-5, 2, 3, 4));
}