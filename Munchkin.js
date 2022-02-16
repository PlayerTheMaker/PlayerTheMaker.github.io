var times = 0

document.onclick= function(event) {
    if (event===undefined) event= window.event;
    var target= 'target' in event? event.target : event.srcElement;

    if (target.tagName == 'IMG'){
      if (times > 10){
        alert("Well, I won't make any more dialoge for this!");
      } 
      if (times == 10){
        alert("the code is 13542")
        times += 1
      }
      if (times > 2 && times < 10){
        alert("Well, I won't make any more dialoge for this!");
        times += 1
      } 
      if (times == 2){
        alert('Are you doing this to see if there is new dialoge each time?');
        times += 1;
      } 
      if (times == 1){
        alert('Seriously?');
        times += 1;
      } 
      if (times == 0){
        alert('Please stop poking Munchkin');
        times += 1;
      } 
    } 
};