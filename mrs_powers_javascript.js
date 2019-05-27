
/* home page */
$(document).ready(function(){
  $("button").click(function(){
    var x = $(this).next();
    x.toggle();
    /* https://www.w3schools.com/jquery/eff_toggle.asp this makes it so that when the button is pressed it either opens or closes the div*/
  });
  setTimeout(myTimeout1,2000);
  /* this determines how long the confetti will last*/
  setTimeout(myTimeout2,8000);
  /* this determines how much time before the question marks appear that lead to the senior fac page */

    $("button").hover(function(){
      $(this).css("background-color", "#fcc7e8");
    }, function(){
      $(this).css("background-color", "#ffedf8");
      /* https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_hover this makes the button background color change on hover and go back to the orignial color after not being hovered on */
    });
    $("button").hover(function(){
      $(this).css("color", "#5e1141");
    }, function(){
      $(this).css("color", "#c62f8d");
      /* https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_hover this makes the button text color change on hover and go back to the orignial color after not being hovered on*/
    });
  the_greetings();
});

function myTimeout1(){
  $('.confetti').fadeOut();
  //  http://jsfiddle.net/Khez/fv5dc/ this makes the confetti fadeout

}

function myTimeout2(){
  $('.asking').css("display", "block");
  // this makes the questions appear
}



/* Senior Fac Page*/
function setDate(){
    var months = ['January', 'February','March','April','May','June','July','August','September','October','November','December'];

    var todaysDate = new Date();
    var formattedDate;
    var dayOfWeek = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday'];


    formattedDate = dayOfWeek[todaysDate.getDay()]+ ", " + months[todaysDate.getMonth()] + " " + todaysDate.getDate() + ", " + todaysDate.getFullYear()


    document.getElementById('date').innerHTML = formattedDate;
    // this puts the date at the bottom of the div
}

function the_greetings(){
  var greeting
  var time = new Date().getHours();

  if (time<10){
    greeting = "Good Morning!"
  }

  else if (time<20) {
    greeting = "Good Afternoon!"
  }
  else {
    greeting = "Good Evening!"
  }
  document.getElementById('greetings').innerHTML = greeting;
  // https://www.w3schools.com/js/js_if_else.asp this puts a greeting at the top of the div
}
