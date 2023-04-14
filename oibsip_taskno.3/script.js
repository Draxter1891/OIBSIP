const input = document.getElementById("input-box");
const list_content = document.getElementById("list-content");

function addtask(){
    if(input.value === ''){
        alert("You must enter any task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list_content.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }

    input.value = "";
    save();
}

list_content.addEventListener("click", function(para) {
    if(para.target.tagName === "LI"){
        para.target.classList.toggle("checked");
        // toggle will remove the checked if it is not present there
        save();
    }
    else if(para.target.tagName === "SPAN"){
        para.target.parentElement.remove();
        save();
    }
})

function save(){
    localStorage.setItem("data",list_content.innerHTML);
}
function showdata(){
    list_content.innerHTML = localStorage.getItem("data");
}

showdata();