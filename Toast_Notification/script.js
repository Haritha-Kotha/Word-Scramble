const buttons=document.querySelectorAll(".btn")
const notifications=document.querySelector(".notifications")
const toastDetails={
    success:{
        icon:"check.png",
        text:"Success : Successfull Toast"
    },
    error:{
        icon:"cross.png",
        text:"Error : Error Toast"
    },
    info:{
        icon:"info.png",
        text:"Info : Information Toast"
    },
    warning:{
        icon:"attention.png",
        text:"Warning : Warning Toast"
    }
}
function timeUp(newToast){
    newToast.classList.add("hide")
    setTimeout(()=>newToast.remove(),500)
}
buttons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        const {icon,text}=toastDetails[btn.id]
        const newToast=document.createElement("div")
        newToast.className=`mark ${btn.id}`
        newToast.innerHTML=
        `<div class="toast">
            <img src="${icon}" class="${btn.id}-img">
            <span>${text}</span>
         </div>
    <div class="close" onclick="timeUp(this.parentElement)">
        <img src="images/close.png.png" class="close-img">
    </div>`
    notifications.appendChild(newToast)
    setTimeout(()=>timeUp(newToast),5000)
    })

})