
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'



//CODE BEGINS HERE 
const errorModel = document.getElementById('modal')
errorModel.classList.add('hidden') 


const heartClicked = (event) => { 
  
  mimicServerCall()  
  .then(()=>{  
    if(event.target.textContent == EMPTY_HEART){  
      event.target.textContent = FULL_HEART       
      event.target.classList.add('activated-heart') 
    }else{
      event.target.textContent = EMPTY_HEART     
      event.target.classList.remove('activated-heart')   
    }
    
  })
  .catch(()=>{  
    errorModel.classList.remove('hidden')
    setTimeout(function(){  
      errorModel.classList.add('hidden') 
    }, 3000)
  })
  
}

let hearts = document.getElementsByClassName('like-glyph') 
for (let heart of hearts) { 
  heart.addEventListener('click', heartClicked) 

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}}
