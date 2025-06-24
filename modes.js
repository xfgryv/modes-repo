// let a = document.querySelector("a");
// let div = document.querySelector("div");
// let body = document.querySelector("body");

// a.addEventListener("click", function (e){
//     a.innerText = "Light Mode!";
//     a.style.color = "black";
//     a.backgroundColor = "white";
//     body.style.backgroundColor = '#243447';
//     isDark = false;
// });
let a = document.querySelector("a");
let div = document.querySelector("div");
let body = document.querySelector("body");
let isDark = true;

a.addEventListener("click", function (e) {
    if (isDark == true) {
        a.innerText = "Light Mode!";
        a.style.color = "black";
        a.style.backgroundColor = "white";
        body.style.backgroundColor = '#243447';
        isDark = false;
        console.log("dark mode");
    } else {
        a.innerText = "Dark Mode!";
        a.style.color = "black";
        a.style.backgroundColor = "white";
        body.style.backgroundColor = 'white';
        isDark = true;
        console.log("light mode");
    }
});