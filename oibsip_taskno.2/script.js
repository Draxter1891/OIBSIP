const bgimage = document.getElementById("bg");
const name1 = document.getElementsByClassName("name");
window.addEventListener("scroll",() =>{
    updatebg();
    updatename();
});

function updatebg(){
    bgimage.style.opacity = 1 - window.pageYOffset / 800;
    bgimage.style.height = 100 - window.pageYOffset/12 + "%";
    bgimage.style.width = 100 - window.pageYOffset/12 + "%";
};
function updatename(){
    name1.style.fontSize=100 - window.pageYOffset/12 + "%";
}