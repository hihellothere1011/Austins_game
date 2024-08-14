const button = document.getElementById("PLAYbutton");

const color = [
    {name: "red", value: '#FF6B6B'},
    {name: "blue", value: '#4abbf8'},
    {name: "green", value: '#4fbd2d'},
    {name: "yellow", value:"c6b306"}
];

function changeColor() {
    let random = color[Math.floor(Math.random()*5)];
    if (random.value === document.body.style.backgroundColor) {
        random = color[Math.floor(Math.random()*5)]
    }
    document.body.style.backgroundColor = random.value;
};

button.addEventListener("click", changeColor);

const rick = document.getElementById("secret")
const rickimg = document.getElementById("rick-roll")
const ricktext = document.getElementById("rick-text")

rickimg.style.display = "none"
ricktext.style.display = "none"

function getrolled() {
    if (rickimg.style.display === "none" || ricktext.style.display === "none") {
        ricktext.style.display = "block"
        ricktext.style.display = "flex"
        rickimg.style.display = "block"
        rickimg.style.display = "flex"
    } else {
        rickimg.style.display = "none"
        ricktext.style.display = "none"
    }
}
rick.addEventListener("click", getrolled)