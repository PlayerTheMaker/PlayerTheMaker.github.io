var correct = 0


document.addEventListener('keydown', function(event) {
    if (correct == 4){
      if(event.keyCode == 50) {
          window.location.replace("secret.html");
      }else{
        correct = 0
      }
    }
    if (correct == 3){
      if(event.keyCode == 52) {
          correct = 4
      }else{
        correct = 0
      }
    }
    if (correct == 2){
      if(event.keyCode == 53) {
          correct = 3
      }else{
        correct = 0
      }
    }
    if (correct == 1){
      if(event.keyCode == 51) {
          correct = 2
      }else{
        correct = 0
      }
    }
    if (correct == 0){
      if(event.keyCode == 49) {
          correct = 1
      }else{
        correct = 0
      }
    }
});



//my first time beating that game!!! yaaayaaayayayayaayayay
