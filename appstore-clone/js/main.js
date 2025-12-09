// this is main js

const searchInput = document.getElementById("searchInput");
const cancelBtn = document.getElementById("cancelBtn");
const sidebarDropdownMenu = document.getElementById("sidebarDropdownMenu");
const navigationSelectedMenu = document.getElementById("navigationSelectedMenu");

// search button and close button visibility
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

// sidebar toggle menu change 
function sidebarToggle(){
    sidebarDropdownMenu.classList.toggle("visible");
}
sidebarDropdownMenu.addEventListener("click", (e)=>{
        navigationSelectedMenu.innerHTML = e.target.outerText;
        sidebarDropdownMenu.classList.remove("visible");
})