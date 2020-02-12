let mostFreeTime = function(strArr){
    // ensure stringArray entered contains 3 or more events
    if(strArr.length<3){
        return("Input should contain 3 events or more.")
    }
    
    // initialise new array to hold values in 24hr clock format
    let newArr = [];

    /* 
    loop through the strArr, split the hours and minutes for each element
    determine at what time of day each time is. 
    For morning times, strip the AM and append the time to newArr
    For midday, strip the PM and append the time to newArr
    For past noon times, strip the PM, add 12 to change it to 24 hour clock and push to newArr
    */
    for(let i =0; i<strArr.length; i++){
        let splitTime= strArr[i].split('-');
        for(let j=0; j<splitTime.length; j++){
            let newTime;
            let check = splitTime[j].includes('PM');
            let twelveCheck = splitTime[j].includes(12);

            if(check===false && twelveCheck === false){
                newTime = splitTime[j].substring(0,5);
                newArr.push(newTime);
            };

            if(check===true && twelveCheck===true){
                newTime = splitTime[j].substring(0,5);
                newArr.push(newTime);
            };

            if(check===true  && twelveCheck===false){
                newTime = splitTime[j].substring(0,5);
                let arr = newTime.split(':');
                arr[0]= (parseInt(arr[0])+12).toString();
                arr = arr.join(':');
                newArr.push(arr);
            };
        };
    };

    // sort the newArr with  string type 24 hour clock times
    newArr.sort();

    // initialise an array to hold the duration of free time between events
    let  freeTimes = [];

    /*
    Ignoring the first and last times in the new array, loop through the array 
    starting with the second and third elements. Subtract the hours and minutes from each other.
    If minutes are less than 0, add 60 mins to them and subtract an hour from the hours.
    Append a beginning 0 to the mins or hours if they are single digits. 
    Store the time difference in the freeTimes array
    The loop goes on for the next two elements in the array, and so on
    */
    for(let x=1; x<newArr.length-1; x+=2){
        let timeDifference = [];
        let startDigit = '0';
        let earlierTime = newArr[x].split(':');
        let laterTime = newArr[x+1].split(':');

        // subtract minutes and hours
        let hours = parseInt(laterTime[0]-parseInt(earlierTime[0]));
        let mins = parseInt(laterTime[1]-parseInt(earlierTime[1]));

        if(mins<0){
            mins = mins + 60;
            hours = hours - 1;
        };

        mins = mins.toString();
        hours = hours.toString();

        if(mins.length<2){
            mins = startDigit.concat(mins);
        } else if (hours.length<2){
            hours = startDigit.concat(hours);
        }
        timeDifference[0] = hours;
        timeDifference[1] = mins;
        timeDifference = timeDifference.join(':');
        freeTimes.push(timeDifference);
    };

    // sort the  durations in ASC order
    freeTimes.sort();

    // the last duration in  the array is the largest and hence the result
    return(freeTimes[freeTimes.length-1]);
};

let array1 = ['11:10AM-12:45PM', '09:00AM-09:30AM', '03:00PM-04:00PM'];
console.log(mostFreeTime(array1))


