let images = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
]

let num = 0;

function forwImg() {
let slider = document.getElementById('slider');
num++

if(num >= images.length) {
    num = 0;
}
slider.src = images[num];

}
function backImg() {
    let slider = document.getElementById('slider')
    num--

    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}


let posX = 0;
let posY = 0;

let moveLeft = false;
let moveUp = false;
 let circle = document.getElementById('circle');
//  setInterval(move, 20);
//  let bounceEaseOut = makeEaseOut(move);

 function move () {
     switch(posX) {
         case 450 :
         moveLeft = true;
         break;
         case 0 :
             moveLeft = false;
     }
     switch(posY) {
         case 250 :
             moveUp = true;
             break;
             case 0 :
                 moveUp = false;
                 break;
     }
     moveLeft ? posX -= 3 : posX += 3;
     moveUp ? posY -= 1 : posY += 1;

     circle.style.left = posX + 'px';
     circle.style.top = posY + 'px';
 }

 let addText = document.getElementById('inpTask');
 let buttonTask = document.getElementById('btnTask');
 let newTask = document.getElementById('ulTask');
 
 buttonTask.addEventListener('click',()=> {
     if (addText === '') 
     return 
     createDeleteElement(addText.value)
     addText.value = '';
 } ); 
 
 function createDeleteElement(value) {
     const li = document.createElement('li');
     li.className = 'li';
     li.textContent = value;
     const deleteButton = document.createElement('button');
     deleteButton.className = 'button';
     deleteButton.textContent = 'Удалить';
     li.append(deleteButton);
     deleteButton.addEventListener('click',()=>{
         newTask.removeChild(li);
     })
     li.addEventListener('click',()=>{
         li.classList.toggle('li-active');
     })
     newTask.append(li);
 };