let rev = document.querySelector(".container");
let ref = document.querySelector(".container").querySelector(".tasklist");

function getdata() {
   
    for (let i = 0; i < localStorage.length; i++) {
        
        let key = localStorage.key(i);
        let value = localStorage.getItem(key); 
        if(value == null)
            continue;
        ref.insertAdjacentHTML("beforeend", value); 
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
function inserttask(event){
    event.preventDefault();

     let i = localStorage.length;
     let a = document.getElementById("Enternotes").value;
     localStorage.setItem(`task${i}`, `<div class = "task" id = "task${i}"><p>${a}<\p> <button class = "delete" onclick="taskdeletor(${i})" ><img src = "delete_icon.jpg" class = "image"></button></div>`)
     ref.insertAdjacentHTML("beforeend",`${localStorage.getItem(`task${i}`)}`)

 }
 const form = document.getElementById("submitform");
 form.addEventListener('submit', inserttask);


 rev.querySelector(".clear").addEventListener("click",()=>{
    localStorage.clear();
    ref.innerHTML = "";
 })
