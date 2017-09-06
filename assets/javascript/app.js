$(document).ready(function(){


    var Count = 30;
    intervalTimer = setInterval(countDown,1000)


    function countDown(){
      Count -= 1;
      $("#count").html('<h3> You have '+ Count + " seconds left</h3> ") 

      if (Count  == 0) {
        clearTimeout(intervalTimer);
        $("#count").html("<h3>  Time's Up! </h3> ") 
      }
      
      return Count;
  }
  
})