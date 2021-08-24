var items = document.querySelectorAll('.item');
var container = document.querySelectorAll('.container2');
var divcon = document.getElementById('div-container')
var addbtn = document.getElementById('add');
var generate = document.getElementById('Generate');
const rembtn = document.getElementById('remove');

function RandomColorgen() {
    var characters = "0123456789ABCDEF"
    var color = '#'
    for(let i = 0; i<6; i++){
        color += characters[Math.floor(Math.random() * 16)];
    } 
return color;
}

//adding the div element
addbtn.addEventListener("click",addgrid);
function addgrid(){
     const newDiv = document.createElement("div");
    // newDiv.classList.add('item');
    // divcon.appendChild(newDiv);
      newDiv.innerHTML = RandomColorgen();
    // console.log(newDiv.innerHTML);

//saving in localStorage
let theinput = newDiv.innerHTML;
let getstorage = localStorage.getItem("Tile Colors");
if(getstorage == null){
    listArr = [];
}
else{
    listArr = JSON.parse(getstorage);
}
listArr.push(theinput);
localStorage.setItem("Tile Colors",JSON.stringify(listArr));
displaytask();

}


//displaying after refresh
function displaytask(){
    let getstorage = localStorage.getItem("Tile Colors");
    if(getstorage == null){
        listArr = [];
    }
    else{
        listArr = JSON.parse(getstorage);
    }
    
    let newbranch = '';
    listArr.forEach((element, index) => {
        newbranch += `<div  class = "item" style="background-color: ${element};">${element}</div>`;

    });
    divcon.innerHTML = newbranch;
    //newDiv.innerHTML = "";
    
}


//removing the div element
rembtn.addEventListener('click',removegrid);
function removegrid(index){

    //deleting my tile color
    let getstorage = localStorage.getItem("Tile Colors");
    listArr = JSON.parse(getstorage);
    listArr.splice(index, 1);
    localStorage.setItem("Tile Colors",JSON.stringify(listArr));
    displaytask();

};

displaytask();
