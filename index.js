var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
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