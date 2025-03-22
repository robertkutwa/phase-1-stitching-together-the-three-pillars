/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {}
const glyphStates = {
    "♡": "♥",
    "♥": "♡"
  };
  
  const colorStates = {
    "red": "",
    "": "red"
  };
  
  // STEP 1: Select all like glyphs (hearts)
  const articleHearts = document.querySelectorAll(".like-glyph");
  
  function likeCallback(e) {
    const heart = e.target;
    mimicServerCall()
      .then(function(serverMessage) {
        alert("You notified the server!");
        alert(serverMessage);
        heart.innerText = glyphStates[heart.innerText];
        heart.style.color = colorStates[heart.style.color];
      })
      .catch(function(error) {
        alert("Something went wrong!");
      });
  }
  
  // STEP 3: Add event listeners to each heart
  for (const glyph of articleHearts) {
    glyph.addEventListener("click", likeCallback);
  }
  
  //------------------------------------------------------------------------------
  // Ignore after this point. Used only for demo purposes
  //------------------------------------------------------------------------------
  
  function mimicServerCall() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve("Pretend remote server notified of action!");
      }, 300);
    });
  }
  