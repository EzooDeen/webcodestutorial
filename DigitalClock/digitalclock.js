var hour_system = false; //false for 12-hr system

function currentTime() {

  var date = new Date(); /* creating object of Date class */

  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();

  var monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  if (hour_system)
  {
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    day = updateTime(day);
    month = monthlist[month];

    var time = document.getElementById("time"); 
    time.innerText = hour + " : " + min + " : " + sec; /* adding time to the div */

    var date_text = document.getElementById("date");
    date_text.innerText = day + " " + month + " " + year;

    var t = setTimeout(function(){ currentTime() }, 1000);
  }
  else
  {
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM";

    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);

    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    day = updateTime(day);
    month = monthlist[month];

    var time = document.getElementById("time"); 
    time.innerText = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */

    var date_text = document.getElementById("date");
    date_text.innerText = day + " " + month + " " + year;

    var t = setTimeout(function(){ currentTime() }, 1000);
   /* setting timer */
  }
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

function change24hrs()
{
  hour_system = true;
  return hour_system;
}

function change12hrs()
{
  hour_system = false;
  return hour_system;
}
currentTime();