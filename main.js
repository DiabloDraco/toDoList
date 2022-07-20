var elForm = document.querySelector("#form")
var elTotal = document.querySelector("#total")
var elList = document.querySelector("#list")
var elInput = document.querySelector("#input");
var elClear = document.querySelector("#clear")
var err = document.querySelector("#error")
var arr = []

elForm.addEventListener("submit" , function add(evt) {
    evt.preventDefault();
    var Input = elInput.value.trim();
    elInput.value = null
    if (Input.length > 0) {
        arr.push(Input) 
        elList.innerHTML = null
        Render(arr)
        TotalNum = arr.length
        elTotal.textContent = `${TotalNum}`
    }else {
        err.textContent = "Pls type a something"
    }
})

elClear.addEventListener("click" , function (evt) {
    evt.preventDefault()

    arr  = []
    elTotal.textContent = 0
    elList.textContent = null
    err.textContent = null
})

function Render(array) {
    for (let i = 0; i < array.length; i++) {
        var NewLi = document.createElement("li")
        var li = elList.appendChild(NewLi)
        li.textContent = arr[i]
    }
}