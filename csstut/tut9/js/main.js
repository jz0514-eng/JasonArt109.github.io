

//seletec html element
const header = document.querySelector("#header");
const changeHeaderButton = document.querySelector("#change-header-button");
const changeThemeButton = document.querySelector("#change-theme-button");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");

//change button click

changeHeaderButton.addEventListener("click",() => {
 header.innerHTML = "POW!!!"   
    
    
})


function changeButtonText(){
if (document.body.classList.contains("dark")){
changeThemeButton.textContent = "switch to light theme";
} else {

changeThemeButton.textContent = "switch to dark theme";


}


}



changeThemeButton.addEventListener("click",() => {
document.body.classList.toggle("dark");
changeButtonText()


    })



    img1.addEventListener("click",() => {
img2.classList.remove("hidden")


    })

        img2.addEventListener("click",() => {
img3.classList.remove("hidden")


    })