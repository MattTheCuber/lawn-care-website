$(document).ready(function () {
  setInterval(updateTime, 1000);
});
function updateTime() {
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    var t_str = hours + ":" + minutes + " ";
    if(hours > 11){
        t_str += "PM";
    } else {
        t_str += "AM";
    }
    $('#time').html(t_str);
}
