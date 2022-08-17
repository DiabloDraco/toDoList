let elForm = document.querySelector("#form")
let elTotal = document.querySelector("#total")
let elList = document.querySelector("#list")
let elInput = document.querySelector("#input");
let elClear = document.querySelector("#clear")
let err = document.querySelector("#error")
let arr 
let localArray = JSON.parse(localStorage.getItem("arr"))

if (localArray) {
    arr = localArray
    Render(arr)
    elTotal.textContent = arr.length
}else{
    arr = []
}

elForm.addEventListener("submit" , function add(evt) {
    evt.preventDefault();
    let Input = elInput.value.trim();
    elInput.value = null
    if (Input.length > 0) {
        arr.push(Input)
        localStorage.setItem("arr" , JSON.stringify(arr))
        elList.innerHTML = null
        Render(arr)
        TotalNum = arr.length
        elTotal.textContent = `${TotalNum}`
    }else {
        err.textContent = "Pls type something"
    }
})
// Copyrighted by Mirmuhsin
elClear.addEventListener("click" , function (evt) {
    evt.preventDefault()

    arr  = []
    localStorage.setItem("arr" , JSON.stringify(arr))
    elTotal.textContent = 0
    elList.textContent = null
    err.textContent = null
    elInput.value = null
})
// Copyrighted by Mirmuhsin
function Render(array) {
    for (let i = 0; i < array.length; i++) {
        let newLi = document.createElement("li")
        let newP = document.createElement("p")
        let newBtn = document.createElement("button")
        newLi.appendChild(newP)
        newLi.appendChild(newBtn)
        newLi.setAttribute("class" , `licha${i}`)
        newBtn.dataset.commentId = i
        newP.textContent = arr[i]
        newP.classList.add(`pcha${i}`)
        newP.classList.add(`pii`)
        newBtn.textContent = "Delete"
        newBtn.classList.add("button")
        elList.appendChild(newLi)
    }
}



elList.addEventListener("click" , function (evt) {
    let current =  evt.target.dataset.commentId 
    if (current) {
        let licha = document.querySelector(`.licha${current}`)
        let pcha = document.querySelector(`.pcha${current}`)
        licha.remove()
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == `${pcha.textContent}`) {
                let index = arr.indexOf(arr[i])
                arr.splice(index , 1)
                localStorage.setItem("arr" , JSON.stringify(arr))
                elTotal.textContent = arr.length
            }
        }
    }
})

