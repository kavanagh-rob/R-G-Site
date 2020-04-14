var target_date = new Date('October 22 2020 13:00:00 GMT+0100').getTime();
 

var days, hours, minutes, seconds;
 
// get tag element
var countdown = document.getElementById('countdown');

 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value
    // countdown.innerHTML = '<span class="days">' + days +  ' <b>Days</b></span> <span class="hours">' + hours + ' <b>Hours</b></span> <span class="minutes">'
    // + minutes + ' <b>Minutes</b></span> <span class="seconds">' + seconds + ' <b>Seconds</b></span>';  


    countdown.innerHTML = '<div class="flex-w flex-c cd100 respon2">'+ 
    '<div class="flex-col-c wsize1 m-b-30">'+
        '<span class="l1-txt2 p-b-37 days">' +days+ '</span>'+
        '<span class="m1-txt2 p-r-20">Days</span>'+
    '</div>'+

    '<span class="l1-txt2 p-t-15 dis-none-sm">&nbsp;:&nbsp;</span>'+
    
    '<div class="flex-col-c wsize1 m-b-30">'+
        '<span class="l1-txt2 p-b-37 hours">' +hours+ '</span>'+
        '<span class="m1-txt2 p-r-20">Hr</span>'+
    '</div>'+

    
    '<span class="l1-txt2 p-t-15 dis-none-sm">&nbsp;:&nbsp;</span>'+
    '<div class="flex-col-c wsize1 m-b-30">'+
        '<span class="l1-txt2 p-b-37 minutes">' +minutes+ '</span>'+
        '<span class="m1-txt2 p-r-20">Min</span>'+
    '</div>'+

    '<span class="l1-txt2 p-t-15 dis-none-sm">&nbsp;:&nbsp;</span>'+

    '<div class="flex-col-c wsize1 m-b-30">'+
        '<span class="l1-txt2 p-b-37 seconds">' +seconds+ '</span>'+
        '<span class="m1-txt2 p-r-20">Sec</span>'+
    '</div>'+
'</div>'  
 
}, 1000);

  