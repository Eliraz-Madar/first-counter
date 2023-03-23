// 

// intialize the count as 0
let count = 0 
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let clear = 0
// listen for clicks on the increment button
function increment() {
    // increment the count variable when the button is clicked
    count = count + 1
    console.log(count)
    // change the count-el in the HTML to reflect the new count
    countEl.innerText = count
}

function save(){
    let str = count + " - "
    clear += 1
    if(clear >= 3){
        saveEl.textContent = "Previous counts :" + str
        clear = 0
    }
    else {
        saveEl.textContent += str
    }
    console.log(clear)
    countEl.innerText = 0
    count = 0
}






