// grab eleents

let monitor = document.getElementById("monitor");
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiplication = document.getElementById("multiple");
let remainder = document.getElementById("division");
 
let result = document.getElementById("result");


function monitorTextContent(value) {
    console.log(monitor.textContent)
    monitor.textContent += value;
}

result.addEventListener("click", function() {
    monitor.textContent = eval(monitor.textContent)
})

zero.addEventListener('click', function() {
    monitorTextContent(0)
})

one.addEventListener('click', function() {
    monitorTextContent(1)
})
two.addEventListener('click', function() {
    monitorTextContent(2)
})

three.addEventListener('click', function() {
    monitorTextContent(3)
})

four.addEventListener('click', function() {
    monitorTextContent(4)
})

five.addEventListener('click', function() {
    monitorTextContent(5)
})

six.addEventListener('click', function() {
    monitorTextContent(6)
})

seven.addEventListener('click', function() {
    monitorTextContent(7)
})

eight.addEventListener('click', function() {
    monitorTextContent(8)
})

nine.addEventListener('click', function() {
    monitorTextContent(9)
})

plus.addEventListener('click', function() {
    monitorTextContent('+')
})

minus.addEventListener('click', function() {
    monitorTextContent('-')
})

multiplication.addEventListener('click', function() {
    monitorTextContent('*')
})

remainder.addEventListener('click', function() {
    monitorTextContent('/')
})
