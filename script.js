const links = document.querySelectorAll(".header-main__navbar>a");

for (let i = 0; i < links.length; i++) {
    links[i].onclick = function() {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    };
};

const btn17 = document.querySelector(".seventeen>button");
const btn18 = document.querySelector(".eighteen>button");
const btn19 = document.querySelector(".nineteen>button");
const result = document.querySelector(".result");

btn17.onclick = function() {
    alert("Try again");
    result.textContent = "NO"
}

btn18.onclick = function() {
    alert("Right!");
    result.textContent = "YES"
}

btn19.onclick = function() {
    alert("Try again");
    result.textContent = "NO"
}