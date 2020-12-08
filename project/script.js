// Form Validation code is given here. I do not know why it is not working on my website

const name = document.getElementById('name')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const area = document.getElementById('area')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []

    if(name.value === '' || name.value == null) {
        messages.push('Name is required')
    }

    if(messages.length > 0) {
        e.preventDeafault()
        errorElement.innerText = messages.join(', ')
    }

    if(email.value === '' || email.value == null) {
        messages.push('Email is required')
    }

    if(subject.value === '' || subject.value == null) {
        messages.push('Text is required')
    }

    if(area.value === '' || area.value == null) {
        messages.push('Text is required')
    }
    e.preventDeafault()
})

//Button in Contact Me Form
function revealMessage() {
    document.getElementById('hiddenMessage').style.display = 'block';
}



//slider 
var slides=document.querySelector('.slider-items').children;
 var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var totalSlides=slides.length;
var index=0;

nextSlide.onclick=function () {
     next("next");
}
prevSlide.onclick=function () {
     next("prev");
}

function next(direction){

   if(direction=="next"){
      index++;
       if(index==totalSlides){
        index=0;
       }
   } 
   else{
           if(index==0){
            index=totalSlides-1;
           }
           else{
            index--;
           }
    }

  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");     

}