const notescontainer=document.querySelector(".notes-container")
const btn=document.querySelector(".btn")
const notes=document.querySelectorAll(".input-box")


function show(){
    notescontainer.innerHTML=localStorage.getItem("notes")
}
show()

function update(){
    localStorage.setItem("notes",notescontainer.innerHTML);
}

btn.addEventListener("click",()=>{
    let inputbox=document.createElement("p");
    let img=document.createElement("img");
    inputbox.className="input-box";
    inputbox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    notescontainer.appendChild(inputbox).appendChild(img);
})
notescontainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove()
        update()
    }
    else if(e.target.tagName==="P"){
        notes.document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                update()
            }
        })
    }
})
document.addEventListener("keydown",event=>{
    if(event.key=="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})