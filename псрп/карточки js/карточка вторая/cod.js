document.addEventListener("readystatechange", function() {
    console.log("Статус загрузки документа: " + document.readyState);
});
setTimeout(function() {
    console.log("Статус загрузки документа: " + document.readyState);
}, 5000);


let a = document.getElementById("hide_0");
a.addEventListener("click", function() { document.getElementById("hide_0").style.display = "none"; });
if (navigator.cookieEnabled) {
    console.log('Cookies включены в браузере пользователя');
} else {
    console.log('Cookies выключены в браузере пользователя');
}