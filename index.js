let point = document.getElementById("sco1")
let point4 = document.getElementById("sco4")

let p1 = 0
let p2 = 0
let p3 = 0

function plus1() {
    p1 += 1
    point.textContent = p1
    
}

function plus2() {
    p1 += 2
    point.textContent =  p1

}

function plus3() {
    p1 += 3
    point.textContent =  p1

}

function plusA1 () {
    p2 += 1
    point4.textContent = p2
    
}

function plusA2 () {
    p2 += 2
    point4.textContent = p2
    
}

function plusA3 () {
    p2 += 3
    point4.textContent = p2
    
}

function save() {
    point.textContent = p3
    point4.textContent = p3
    p1 = 0
    p2 = 0
    
}













