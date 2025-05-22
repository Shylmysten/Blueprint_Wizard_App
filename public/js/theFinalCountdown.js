/*

THE FINAL COUNTDOWN
Countdown timer plugin by Ryan Tanner

documentation in process

options:

- Hours, Minutes, and Seconds will display the hours/minutes/seconds left AFTER removing the larger increment values 
    (so displaying 26 hours in days/hours would display as 1 day, 2 hours)
- TotalHours, TotalMinutes, and TotalSeconds will display the total time remaining in hours/minutes/seconds 
    (so displaying 26 hours in days/hours would display as 1 day, 26 hours)
    -- if, for example, hoursWrap and totalHoursWrap were both set to the same element, the totalHoursWrap value would override

- total/days/hours...Wrap is the jQuery selector for the element in which the calculated values will be inserted 
    (if multiple elements returned, will use first)

- addLeadingZero when set to true will give days/hours/minutes/seconds a leading zero if only one digit

- updateAsync when set to true will update the timer at a set interval

- intervalDuration, when updateAsync is set to true, is the duration at which the timer will be updated
    (in ms, so a value of 1000 would cause the timer to update every second)

- initialized() takes a callback function that processes when the timer is done initializing

- countdownComplete() takes a callback function that processes when the timer hits 0 time remaining

*/

(function($){

    jQuery.fn.countdownInit = function(cdTo, options){
        //console.log('end date: ' + cdTo);
        var opts = jQuery.extend({}, jQuery.fn.countdownInit.defaults, options);
        var timeRem = getTimeRemaining(cdTo, opts.addLeadingZero);
        if (timeRem.total <= 0){
            opts.countdownComplete();
            return;
        }
        //console.log('time remaining: ' + timeRem.total);
        var con = this;
        con.find(opts.totalWrap).text(timeRem.total);
        con.find(opts.daysWrap).text(timeRem.days);
        con.find(opts.hoursWrap).text(timeRem.hours);
        con.find(opts.minutesWrap).text(timeRem.minutes);
        con.find(opts.secondsWrap).text(timeRem.seconds);
        con.find(opts.totalHoursWrap).text(timeRem.totalHours);
        con.find(opts.totalMinutesWrap).text(timeRem.totalMinutes);
        con.find(opts.totalSecondsWrap).text(timeRem.totalSeconds);
        if (opts.updateAsync){
            var interval = setInterval(function(){
                timeRem = getTimeRemaining(cdTo, opts.addLeadingZero);
                con.find(opts.totalWrap).text(timeRem.total);
                con.find(opts.daysWrap).text(timeRem.days);
                con.find(opts.hoursWrap).text(timeRem.hours);
                con.find(opts.minutesWrap).text(timeRem.minutes);
                con.find(opts.secondsWrap).text(timeRem.seconds);
                con.find(opts.totalHoursWrap).text(timeRem.totalHours);
                con.find(opts.totalMinutesWrap).text(timeRem.totalMinutes);
                con.find(opts.totalSecondsWrap).text(timeRem.totalSeconds);
                if (timeRem.total <= 0){
                    clearInterval(interval);
                    opts.countdownComplete();
                }
            }, opts.intervalDuration);
        }
        opts.initialized();
    };

    jQuery.fn.countdownInit.defaults = {
        totalWrap: '.total',
        daysWrap: '.days',
        hoursWrap: '.hours',
        minutesWrap: '.minutes',
        secondsWrap: '.seconds',
        totalHoursWrap: '.totalHours',
        totalMinutesWrap: '.totalMinutes',
        totalSecondsWrap: '.totalSeconds',
        addLeadingZero: true,
        updateAsync: true,
        intervalDuration: 1000,
        initialized: function(){},
        countdownComplete: function(){}
    };

}(jQuery));

//return object of time from now to date/time supplied
function getTimeRemaining(endTime, addLeadingZero){
    var t = Date.parse(endTime) - Date.parse(new Date());
    var seconds = addLeadingZero ? leadingZero(Math.floor( (t/1000) % 60 )) : Math.floor( (t/1000) % 60 );
    var minutes = addLeadingZero ? leadingZero(Math.floor( (t/1000/60) % 60 )) : Math.floor( (t/1000/60) % 60 );
    var hours = addLeadingZero ? leadingZero(Math.floor( (t/(1000*60*60)) % 24 )) : Math.floor( (t/(1000*60*60)) % 24 );
    var totalSeconds = addLeadingZero ? leadingZero(Math.floor( (t/1000) )) : Math.floor( (t/1000) );
    var totalMinutes = addLeadingZero ? leadingZero(Math.floor( (t/1000/60) )) : Math.floor( (t/1000/60) );
    var totalHours = addLeadingZero ? leadingZero(Math.floor( (t/(1000*60*60)) )) : Math.floor( (t/(1000*60*60)) );
    var days = addLeadingZero ? leadingZero(Math.floor( t/(1000*60*60*24) )) : Math.floor( t/(1000*60*60*24) );
    return{
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
        'totalHours': totalHours,
        'totalMinutes': totalMinutes,
        'totalSeconds': totalSeconds
    };
}

//supply value; if value is only one character, prepend 0;
//use case: time values for minutes/seconds
function leadingZero(value){
    value = value.toString();
    if (value.length == 1){
        value = "0" + value;
    }
    return value;
}