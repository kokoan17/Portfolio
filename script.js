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

btn17.addEventListener("click", function() {
    isTrueAge(this.textContent);
});

btn18.addEventListener("click", function() {
    isTrueAge(this.textContent);
});

btn19.addEventListener("click", function() {
    isTrueAge(this.textContent);
});

function isTrueAge(age) {
    if (age == 18) {
        alert("Right!");
        result.textContent = "Yes";
    } else {
        alert("Try again");
        result.textContent = "NO";
    };
};