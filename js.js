var time = document.getElementById('time');
var cal = document.getElementById('calendar');
var backElem = document.getElementById("back");
var forwardElem = document.getElementById("forward");


function Calendar(day, year, month) {

var  Dlast = new Date(year,month+1,0).getDate();
var  D = new Date(year,month,Dlast);
var  DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay();
var  DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay();
var  tr = '<tr>';
var  td = '<td>'
var  month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];

if (DNfirst != 0) {

  for(var  i = 1; i < DNfirst; i++) tr += td;

}else{

  for(var  i = 0; i < 6; i++) tr += td;

}
for(var  i = 1; i <= Dlast; i++) {

  if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {

    tr += '<td class="today">' + i;

  }else{
    tr += '<td class="allDays">' + i;

  }
  if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {

    tr +=  '<tr>';

  }
}

document.querySelector('tbody').innerHTML = tr;
time.dataset.month = D.getMonth();
time.dataset.year = D.getFullYear();
time.innerText = month[D.getMonth()] +'-' + D.getFullYear();

}

Calendar(cal, new Date().getFullYear(), new Date().getMonth());

 forwardElem.addEventListener("click", function() {
     Calendar(cal, time.dataset.year, parseFloat(time.dataset.month)+1);
});
backElem.addEventListener("click", function() {
     Calendar(cal, time.dataset.year, parseFloat(time.dataset.month)-1);
});
