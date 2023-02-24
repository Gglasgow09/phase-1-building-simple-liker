// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// describe( "main.js", () => {
//   it("contains a hidden modal", () => {
//     let modal = document.querySelector('.hidden')
//     expect(modal).not.to.equal(null)
//   } )
// } )

const likes = document.querySelectorAll('.like-glyph') 
 likes.forEach((pushLike) => { //we have an array of likes as we iterate over it its 1 at a time
  pushLike.addEventListener('click', () => {
      if (pushLike.textContent === EMPTY_HEART) {
        mimicServerCall()
      .then(() => {
        pushLike.textContent = FULL_HEART
        pushLike.className = 'activated-heart';
      })
      .catch((error) => {
         const err = document.getElementById("modal");
         err.className = ''
         err.textContent = error
         setTimeOut(() => err.className = 'hidden', 3000);
      })
    } else {
      pushLike.textContent = EMPTY_HEART
      pushLike.className = 'like-glyph'
    }
    
  })

 })


 



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) { //you can call the function without 
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
}
