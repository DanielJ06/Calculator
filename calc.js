const screen = document.querySelector("#screen")
const btnElement = document.querySelectorAll(".num")
const cls = document.querySelector("#cls")

cls.addEventListener("click", (e)=>{
    e.preventDefault()
    screen.value=''
})

function addNum(num){
    screen.value += num
}

function calc(){
    screen.value = eval(screen.value)
}