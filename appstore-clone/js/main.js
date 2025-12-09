// this is main js

const searchInput = document.getElementById("searchInput");
const cancelBtn = document.getElementById("cancelBtn");

searchInput.addEventListener("input",(event) =>{
    if(event.target.value.length > 0){
       cancelBtn.classList.add("visible"); 
    }else{
        cancelBtn.classList.remove("visible");
    }
})

function handleCancelButton(){
    searchInput.value = "";
    cancelBtn.classList.remove("visible");
}