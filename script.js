let rev = document.querySelector(".container");
let ref = document.querySelector(".container").querySelector(".tasklist");

function getdata() {
    // Iterate through localStorage keys
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i); // Get the key at index i
        let value = localStorage.getItem(key); // Get the value for the key
        ref.insertAdjacentHTML("beforeend", value); // Insert the value into the DOM
    }
}


if(localStorage.length == 0)
{
    ref.insertAdjacentHTML("beforeend","");
}
else
{
   getdata();
}

function taskdeletor(x) {
   localStorage.removeItem(`task${x}`);
   ref.querySelector(`#task${x}`).remove();
}
function inserttask(){
     let i = localStorage.length;
     let a = prompt("Enter the task");
     localStorage.setItem(`task${i}`, `<div class = "task" id = "task${i}"><p>${a}<\p> <button class = "delete" onclick="taskdeletor(${i})" >delete</button></div>`)
     ref.insertAdjacentHTML("beforeend",`${localStorage.getItem(`task${i}`)}`)

 }

 rev.querySelector(".Add").addEventListener("click",inserttask);


 rev.querySelector(".clear").addEventListener("click",()=>{
    localStorage.clear();
    ref.innerHTML = "";
 })
