function correctDate(date) {
  return date < 10 ? "0" + date : date;
} 




function saleDate(){
  const day = document.getElementsByClassName("time")[0];
  const hours = document.getElementsByClassName("time")[1];
  const minutes = document.getElementsByClassName("time")[2];
  const seconds = document.getElementsByClassName("time")[3];
  const finishDate = new Date(2024, 11, 31);
  const currentDate = new Date();

  const date = finishDate - currentDate;
  day.innerHTML = correctDate(Math.trunc(date / (1000 * 60 * 60 * 24)));
  hours.innerHTML = correctDate(Math.trunc((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  minutes.innerHTML = correctDate(Math.trunc((date % (1000 * 60 * 60)) / (1000 * 60)));
  seconds.innerHTML = correctDate(Math.trunc((date % (1000 * 60)) / 1000));
}
saleDate();
setInterval(function(){
  saleDate();
},1000)



function roundedDate(secondTimerDate) {
  return secondTimerDate < 10 ? "0" + secondTimerDate : secondTimerDate;
} 


function timerCount(){
  const daysLeft = document.getElementsByClassName("timerNumbers")[0];
  const hoursLeft = document.getElementsByClassName("timerNumbers")[1];
  const minutesLeft = document.getElementsByClassName("timerNumbers")[2];
  const secondsLeft = document.getElementsByClassName("timerNumbers")[3];
  const discountFinish = new Date(2024, 11, 31);
  const secondTimerCurrentDate = new Date();

  const secondTimerDate = discountFinish - secondTimerCurrentDate;
  daysLeft.innerHTML = roundedDate(Math.trunc(secondTimerDate / (1000 * 60 * 60 * 24)));
  hoursLeft.innerHTML = roundedDate(Math.trunc((secondTimerDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  minutesLeft.innerHTML = roundedDate(Math.trunc((secondTimerDate % (1000 * 60 * 60)) / (1000 * 60)));
  secondsLeft.innerHTML = roundedDate(Math.trunc((secondTimerDate % (1000 * 60)) / 1000));
}
timerCount();
setInterval(function(){
  timerCount();
},1000)